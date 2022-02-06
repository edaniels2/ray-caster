import { Camera } from './camera.js';
import { BLOCK_SIZE, MINIMAP_TILE_SIZE, Q1_BOUND, Q2_BOUND, Q3_BOUND, TILE_TYPES } from './constants.js';

/**
 * Draws the minimap given current camera condition. Also handles the map editor functionality.
 */
export class Minimap {
  constructor(camera, canvas, mapSizeX, mapSizeY, mapData) {
    /** @type {Camera} */ this.camera = camera;
    /** @type {HTMLCanvasElement} */ this.canvas = canvas;
    /** @type {CanvasRenderingContext2D} */ this.ctx = canvas.getContext('2d');
    /** @type {number} */ this.mapSizeX = mapSizeX;
    /** @type {number} */ this.mapSizeY = mapSizeY;
    /** @type {number[][]} */ this.mapData = mapData;
  }

  init() {
    this.canvas.style.width = this.mapSizeX * MINIMAP_TILE_SIZE + 'px';
    this.canvas.style.height = this.mapSizeY * MINIMAP_TILE_SIZE + 'px';
    this.canvas.width = this.mapSizeX * MINIMAP_TILE_SIZE;
    this.canvas.height = this.mapSizeY * MINIMAP_TILE_SIZE;
    this.canvas.addEventListener('pointerdown', this.editMap.bind(this));
    this.canvas.addEventListener('pointerup', this.endEditMap.bind(this));
    this.drawMiniMap();
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
    this.ctx.clearRect(0, 0, totalX, totalY);
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#b0c0b0';
    this.ctx.stroke(new Path2D(pathString));
    for (let i = 0; i < this.mapSizeY; i++) {
      for (let j = 0; j < this.mapSizeX; j++) {
        if (this.mapData[i][j] === TILE_TYPES.WALL) {
          this.ctx.fillStyle = '#000000';
          this.ctx.fillRect(
            j * MINIMAP_TILE_SIZE,
            i * MINIMAP_TILE_SIZE,
            MINIMAP_TILE_SIZE,
            MINIMAP_TILE_SIZE
          );
        }
      }
    }
    this.ctx.fillStyle = '#ff0000';
    this.ctx.arc(xPos, yPos, 2, 0, Math.PI * 2);
    this.ctx.fill();
  }

  miniMapRay(/** @type {number} */alpha) {
    const xPos = this.camera.x / BLOCK_SIZE * MINIMAP_TILE_SIZE;
    const yPos = this.camera.y / BLOCK_SIZE * MINIMAP_TILE_SIZE;
    const rayLength = MINIMAP_TILE_SIZE * 10;
    let xEnd, yEnd;
    if (alpha < Q1_BOUND) {
      xEnd = xPos + Math.cos(alpha) * rayLength;
      yEnd = yPos - Math.sin(alpha) * rayLength;
    } else if (alpha < Q2_BOUND) {
      alpha -= Q1_BOUND;
      xEnd = xPos - Math.sin(alpha) * rayLength;
      yEnd = yPos - Math.cos(alpha) * rayLength;
    } else if (alpha < Q3_BOUND) {
      alpha -= Q2_BOUND;
      xEnd = xPos - Math.cos(alpha) * rayLength;
      yEnd = yPos + Math.sin(alpha) * rayLength;
    } else {
      alpha -= Q3_BOUND;
      xEnd = xPos + Math.sin(alpha) * rayLength;
      yEnd = yPos + Math.cos(alpha) * rayLength;
    }
    this.ctx.strokeStyle = 'rgba(0, 255, 0, 0.03)';
    this.ctx.beginPath();
    this.ctx.moveTo(xPos, yPos);
    this.ctx.lineTo(xEnd, yEnd);
    this.ctx.stroke();
    this.ctx.closePath();
    return true;
  }

  listenForChanges(fn) {
    this.canvas.addEventListener('mapChanged', fn);
  }

  editMap(/** @type {PointerEvent} */mouse) {
    const { x, y } = this.getCanvasCoords(mouse, this.canvas);
    const gridX = Math.floor(x / MINIMAP_TILE_SIZE);
    const gridY = Math.floor(y / MINIMAP_TILE_SIZE);
    const removing = this.mapData[gridY][gridX] === TILE_TYPES.WALL;
    toggleTile.call(this, mouse);
    this.canvas.onpointermove = toggleTile.bind(this);

    function toggleTile(event) {
      const { x, y } = this.getCanvasCoords(event, this.canvas);
      const gridX = Math.floor(x / MINIMAP_TILE_SIZE);
      const gridY = Math.floor(y / MINIMAP_TILE_SIZE);
      if (removing) {
        this.mapData[gridY][gridX] = TILE_TYPES.GRASS;
        this.ctx.clearRect(gridX * MINIMAP_TILE_SIZE + 1, gridY * MINIMAP_TILE_SIZE + 1, MINIMAP_TILE_SIZE - 2, MINIMAP_TILE_SIZE - 2);
      } else {
        this.mapData[gridY][gridX] = TILE_TYPES.WALL;
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(gridX * MINIMAP_TILE_SIZE, gridY * MINIMAP_TILE_SIZE, MINIMAP_TILE_SIZE, MINIMAP_TILE_SIZE);
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
