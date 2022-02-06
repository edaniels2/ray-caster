import { Camera } from './camera.js';
import { Input } from './input.js';
import { Minimap } from './minimap.js';
import { RayCaster } from './ray-caster.js';
import { BLOCK_SIZE, MAP, FOV, FRAME_RATE, MOVE_SPEED, SLIVER_SIZE, TILE_TYPES, TURN_SPEED } from './constants.js';

/**
 * Main entry point to the render engine. Responsible for initial setup and scheduling frame updates
 */
export class Renderer {
  mapChanged = true;
  prevTimestamp = 0;
  wasmModule = null;

  constructor(
    mainCanvas,
    minimapCanvas,
    initialMap = MAP,
    mapSizeX = 30,
    mapSizeY = 30
  ) {
    this.mainCanvas = mainCanvas;
    /** @type {number} */this.mapSizeX = mapSizeX;
    /** @type {number} */this.mapSizeY = mapSizeY;
    const { camera, mapData } = this.loadMap(initialMap);
    /** @type {number} */const screenWidth = mainCanvas.width;
    /** @type {number} */this.distToPlane = screenWidth / 2 / Math.tan(FOV / 2);
    /** @type {number} */this.numSlivers = Math.ceil(screenWidth / SLIVER_SIZE);
    /** @type {number} */this.deltaT = FOV / this.numSlivers;
    /** @type {number[][]} */this.mapData = mapData;
    /** @type {Camera} */this.camera = new Camera(camera);
    /** @type {Minimap} */this.minimap = new Minimap(this.camera, minimapCanvas, mapSizeX, mapSizeY, mapData);
  }

  start() {
    this.minimap.init();
    this.minimap.listenForChanges(() => this.mapChanged = true);
    Input.init(this.camera);
    this.rayCaster = new RayCaster(this.camera, this.distToPlane, this.mapData, this.mainCanvas, this.numSlivers, this.deltaT, this.minimap);
    this.rayCaster.init().then(() => {
      setInterval(() => requestAnimationFrame(this.update.bind(this)), 1000 / FRAME_RATE);
    });
  }

  update(/** @type {DOMHighResTimeStamp} */timestamp) {
    if (timestamp === this.prevTimestamp) {
      this.prevTimestamp = timestamp;
      return;
    }
    const moveSpeed = MOVE_SPEED * 24 / FRAME_RATE;
    const turnSpeed = TURN_SPEED * 24 / FRAME_RATE;
    let positionChanged = false;
    if (this.camera.movingFwd) {
      const targetX = this.camera.x + Math.cos(this.camera.t) * moveSpeed;
      const targetY = this.camera.y - Math.sin(this.camera.t) * moveSpeed;
      const gridY = Math.floor(targetY / BLOCK_SIZE);
      const gridX = Math.floor(targetX / BLOCK_SIZE);
      if (this.mapData[gridY][gridX] !== TILE_TYPES.WALL) {
        this.camera.x = targetX;
        this.camera.y = targetY;
        positionChanged = true;
      }
    }
    if (this.camera.movingBack) {
      const targetX = this.camera.x - Math.cos(this.camera.t) * moveSpeed;
      const targetY = this.camera.y + Math.sin(this.camera.t) * moveSpeed;
      const gridY = Math.floor(targetY / BLOCK_SIZE);
      const gridX = Math.floor(targetX / BLOCK_SIZE);
      if (this.mapData[gridY][gridX] !== TILE_TYPES.WALL) {
        this.camera.x = targetX;
        this.camera.y = targetY;
        positionChanged = true;
      }
    }
    if (this.camera.turningLeft) {
      this.camera.t += this.deltaT * turnSpeed;
      this.camera.t = this.rayCaster.wasmCalculations.normalizeAngle(this.camera.t);
      positionChanged = true;
    }
    if (this.camera.turningRight) {
      this.camera.t -= this.deltaT * turnSpeed;
      this.camera.t = this.rayCaster.wasmCalculations.normalizeAngle(this.camera.t);
      positionChanged = true;
    }
    if (this.camera.jumpCounter > 0) {
      // this curve was initially set to 'land' in 24 frames, generalized to any frame rate
      const x = (FRAME_RATE - this.camera.jumpCounter) * 24 / FRAME_RATE;
      // got this from a polynomial regression, creates a little push-off/landing bounce in the jump
      this.camera.altitude = 0.0018 * Math.pow(x, 4) - 0.0861 * Math.pow(x, 3) + 1.1798 * Math.pow(x, 2) - 3.5297 * x;
      this.camera.jumpCounter--;
      positionChanged = true;
    }
    if (positionChanged || this.mapChanged) {
      this.minimap.drawMiniMap(this.mapData, this.camera);
      this.rayCaster.cast();
      this.mapChanged = false;
    }
    this.prevTimestamp = timestamp;
  }

  loadMap(mapString) {
    const mapData = [], camera = {x: 0, y: 0, t: 3 * Math.PI / 2};
    for (let i = 0; i < this.mapSizeY; i++) {
      /** @type {number[]} */
      let row = [];
      for (let j = 0; j < this.mapSizeX; j++) {
        let char = mapString[i * this.mapSizeX + j];
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
      mapData.push(row);
    }
    return { camera, mapData };
  }
}
