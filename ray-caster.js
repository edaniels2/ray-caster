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

export class RayCaster {
  /** @type {{x: number, y: number, t: number}} */
  camera;
  /** @type {boolean[][]} */
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
    this.minimapCanvas.style.width = this.mapSizeX * MINIMAP_TILE_SIZE + 'px';
    this.minimapCanvas.style.height = this.mapSizeY * MINIMAP_TILE_SIZE + 'px';
    this.minimapCanvas.width = this.mapSizeX * MINIMAP_TILE_SIZE;
    this.minimapCanvas.height = this.mapSizeY * MINIMAP_TILE_SIZE;
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
    for (let i = 0; i < this.numSlivers; i++) {
      let dist = REALLY_FAR;
      let theta = this.normalizeAngle(this.camera.t + FOV / 2 - i * this.deltaT);
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

      // draw sliver
      let shade = Math.round(dist / 5);
      if (shade > 160) {
        shade = 160;
      }
      if (shade < 50) {
        shade = 50;
      }
      const r = Math.floor(Math.random() * 6);
      const g = Math.floor(Math.random() * 6);
      const b = Math.floor(Math.random() * 6);
      this.mainContext.fillStyle = `rgb(${shade + r}, ${shade + g}, ${shade + 10 + b})`;
      const height = BLOCK_SIZE / dist * this.distToPlane;
      const top = this.halfHeight - height / 2 + this.altitude / dist * this.distToPlane;
      this.mainContext.fillRect(i * SLIVER_SIZE, top, SLIVER_SIZE, height);
    }

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
    let dist = REALLY_FAR;
    for (const dir of ['vertical', 'horizontal']) {
      let hit = false, outOfBounds = false;
      let gridY = Math.floor(data[dir].y / BLOCK_SIZE);
      let gridX = Math.floor(data[dir].x / BLOCK_SIZE);
      if (gridX < 0 || gridX >= this.mapData[0].length || gridY < 0 || gridY >= this.mapData.length) {
        outOfBounds = true;
      } else if (this.mapData[gridY][gridX]) {
        hit = true;
      }
  
      while (!hit && !outOfBounds) {
        data[dir].x += data[dir].dX;
        data[dir].y += data[dir].dY;
        gridY = Math.floor(data[dir].y / BLOCK_SIZE);
        gridX = Math.floor(data[dir].x / BLOCK_SIZE);
        if (gridX < 0 || gridX >= this.mapData[0].length || gridY < 0 || gridY >= this.mapData.length) {
          outOfBounds = true;
        } else if (this.mapData[gridY][gridX]) {
          hit = true;
        }
      }
      dist = Math.min(dist,
        outOfBounds ? REALLY_FAR : this.getDistance({x: data[dir].x, y: data[dir].y}, this.camera)
      );
    }
    return dist;
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
        if (this.mapData[i][j]) {
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
        if (char === '.') {
          // place camera in the middle of the block
          camera.x = Math.round(j * BLOCK_SIZE + BLOCK_SIZE / 2);
          camera.y = Math.round(i * BLOCK_SIZE + BLOCK_SIZE / 2);
        }
        row.push(char === '#');
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
      if (!this.mapData[gridY] || !this.mapData[gridY][Math.floor(targetX / BLOCK_SIZE)]) {
        this.camera.x = targetX;
        this.camera.y = targetY;
      }
    }
    if (this.movingBack) {
      const targetX = this.camera.x - Math.cos(this.camera.t) * MOVE_SPEED;
      const targetY = this.camera.y + Math.sin(this.camera.t) * MOVE_SPEED;
      if (!this.mapData[Math.floor(targetY / BLOCK_SIZE)] || !this.mapData[Math.floor(targetY / BLOCK_SIZE)][Math.floor(targetX / BLOCK_SIZE)]) {
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
      debugger
      this.altitude = -Math.pow(this.jumpCounter / 3 - 4, 2) + 16;
      this.jumpCounter--;
    } else {
      this.altitude = 0;
    }
    if (this.camera.x !== this.prevCamX || this.camera.y !== this.prevCamY || this.camera.t !== this.prevCamT || this.mapChanged || this.altitude) {
      this.drawBackground();
      this.drawMiniMap(this.mapData, this.camera);
      this.cast();
      this.mapChanged = false;
    }
    this.prevCamX = this.camera.x;
    this.prevCamY = this.camera.y;
    this.prevCamT = this.camera.t;
  }

  drawBackground() {
    this.mainContext.fillStyle = '#b0c0b0';
    this.mainContext.fillRect(0, this.halfHeight, this.screenWidth, this.halfHeight);
    this.mainContext.fillStyle = 'skyblue';
    this.mainContext.fillRect(0, 0, this.screenWidth, this.halfHeight);
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
    const removing = this.mapData[gridY][gridX];
    toggleTile.call(this, mouse);
    this.minimapCanvas.onpointermove = toggleTile.bind(this);

    function toggleTile(event) {
      const { x, y } = this.getCanvasCoords(event, this.minimapCanvas);
      const gridX = Math.floor(x / MINIMAP_TILE_SIZE);
      const gridY = Math.floor(y / MINIMAP_TILE_SIZE);
      if (removing) {
        this.mapData[gridY][gridX] = false;
        this.minimapContext.clearRect(gridX * MINIMAP_TILE_SIZE + 1, gridY * MINIMAP_TILE_SIZE + 1, MINIMAP_TILE_SIZE - 2, MINIMAP_TILE_SIZE - 2);
      } else {
        this.mapData[gridY][gridX] = true;
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
}
