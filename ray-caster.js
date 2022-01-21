const MAP = 
'####################' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#       .          #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'#                  #' +
'####################';
const TILE_TYPES = { // probably expand this to allow different textures for each type
  GRASS: 1,
  PATH: 2,
  // CEILING: 4,
  WALL: 8,
}
const SPRITES = {
  TREE: 0,
};

const FRAME_RATE = 24;
const FOV = Math.PI / 3; // 60 degrees
const BLOCK_SIZE = 64;
const MINIMAP_TILE_SIZE = 10;
const MOVE_SPEED = 15;
const REALLY_FAR = 100000;
const SLIVER_SIZE = 1;
const TURN_SPEED = 20;
const Q1_BOUND = Math.PI / 2;
const Q2_BOUND = Math.PI;
const Q3_BOUND = Math.PI * 1.5;
const Q4_BOUND = Math.PI * 2;
const USE_TEXTURES = true;

export class RayCaster {
  /** @type {{x: number, y: number, t: number}} */
  camera;
  /** @type {number[][]} */
  mapData;
  altitude = 0;
  jumpCounter = 0;
  movingFwd = false;
  movingBack = false;
  turningLeft = false;
  turningRight = false;
  prevCamX = null;
  prevCamY = null;
  prevCamT = null;
  wallSlice = null;

  constructor(mainCanvas, minimapCanvas, initialMap = MAP, mapSizeX = 20, mapSizeY = 20) {
    this.initialMap = initialMap;
    /** @type {HTMLCanvasElement} */
    this.mainCanvas = mainCanvas;
    /** @type {HTMLCanvasElement} */
    this.minimapCanvas = minimapCanvas;
    /** @type {number} */
    this.mapSizeX = mapSizeX;
    /** @type {number} */
    this.mapSizeY = mapSizeY;
    /** @type {number} */
    this.screenHeight = mainCanvas.height;
    /** @type {number} */
    this.screenWidth = mainCanvas.width;
    /** @type {number} */
    this.halfHeight = this.screenHeight / 2;
    /** @type {CanvasRenderingContext2D} */
    this.mainContext = this.mainCanvas.getContext('2d');
    /** @type {CanvasRenderingContext2D} */
    this.minimapContext = this.minimapCanvas.getContext('2d');
    /** @type {number} */
    this.distToPlane = this.screenWidth / 2 / Math.tan(FOV / 2);
    /** @type {number} */
    this.numSlivers = Math.ceil(this.screenWidth / SLIVER_SIZE);
    /** @type {number} */
    this.deltaT = FOV / this.numSlivers;
    /** @type {ImageData} */
    this.imageBuffer = new ImageData(this.screenWidth, this.screenHeight);
    /** @type {Map<number, ImageData>} */
    this.textures = new Map;
    /** @type {Map<number, ImageData>} */
    this.sprites = new Map;
    /** @type {boolean} */
    this.spritesReady = false;
    /** @type {boolean} */
    this.textureDataReady = false;
    /** @type {HTMLImageElement} */
    this.wallTexture = new Image(BLOCK_SIZE, BLOCK_SIZE);
    this.wallTexture.src = './textures/bricksx64.png';
    /** @type {HTMLImageElement} */
    this.grassTexture = new Image(BLOCK_SIZE, BLOCK_SIZE);
    this.grassTexture.src = './textures/LeavesOP.png';
    /** @type {HTMLImageElement} */
    this.pathTexture = new Image(BLOCK_SIZE, BLOCK_SIZE);
    this.pathTexture.src = './textures/Stone.png';
    /** @type {HTMLImageElement} */
    this.treeSprite = new Image(BLOCK_SIZE, BLOCK_SIZE);
    this.treeSprite.src = './sprites/Tree.png';
    this.minimapCanvas.style.width = this.mapSizeX * MINIMAP_TILE_SIZE + 'px';
    this.minimapCanvas.style.height = this.mapSizeY * MINIMAP_TILE_SIZE + 'px';
    this.minimapCanvas.width = this.mapSizeX * MINIMAP_TILE_SIZE;
    this.minimapCanvas.height = this.mapSizeY * MINIMAP_TILE_SIZE;
    this.grassTexture.decode().then(() => {
      this.textures.set(TILE_TYPES.GRASS, this.extractTextureData(this.grassTexture));
      this.textureDataReady = this.textures.size === Object.keys(TILE_TYPES).length;
      this.mapChanged = true;
    });
    this.pathTexture.decode().then(() => {
      this.textures.set(TILE_TYPES.PATH, this.extractTextureData(this.pathTexture));
      this.textureDataReady = this.textures.size === Object.keys(TILE_TYPES).length;
      this.mapChanged = true;
    });
    this.wallTexture.decode().then(() => {
      this.textures.set(TILE_TYPES.WALL, this.extractTextureData(this.wallTexture));
      this.textureDataReady = this.textures.size === Object.keys(TILE_TYPES).length;
      this.mapChanged = true;
    });
    this.treeSprite.decode().then(() => {
      this.sprites.set(SPRITES.TREE, this.extractTextureData(this.treeSprite));
      this.spritesReady = this.sprites.size === Object.keys(SPRITES).length;
      this.mapChanged = true;
    });
  }

  start() {
    const { initialMap, camera } = this.loadMap();
    this.mapData = initialMap;
    this.camera = camera;
    this.drawMiniMap();
    setInterval(this.update.bind(this), 1000 / FRAME_RATE);
    document.addEventListener('keyup', this.handleInput.bind(this));
    document.addEventListener('keydown', this.handleInput.bind(this));
    this.minimapCanvas.addEventListener('pointerdown', this.editMap.bind(this));
    this.minimapCanvas.addEventListener('pointerup', this.endEditMap.bind(this));
  }

  /**
   * Project the current state to the main canvas & minimap
   */
  cast() {
    let wallDistances = [];
    for (let renderX = 0; renderX < this.numSlivers; renderX++) {
      const beta = FOV / 2 - renderX * this.deltaT;
      const theta = this.normalizeAngle(this.camera.t + beta);
      let dist = REALLY_FAR;
      if (theta < Q1_BOUND) {
        dist = q1Dist.call(this, theta);
      } else if (theta < Q2_BOUND) {
        dist = q2Dist.call(this, theta - Q1_BOUND);
      } else if (theta < Q3_BOUND) {
        dist = q3Dist.call(this, theta - Q2_BOUND);
      } else {
        dist = q4Dist.call(this, theta - Q3_BOUND);
      }

      // fish eye correction
      dist *= Math.cos(this.normalizeAngle(this.camera.t - theta));
      wallDistances.push(dist);
      const height = BLOCK_SIZE / dist * this.distToPlane;

      if (USE_TEXTURES && this.textureDataReady) {
        // map the sliver to the image buffer pixel by pixel
        const cosBeta = Math.cos(beta);
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        const topOfWall = this.halfHeight - height / 2 + this.altitude / dist * this.distToPlane;
        const bottomOfWall = Math.floor(topOfWall + height);
        const shade = 1 - 1 / Math.abs(REALLY_FAR / 16 / (1 - dist)); // adds some light shadow to distant walls
        const distCoef = this.distToPlane * (BLOCK_SIZE / 2 + this.altitude);
        for (let renderY = 0; renderY < this.screenHeight; renderY++) {
          const bufferStart = (renderY * this.screenWidth + renderX) * 4;
          if (renderY < topOfWall) {
            const distCoefCeil = this.distToPlane * (BLOCK_SIZE / 2 - this.altitude);
            let pixel = this.halfHeight - renderY;
            pixel = pixel === 0 ? 1 : pixel;
            const straightDist = distCoefCeil / pixel;
            const distToP = straightDist / cosBeta;
            const x = this.camera.x + cosTheta * distToP;
            const y = this.camera.y - sinTheta * distToP;
            if (true) { // update the mapData to include ceilings (only on specified tiles)
              // rgba values for css 'skyblue'
              this.imageBuffer.data[bufferStart] = 135 + renderY * 0.5; // adds a little gradient to the sky
              this.imageBuffer.data[bufferStart + 1] = 206;
              this.imageBuffer.data[bufferStart + 2] = 235;
              this.imageBuffer.data[bufferStart + 3] = 255;
            } else {
              // use this once there are ceiling tiles
              const tileX = Math.floor(x % BLOCK_SIZE);
              const tileY = y < 0 ? Math.floor(y % BLOCK_SIZE) + BLOCK_SIZE : Math.floor(y % BLOCK_SIZE);
              const dataStart = (tileY * this.floorTextureData.width + tileX) * 4; // change to a different texture
              for (let offset = 0; offset < 4; offset++) {
                this.imageBuffer.data[bufferStart + offset] = this.floorTextureData.data[dataStart + offset];
              }
            }
          } else if (renderY < bottomOfWall) {
            if (renderY - topOfWall < 1) {
              // gray border
              for (let offset = 0; offset < 4; offset++) {
                this.imageBuffer.data[bufferStart + offset] = offset === 3 ? 200 : 0;
              }
            } else {
              // wall texture
              const texture = this.textures.get(TILE_TYPES.WALL);
              const tileX = this.wallSlice;
              const tileY = Math.floor((renderY - topOfWall) / height * BLOCK_SIZE);
              const dataStart = (tileY * BLOCK_SIZE + tileX) * 4;
              for (let offset = 0; offset < 4; offset++) {
                if (offset === 3) {
                  this.imageBuffer.data[bufferStart + offset] = texture.data[dataStart + offset];
                } else {
                  this.imageBuffer.data[bufferStart + offset] = shade * texture.data[dataStart + offset];
                }
              }
            }
          } else {
            // floor texture
            let pixel = renderY - this.halfHeight;
            pixel = pixel === 0 ? 1 : pixel;
            const straightDist = distCoef / pixel;
            const distToP = straightDist / cosBeta;
            const x = this.camera.x + cosTheta * distToP;
            const y = this.camera.y - sinTheta * distToP;
            const gridX = Math.floor(x / BLOCK_SIZE);
            const gridY = Math.floor(y / BLOCK_SIZE);
            const tileType = this.mapData[gridY] && this.mapData[gridY][gridX];
            const texture = this.textures.get(tileType);
            if (!texture) {
              // landed outside of map
              continue;
            }
            const tileX = Math.floor(x % BLOCK_SIZE);
            const tileY = y < 0 ? Math.floor(y % BLOCK_SIZE) + BLOCK_SIZE : Math.floor(y % BLOCK_SIZE);
            const dataStart = (tileY * texture.width + tileX) * 4;
            for (let offset = 0; offset < 4; offset++) {
              this.imageBuffer.data[bufferStart + offset] = texture.data[dataStart + offset];
            }
          }
        }
      } else { // probably just get rid of this
        // create some slight variation for texture
        let shade = Math.round(dist / 5);
        if (shade > 160) {
          shade = 160;
        }
        if (shade < 50) {
          shade = 50;
        }
        const r = Math.floor(Math.random() * 8);
        const g = Math.floor(Math.random() * 8);
        const b = Math.floor(Math.random() * 8);
        this.mainContext.fillStyle = `rgb(${shade + r}, ${shade + g}, ${shade + 10 + b})`;
        this.mainContext.fillRect(renderX * SLIVER_SIZE, top, SLIVER_SIZE, height);
      }
    }
    // wip - draw a tree in the middle of the map
    if (this.spritesReady) {
      const sprite = this.sprites.get(SPRITES.TREE);
      const spritePosition = BLOCK_SIZE * 15; // wip only - get the position from some configuration mapping
      const spriteDist = this.getDistance(this.camera, {x: spritePosition, y: spritePosition});
      const spriteMapX = spritePosition - this.camera.x;
      const spriteMapY = spritePosition - this.camera.y;
      let gamma = this.normalizeAngle(Math.atan2(-spriteMapY, spriteMapX));
      gamma = this.normalizeAngle(this.camera.t + FOV / 2 - gamma);
      const spriteScreenX = Math.round(gamma * this.screenWidth / FOV);
      const spriteScreenY = this.halfHeight + Math.round(1 / (1 - spriteDist) + this.altitude / spriteDist * this.distToPlane); // not sure if this is generalizable, it may depend on the sprite image
      const spriteHeight = this.distToPlane * BLOCK_SIZE / spriteDist;
      const halfSprite = Math.round(spriteHeight / 2);
      const spriteIncrement = sprite.height / spriteHeight;
      let spriteDataX = 0;
      for (let x = spriteScreenX - halfSprite; x < spriteScreenX + halfSprite; x++) {
        if (spriteDist < wallDistances[x]) { // only draw if this column of the sprite is closer than the wall
          let spriteDataY = -10; // adjustment to 'move' the sprite around in its tile, probably will need to be associated with the sprite image
          for (let y = spriteScreenY - halfSprite; y < spriteScreenY + halfSprite; y++) {
            if (y >= 0 && y < this.screenHeight && x >= 0 && x < this.screenWidth) {
              const bufferStart = (y * this.screenWidth + x) * 4;
              const dataStart = (Math.round(spriteDataY) * sprite.width + Math.round(spriteDataX)) * 4;
              for (let offset = 0; offset < 4; offset++) {
                const data = sprite.data[dataStart + offset];
                if (data) { // skip transparent pixels
                  this.imageBuffer.data[bufferStart + offset] = data;
                }
              }
            }
            spriteDataY += spriteIncrement;
          }
        }
        spriteDataX += spriteIncrement;
      }
    }
    this.mainContext.putImageData(this.imageBuffer, 0, 0);

    /**
     * q[1-4]Dist functions for each respective quadrant return the distance along a single ray to the nearest wall
     * @param {number} alpha angle in radians, must be between 0 and PI / 2
     * @returns {number}
     */
    function q1Dist(alpha) {
      const tanAlpha = Math.tan(alpha);
      const yV = (Math.floor(this.camera.y / BLOCK_SIZE) * BLOCK_SIZE) - 1;
      const xH = (Math.floor(this.camera.x / BLOCK_SIZE) * BLOCK_SIZE) + BLOCK_SIZE;
      const params = {
        vertical: {
          dX: BLOCK_SIZE / tanAlpha,
          dY: -BLOCK_SIZE,
          y: yV,
          x: this.camera.x + (this.camera.y - yV) / tanAlpha
        },
        horizontal: {
          dX: BLOCK_SIZE,
          dY: -BLOCK_SIZE * tanAlpha,
          y: this.camera.y + (this.camera.x - xH) * tanAlpha,
          x: xH
        }
      };
      this.miniMapRay(alpha, 1);
      return this.findWall(params);
    }

    function q2Dist(alpha) {
      const tanAlpha = Math.tan(alpha);
      const yV = (Math.floor(this.camera.y / BLOCK_SIZE) * BLOCK_SIZE) - 1;
      const xH = (Math.floor(this.camera.x / BLOCK_SIZE) * BLOCK_SIZE) - 1;
      const params = {
        vertical: {
          dX: -BLOCK_SIZE * tanAlpha,
          dY: -BLOCK_SIZE,
          y: yV,
          x: this.camera.x - (this.camera.y - yV) * tanAlpha
        },
        horizontal: {
          dX: -BLOCK_SIZE,
          dY: -BLOCK_SIZE / tanAlpha,
          y: this.camera.y - (this.camera.x - xH) / tanAlpha,
          x: xH
        }
      };
      this.miniMapRay(alpha, 2);
      return this.findWall(params);
    }

    function q3Dist(alpha) {
      const tanAlpha = Math.tan(alpha);
      const yV = (Math.floor(this.camera.y / BLOCK_SIZE) * BLOCK_SIZE) + BLOCK_SIZE;
      const xH = (Math.floor(this.camera.x / BLOCK_SIZE) * BLOCK_SIZE) - 1;
      const params = {
        vertical: {
          dX: -BLOCK_SIZE / tanAlpha,
          dY: BLOCK_SIZE,
          y: yV,
          x: this.camera.x - (yV - this.camera.y) / tanAlpha
        },
        horizontal: {
          dX: -BLOCK_SIZE,
          dY: BLOCK_SIZE * tanAlpha,
          y: this.camera.y + (this.camera.x - xH) * tanAlpha,
          x: xH
        }
      };
      this.miniMapRay(alpha, 3);
      return this.findWall(params);
    }

    function q4Dist(alpha) {
      const tanAlpha = Math.tan(alpha);
      const yV = (Math.floor(this.camera.y / BLOCK_SIZE) * BLOCK_SIZE) + BLOCK_SIZE;
      const xH = (Math.floor(this.camera.x / BLOCK_SIZE) * BLOCK_SIZE) + BLOCK_SIZE;
      const params = {
        vertical: {
          dX: BLOCK_SIZE * tanAlpha,
          dY: BLOCK_SIZE,
          y: yV,
          x: this.camera.x + (yV - this.camera.y) * tanAlpha
        },
        horizontal: {
          dX: BLOCK_SIZE,
          dY: BLOCK_SIZE / tanAlpha,
          y: this.camera.y + (xH - this.camera.x) / tanAlpha,
          x: xH
        }
      };
      this.miniMapRay(alpha, 4);
      return this.findWall(params);
    }
  }

  /**
   * Check each grid intersection for a wall
   * @param data parameters given by q[1-4]Dist functions
   * @returns {number} distance to nearest wall
   */
  findWall(data) {
    let vDist = REALLY_FAR, hDist = REALLY_FAR, vSlice = 0, hSlice = 0;
    for (const dir of ['vertical', 'horizontal']) {
      let hit = false, outOfBounds = false;
      let gridY = Math.floor(data[dir].y / BLOCK_SIZE);
      let gridX = Math.floor(data[dir].x / BLOCK_SIZE);
      if (gridX < 0 || gridX >= this.mapData[0].length || gridY < 0 || gridY >= this.mapData.length) {
        outOfBounds = true;
      } else if (this.mapData[gridY][gridX] === TILE_TYPES.WALL) {
        hit = true;
        if (dir === 'vertical') {
          vSlice = Math.floor(data[dir].x) % BLOCK_SIZE;
        } else {
          hSlice = Math.floor(data[dir].y) % BLOCK_SIZE;
        }
      }
  
      while (!hit && !outOfBounds) {
        data[dir].x += data[dir].dX;
        data[dir].y += data[dir].dY;
        gridY = Math.floor(data[dir].y / BLOCK_SIZE);
        gridX = Math.floor(data[dir].x / BLOCK_SIZE);
        if (gridX < 0 || gridX >= this.mapData[0].length || gridY < 0 || gridY >= this.mapData.length) {
          outOfBounds = true;
        } else if (this.mapData[gridY][gridX] === TILE_TYPES.WALL) {
          hit = true;
          if (dir === 'vertical') {
            vSlice = Math.floor(data[dir].x) % BLOCK_SIZE;
          } else {
            hSlice = Math.floor(data[dir].y) % BLOCK_SIZE;
          }
        }
      }
      if (dir === 'vertical') {
        vDist = this.getDistance({x: data[dir].x, y: data[dir].y}, this.camera);
      } else {
        hDist = this.getDistance({x: data[dir].x, y: data[dir].y}, this.camera);
      }
    }
    if (vDist < hDist) {
      this.wallSlice = vSlice;
      return vDist;
    } else {
      this.wallSlice = hSlice;
      return hDist;
    }
  }

  getDistance(p1, p2) {
    const dx = Math.abs(p1.x - p2.x);
    const dy = Math.abs(p1.y - p2.y);
    return Math.sqrt(dx * dx + dy * dy);
  }

  drawMiniMap() {
    const xPos = this.camera.x / BLOCK_SIZE * MINIMAP_TILE_SIZE;
    const yPos = this.camera.y / BLOCK_SIZE * MINIMAP_TILE_SIZE;
    const totalX = this.mapSizeX * MINIMAP_TILE_SIZE;
    const totalY = this.mapSizeY * MINIMAP_TILE_SIZE
    let pathString = '';
    for (let i = MINIMAP_TILE_SIZE; i < totalY; i += MINIMAP_TILE_SIZE) {
      pathString += `M ${i} 0 l 0 ${totalY} `;
    }
    for (let i = MINIMAP_TILE_SIZE; i < totalX; i += MINIMAP_TILE_SIZE) {
      pathString += `M 0 ${i} l ${totalX} 0 `;
    }
    this.minimapContext.clearRect(0, 0, totalX, totalY);
    this.minimapContext.beginPath();
    this.minimapContext.strokeStyle = '#b0c0b0';
    this.minimapContext.stroke(new Path2D(pathString));
    for (let i = 0; i < this.mapSizeY; i++) {
      for (let j = 0; j < this.mapSizeX; j++) {
        if (this.mapData[i][j] === TILE_TYPES.WALL) {
          this.minimapContext.fillStyle = '#000000';
          this.minimapContext.fillRect(
            j * MINIMAP_TILE_SIZE,
            i * MINIMAP_TILE_SIZE,
            MINIMAP_TILE_SIZE,
            MINIMAP_TILE_SIZE
          );
        }
      }
    }
    this.minimapContext.fillStyle = '#ff0000';
    this.minimapContext.arc(xPos, yPos, 2, 0, Math.PI * 2);
    this.minimapContext.fill();
  }

  miniMapRay(alpha, q) {
    const xPos = this.camera.x / BLOCK_SIZE * MINIMAP_TILE_SIZE;
    const yPos = this.camera.y / BLOCK_SIZE * MINIMAP_TILE_SIZE;
    const rayLength = MINIMAP_TILE_SIZE * 10;
    let xEnd, yEnd;
    switch(q) {
      case 1:
        xEnd = xPos + Math.cos(alpha) * rayLength;
        yEnd = yPos - Math.sin(alpha) * rayLength;
        break;
      case 2:
        xEnd = xPos - Math.sin(alpha) * rayLength;
        yEnd = yPos - Math.cos(alpha) * rayLength;
        break;
      case 3:
        xEnd = xPos - Math.cos(alpha) * rayLength;
        yEnd = yPos + Math.sin(alpha) * rayLength;
        break;
      case 4:
        xEnd = xPos + Math.sin(alpha) * rayLength;
        yEnd = yPos + Math.cos(alpha) * rayLength;
        break;
    }
    this.minimapContext.strokeStyle = 'rgba(0, 255, 0, 0.03)';
    this.minimapContext.beginPath();
    this.minimapContext.moveTo(xPos, yPos);
    this.minimapContext.lineTo(xEnd, yEnd);
    this.minimapContext.stroke();
    this.minimapContext.closePath();
    return true;
  }

  loadMap() {
    const initialMap = [], camera = {x: 0, y: 0, t: Math.PI / 4};
    for (let i = 0; i < this.mapSizeY; i++) {
      let row = [];
      for (let j = 0; j < this.mapSizeX; j++) {
        let char = this.initialMap[i * this.mapSizeX + j];
        switch (char) {
          case '.':
            // place camera in the middle of the block
            camera.x = Math.round(j * BLOCK_SIZE + BLOCK_SIZE / 2);
            camera.y = Math.round(i * BLOCK_SIZE + BLOCK_SIZE / 2);
          case ' ':
            row.push(TILE_TYPES.GRASS);
            break;
          case '#':
            row.push(TILE_TYPES.WALL);
            break;
          case '_':
            row.push(TILE_TYPES.PATH);
            break;
          // should put a default but for now just make sure the map string is valid
        }
      }
      initialMap.push(row);
    }
    return {initialMap, camera};
  }

  update() {
    if (this.movingFwd) {
      const targetX = this.camera.x + Math.cos(this.camera.t) * MOVE_SPEED;
      const targetY = this.camera.y - Math.sin(this.camera.t) * MOVE_SPEED;
      const gridY = Math.floor(targetY / BLOCK_SIZE);
      const gridX = Math.floor(targetX / BLOCK_SIZE);
      if (this.mapData[gridY][gridX] !== TILE_TYPES.WALL) {
        this.camera.x = targetX;
        this.camera.y = targetY;
      }
    }
    if (this.movingBack) {
      const targetX = this.camera.x - Math.cos(this.camera.t) * MOVE_SPEED;
      const targetY = this.camera.y + Math.sin(this.camera.t) * MOVE_SPEED;
      const gridY = Math.floor(targetY / BLOCK_SIZE);
      const gridX = Math.floor(targetX / BLOCK_SIZE);
      if (this.mapData[gridY][gridX] !== TILE_TYPES.WALL) {
        this.camera.x = targetX;
        this.camera.y = targetY;
      }
    }
    if (this.turningLeft) {
      this.camera.t += this.deltaT * TURN_SPEED;
      this.camera.t = this.normalizeAngle(this.camera.t);
    }
    if (this.turningRight) {
      this.camera.t -= this.deltaT * TURN_SPEED;
      this.camera.t = this.normalizeAngle(this.camera.t);
    }
    if (this.jumpCounter) {
      const x = 25 - this.jumpCounter;
      // got this from a polynomial regression, creates a little push-off/landing bounce in the jump
      this.altitude = 0.0018 * Math.pow(x, 4) - 0.0861 * Math.pow(x, 3) + 1.1798 * Math.pow(x, 2) - 3.5297 * x;
      this.jumpCounter--;
    } else {
      this.altitude = 0;
    }
    if (this.camera.x !== this.prevCamX || this.camera.y !== this.prevCamY || this.camera.t !== this.prevCamT || this.mapChanged || this.altitude) {
      this.drawMiniMap(this.mapData, this.camera);
      this.cast();
      this.mapChanged = false;
    }
    this.prevCamX = this.camera.x;
    this.prevCamY = this.camera.y;
    this.prevCamT = this.camera.t;
  }

  normalizeAngle(theta) {
    while (theta < 0) {
      theta += Q4_BOUND;
    }
    while (theta > Q4_BOUND) {
      theta -= Q4_BOUND;
    }
    return theta;
  }

  handleInput (/** @type {KeyboardEvent} */e) {
    const keyDown = e.type === 'keydown';
    switch(e.key) {
      case 'a':
        this.turningLeft = keyDown;
        break;
      case 'd':
        this.turningRight = keyDown;
        break;
      case 'w':
        this.movingFwd = keyDown;
        break;
      case 's':
        this.movingBack = keyDown;
        break;
      case ' ':
        if (!this.jumpCounter) {
          this.jumpCounter = 24;
        }
    }
  }

  editMap(/** @type {PointerEvent} */mouse) {
    const { x, y } = this.getCanvasCoords(mouse, this.minimapCanvas);
    const gridX = Math.floor(x / MINIMAP_TILE_SIZE);
    const gridY = Math.floor(y / MINIMAP_TILE_SIZE);
    const removing = this.mapData[gridY][gridX] === TILE_TYPES.WALL;
    toggleTile.call(this, mouse);
    this.minimapCanvas.onpointermove = toggleTile.bind(this);

    function toggleTile(event) {
      const { x, y } = this.getCanvasCoords(event, this.minimapCanvas);
      const gridX = Math.floor(x / MINIMAP_TILE_SIZE);
      const gridY = Math.floor(y / MINIMAP_TILE_SIZE);
      if (removing) {
        this.mapData[gridY][gridX] = TILE_TYPES.GRASS;
        this.minimapContext.clearRect(gridX * MINIMAP_TILE_SIZE + 1, gridY * MINIMAP_TILE_SIZE + 1, MINIMAP_TILE_SIZE - 2, MINIMAP_TILE_SIZE - 2);
      } else {
        this.mapData[gridY][gridX] = TILE_TYPES.WALL;
        this.minimapContext.fillStyle = '#000000';
        this.minimapContext.fillRect(gridX * MINIMAP_TILE_SIZE, gridY * MINIMAP_TILE_SIZE, MINIMAP_TILE_SIZE, MINIMAP_TILE_SIZE);
      }
    }
  }
  
  endEditMap() {
    this.minimapCanvas.onpointermove = null;
    this.mapChanged = true;
  }
  
  getCanvasCoords(mouse, canvas) {
    const { left: offsetX, top: offsetY } = canvas.getBoundingClientRect();
    const x = mouse.clientX - offsetX;
    const y = mouse.clientY - offsetY;
    return { x, y };
  }

  extractTextureData(/** @type {HTMLImageElement} */image) {
    const tempCanvas = document.createElement('canvas');
    document.body.appendChild(tempCanvas);
    const ctx = tempCanvas.getContext('2d');
    tempCanvas.width = BLOCK_SIZE;
    tempCanvas.height = BLOCK_SIZE;
    ctx.drawImage(image, 0, 0, BLOCK_SIZE, BLOCK_SIZE);
    const imageData = ctx.getImageData(0, 0, BLOCK_SIZE, BLOCK_SIZE);
    tempCanvas.remove();
    return imageData;
  }
}
