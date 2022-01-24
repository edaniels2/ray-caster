import { Camera } from './camera.js';
import { Minimap } from './minimap.js';
import { BLOCK_SIZE, FOV, REALLY_FAR, Q1_BOUND, Q2_BOUND, Q3_BOUND, Q4_BOUND, SPRITES, TILE_TYPES } from './constants.js';

export class RayCaster {
  wallSlice = null;

  constructor(camera, distToPlane, mapData, canvas, numSlivers, deltaT, minimap, textures) {
    /** @type {Minimap} */this.minimap = minimap;
    /** @type {ImageData} */this.textures = textures.textures;
    /** @type {ImageData} */this.sprites = textures.sprites;
    /** @type {Camera} */this.camera = camera;
    /** @type {number} */this.distToPlane = distToPlane;
    /** @type {number[][]} */this.mapData = mapData;
    /** @type {CanvasRenderingContext2D} */this.ctx = canvas.getContext('2d');
    /** @type {number} */this.numSlivers = numSlivers;
    /** @type {number} */this.deltaT = deltaT;
    /** @type {number} */this.screenHeight = canvas.height;
    /** @type {number} */this.screenWidth = canvas.width;
    /** @type {number} */this.halfHeight = canvas.height / 2;
    /** @type {ImageData} */this.imageBuffer = new ImageData(this.screenWidth, this.screenHeight);
  }

  /**
   * Project the current state to the main canvas & minimap
   */
  cast() {
    let wallDistances = [];
    for (let renderX = 0; renderX < this.numSlivers; renderX++) {
      const beta = FOV / 2 - renderX * this.deltaT;
      const theta = normalizeAngle(this.camera.t + beta);
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
      dist *= Math.cos(normalizeAngle(this.camera.t - theta));
      wallDistances.push(dist);
      const height = BLOCK_SIZE / dist * this.distToPlane;

      // map the sliver to the image buffer pixel by pixel
      const cosBeta = Math.cos(beta);
      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);
      const topOfWall = this.halfHeight - height / 2 + this.camera.altitude / dist * this.distToPlane;
      const bottomOfWall = Math.floor(topOfWall + height);
      const shade = 1 - 1 / Math.abs(REALLY_FAR / 16 / (1 - dist)); // adds some light shadow to distant walls
      const distCoef = this.distToPlane * (BLOCK_SIZE / 2 + this.camera.altitude);
      for (let renderY = 0; renderY < this.screenHeight; renderY++) {
        const bufferStart = (renderY * this.screenWidth + renderX) * 4;
        if (renderY < topOfWall) {
          const distCoefCeil = this.distToPlane * (BLOCK_SIZE / 2 - this.camera.altitude);
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
                // rgb channels - darken proportional to distance
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
    }

    // wip - draw a tree in the middle of the map
    // once there are multiple sprites on screen they'll need to be sorted by distance far to near
    const sprite = this.sprites.get(SPRITES.TREE);
    const spritePosition = BLOCK_SIZE * 15; // wip only - get the position from some configuration mapping
    const spriteDist = this.getDistance(this.camera, {x: spritePosition, y: spritePosition});
    const spriteMapX = spritePosition - this.camera.x;
    const spriteMapY = spritePosition - this.camera.y;
    let gamma = normalizeAngle(Math.atan2(-spriteMapY, spriteMapX));
    gamma = normalizeAngle(this.camera.t + FOV / 2 - gamma);
    const spriteScreenX = Math.round(gamma * this.screenWidth / FOV);
    const altitudeCorrection = this.camera.altitude / spriteDist * this.distToPlane;
    const spriteScreenY = this.halfHeight + Math.round(1 / (1 - spriteDist) + altitudeCorrection);
    const spriteHeight = this.distToPlane * BLOCK_SIZE / spriteDist;
    const halfSprite = Math.round(spriteHeight / 2);
    const spriteIncrement = sprite.height / spriteHeight;
    let spriteDataX = 0;
    // not sure if this is generalizable, it may depend on the sprite image
    const fishEyeCorrection = -Math.cos(Q2_BOUND * Math.abs(this.screenWidth / 2 - spriteScreenX) / this.screenWidth) * 2 * this.screenWidth / spriteDist + 4;
    const correctedScreenY = Math.floor(spriteScreenY + fishEyeCorrection);

    for (let x = spriteScreenX - halfSprite; x < spriteScreenX + halfSprite; x++) {
      if (!wallDistances[x] || spriteDist < wallDistances[x]) {
        /** adjustment to 'move' the sprite around in its tile, probably will need to be associated with
         * the sprite image. */
        let spriteDataY = -10;
        for (let y = correctedScreenY - halfSprite; y < correctedScreenY + halfSprite; y++) {
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
    this.ctx.putImageData(this.imageBuffer, 0, 0);

    /**
     * q[1-4]Dist functions for each respective quadrant return the distance along a single ray to the nearest wall
     * @param {number} alpha angle in radians, must be between 0 and PI / 2
     * @returns {number}
     */
    function q1Dist(alpha) {
      const tanAlpha = Math.tan(alpha);
      const yV = (Math.floor(this.camera.y / BLOCK_SIZE) * BLOCK_SIZE) - 1;
      const xH = Math.ceil(this.camera.x / BLOCK_SIZE) * BLOCK_SIZE;
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
      this.minimap.miniMapRay(alpha, 1);
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
      this.minimap.miniMapRay(alpha, 2);
      return this.findWall(params);
    }

    function q3Dist(alpha) {
      const tanAlpha = Math.tan(alpha);
      const yV = Math.ceil(this.camera.y / BLOCK_SIZE) * BLOCK_SIZE;
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
      this.minimap.miniMapRay(alpha, 3);
      return this.findWall(params);
    }

    function q4Dist(alpha) {
      const tanAlpha = Math.tan(alpha);
      const yV = Math.ceil(this.camera.y / BLOCK_SIZE) * BLOCK_SIZE;
      const xH = Math.ceil(this.camera.x / BLOCK_SIZE) * BLOCK_SIZE;
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
      this.minimap.miniMapRay(alpha, 4);
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
}

/**
 * @param {number} theta angle in radians
 * @returns {number}
 */
export function normalizeAngle(theta) {
  while (theta < 0) {
    theta += Q4_BOUND;
  }
  while (theta > Q4_BOUND) {
    theta -= Q4_BOUND;
  }
  return theta;
}
