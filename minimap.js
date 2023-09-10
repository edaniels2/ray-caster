import { Camera } from './camera.js';
import { BLOCK_SIZE, MINIMAP_TILE_SIZE, TILE_TYPES } from './constants.js';

/**
 * Draws the minimap given current camera condition. Also handles the map editor functionality.
 */
export class Minimap {
  mapOffsetX = 0;
  mapOffsetY = 0;
  translateX = 0;
  translateY = 0;

  constructor(camera, canvas, miniMapSizeX, miniMapSizeY, mapData) {
    /** @type {Camera} */ this.camera = camera;
    /** @type {HTMLCanvasElement} */ this.canvas = canvas;
    /** @type {CanvasRenderingContext2D} */ this.ctx = canvas.getContext('2d');
    /** @type {number} */ this.miniMapSizeX = miniMapSizeX;
    /** @type {number} */ this.miniMapSizeY = miniMapSizeY;
    /** @type {number[][]} */ this.mapData = mapData;
    /** @type {number} */ this.totalMapSizeX = this.mapData.length;
    /** @type {number} */ this.totalMapSizeY = this.mapData[0].length;
    this.totalX = (this.miniMapSizeX + 3) * MINIMAP_TILE_SIZE;
    this.totalY = (this.miniMapSizeY + 3) * MINIMAP_TILE_SIZE;
    this.overscanOrigin = -2 * MINIMAP_TILE_SIZE;
  }

  init() {
    this.canvas.style.width = this.miniMapSizeX * MINIMAP_TILE_SIZE + 'px';
    this.canvas.style.height = this.miniMapSizeY * MINIMAP_TILE_SIZE + 'px';
    this.canvas.width = this.miniMapSizeX * MINIMAP_TILE_SIZE;
    this.canvas.height = this.miniMapSizeY * MINIMAP_TILE_SIZE;
    this.canvas.addEventListener('pointerdown', this.editMap.bind(this));
    this.canvas.addEventListener('pointerup', this.endEditMap.bind(this));
    this.initialOffset();
    this.drawMiniMap();
  }

  drawMiniMap() {
    this.ctx.clearRect(this.overscanOrigin, this.overscanOrigin, this.totalX, this.totalY);
    this.ctx.setTransform(1, 0, 0, 1, this.translateX, this.translateY);
    const xPos = (this.camera.x / BLOCK_SIZE - this.mapOffsetX) * MINIMAP_TILE_SIZE;
    const yPos = (this.camera.y / BLOCK_SIZE - this.mapOffsetY) * MINIMAP_TILE_SIZE;
    let pathString = '';
    // draw the grid
    for (let i = this.overscanOrigin; i < this.totalY; i += MINIMAP_TILE_SIZE) {
      pathString += `M ${i} ${this.overscanOrigin} v ${this.totalY} `;
    }
    for (let i = this.overscanOrigin; i < this.totalX; i += MINIMAP_TILE_SIZE) {
      pathString += `M ${this.overscanOrigin} ${i} h ${this.totalX} `;
    }
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#b0c0b0';
    this.ctx.stroke(new Path2D(pathString));
    // fill in walls, water, whatever else seems good to put on the map
    for (let i = this.overscanOrigin; i < this.miniMapSizeY + 2; i++) {
      const yOffset = i + this.mapOffsetY;
      for (let j = this.overscanOrigin; j < this.miniMapSizeX + 2; j++) {
        const xOffset = j + this.mapOffsetX;
        let fillSquare = true;
        switch (this.mapData?.[yOffset]?.[xOffset]) {
          case TILE_TYPES.WALL:
            this.ctx.fillStyle = '#000000';
            break;
          case TILE_TYPES.WATER:
            this.ctx.fillStyle = '#07f';
            break;
          default:
            fillSquare = false;
        }
        fillSquare && this.ctx.fillRect(
          j * MINIMAP_TILE_SIZE,
          i * MINIMAP_TILE_SIZE,
          MINIMAP_TILE_SIZE,
          MINIMAP_TILE_SIZE
        );
      }
    }
    // position marker
    this.ctx.fillStyle = '#ff0000';
    this.ctx.arc(xPos, yPos, 2, 0, Math.PI * 2);
    this.ctx.fill();
  }

  miniMapRay(/** @type {number} */alpha) {
    const xPos = (this.camera.x / BLOCK_SIZE - this.mapOffsetX) * MINIMAP_TILE_SIZE;
    const yPos = (this.camera.y / BLOCK_SIZE - this.mapOffsetY) * MINIMAP_TILE_SIZE;
    const rayLength = MINIMAP_TILE_SIZE * 10;
    const cosTerm = Math.cos(alpha) * rayLength;
    const sinTerm = Math.sin(alpha) * rayLength;
    const xEnd = xPos + cosTerm;
    const yEnd = yPos - sinTerm;
    this.ctx.strokeStyle = 'rgba(0, 255, 0, 0.03)';
    this.ctx.beginPath();
    this.ctx.moveTo(xPos, yPos);
    this.ctx.lineTo(xEnd, yEnd);
    this.ctx.stroke();
    this.ctx.closePath();
    return true;
  }

  updateOffset() {
    const mapBlockX = this.camera.x / BLOCK_SIZE - this.mapOffsetX;
    const mapBlockY = this.camera.y / BLOCK_SIZE - this.mapOffsetY;
    const mapHalfSizeX = this.miniMapSizeX / 2;
    const mapHalfSizeY = this.miniMapSizeY / 2;
    if (mapBlockX > (mapHalfSizeX + 5)) {
      this.mapOffsetX++;
      this.translateX = 0;
    } else if (mapBlockX > (mapHalfSizeX + 4)) {
      this.translateX = -1 * Math.floor((mapBlockX - mapHalfSizeX - 4) * MINIMAP_TILE_SIZE);
    }
    if (mapBlockX < (mapHalfSizeX - 5)) {
      this.mapOffsetX--;
      this.translateX = 10;
    } else if (mapBlockX < (mapHalfSizeX - 4)) {
      this.translateX = 10 - Math.floor((mapBlockX - mapHalfSizeX + 4) * MINIMAP_TILE_SIZE);
    }
    if (mapBlockY > (mapHalfSizeY + 5)) {
      this.mapOffsetY++;
      this.translateY = 0;
    } else if (mapBlockY > (mapHalfSizeY + 4)) {
      this.translateY = -1 * Math.floor((mapBlockY - mapHalfSizeY - 4) * MINIMAP_TILE_SIZE);
    }
    if (mapBlockY < (mapHalfSizeY - 5)) {
      this.mapOffsetY--;
      this.translateY = 10;
    } else if (mapBlockY < (mapHalfSizeY - 4)) {
      this.translateY = 10 - Math.floor((mapBlockY - mapHalfSizeY + 4) * MINIMAP_TILE_SIZE);
    }
  }

  initialOffset() {
    this.mapOffsetX = Math.floor(this.camera.x / BLOCK_SIZE) - this.miniMapSizeX / 2;
    this.mapOffsetY = Math.floor(this.camera.y / BLOCK_SIZE) - this.miniMapSizeY / 2;
  }

  listenForChanges(fn) {
    this.canvas.addEventListener('mapChanged', fn);
  }

  editMap(/** @type {PointerEvent} */mouse) {
    const { x, y } = this.getCanvasCoords(mouse, this.canvas);
    const gridX = Math.floor(x / MINIMAP_TILE_SIZE) + this.mapOffsetX;
    const gridY = Math.floor(y / MINIMAP_TILE_SIZE) + this.mapOffsetY;
    const removing = this.mapData[gridY][gridX] === TILE_TYPES.WALL;
    toggleTile.call(this, mouse);
    this.canvas.onpointermove = toggleTile.bind(this);

    function toggleTile(event) {
      const { x, y } = this.getCanvasCoords(event, this.canvas);
      const mapTileX = Math.floor(x / MINIMAP_TILE_SIZE);
      const worldTileX = mapTileX + this.mapOffsetX;
      const mapTileY = Math.floor(y / MINIMAP_TILE_SIZE);
      const worldTileY = mapTileY + this.mapOffsetY;
      if (removing) {
        this.mapData[worldTileY][worldTileX] = TILE_TYPES.GRASS;
        this.ctx.clearRect(mapTileX * MINIMAP_TILE_SIZE + 1, mapTileY * MINIMAP_TILE_SIZE + 1, MINIMAP_TILE_SIZE - 2, MINIMAP_TILE_SIZE - 2);
      } else {
        this.mapData[worldTileY][worldTileX] = TILE_TYPES.WALL;
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(mapTileX * MINIMAP_TILE_SIZE, mapTileY * MINIMAP_TILE_SIZE, MINIMAP_TILE_SIZE, MINIMAP_TILE_SIZE);
      }
    }
  }
  
  endEditMap() {
    this.canvas.onpointermove = null;
    this.canvas.dispatchEvent(new CustomEvent('mapChanged'));
  }
  
  getCanvasCoords(mouse, canvas) {
    const { left: offsetX, top: offsetY } = canvas.getBoundingClientRect();
    const x = mouse.clientX - offsetX;
    const y = mouse.clientY - offsetY;
    return { x, y };
  }
}
