import { Camera } from './camera.js';
import { Input } from './input.js';
import { Minimap } from './minimap.js';
import { RayCaster, normalizeAngle } from './ray-caster.js';
import { TextureLoader } from './texture-loader.js';
import { BLOCK_SIZE, MAP, FOV, FRAME_RATE, MOVE_SPEED, SLIVER_SIZE, TILE_TYPES, TURN_SPEED } from './constants.js';

/**
 * 
 */
export class Renderer {
  mapChanged = false;

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
    TextureLoader.loadTextures().then(textures => {
      /** @type {RayCaster} */
      this.rayCaster = new RayCaster(this.camera, this.distToPlane, this.mapData, this.mainCanvas, this.numSlivers, this.deltaT, this.minimap, textures);
      setInterval(this.update.bind(this), 1000 / FRAME_RATE);
    });
  }

  update() {
    if (this.camera.movingFwd) {
      const targetX = this.camera.x + Math.cos(this.camera.t) * MOVE_SPEED;
      const targetY = this.camera.y - Math.sin(this.camera.t) * MOVE_SPEED;
      const gridY = Math.floor(targetY / BLOCK_SIZE);
      const gridX = Math.floor(targetX / BLOCK_SIZE);
      if (this.mapData[gridY][gridX] !== TILE_TYPES.WALL) {
        this.camera.x = targetX;
        this.camera.y = targetY;
      }
    }
    if (this.camera.movingBack) {
      const targetX = this.camera.x - Math.cos(this.camera.t) * MOVE_SPEED;
      const targetY = this.camera.y + Math.sin(this.camera.t) * MOVE_SPEED;
      const gridY = Math.floor(targetY / BLOCK_SIZE);
      const gridX = Math.floor(targetX / BLOCK_SIZE);
      if (this.mapData[gridY][gridX] !== TILE_TYPES.WALL) {
        this.camera.x = targetX;
        this.camera.y = targetY;
      }
    }
    if (this.camera.turningLeft) {
      this.camera.t += this.deltaT * TURN_SPEED;
      this.camera.t = normalizeAngle(this.camera.t);
    }
    if (this.camera.turningRight) {
      this.camera.t -= this.deltaT * TURN_SPEED;
      this.camera.t = normalizeAngle(this.camera.t);
    }
    if (this.camera.jumpCounter) {
      const x = 25 - this.camera.jumpCounter;
      // got this from a polynomial regression, creates a little push-off/landing bounce in the jump
      this.camera.altitude = 0.0018 * Math.pow(x, 4) - 0.0861 * Math.pow(x, 3) + 1.1798 * Math.pow(x, 2) - 3.5297 * x;
      this.camera.jumpCounter--;
    } else {
      this.camera.altitude = 0;
    }
    if (this.camera.x !== this.camera.prevCamX || this.camera.y !== this.camera.prevCamY || this.camera.t !== this.camera.prevCamT || this.mapChanged || this.camera.altitude) {
      this.minimap.drawMiniMap(this.mapData, this.camera);
      this.rayCaster.cast();
      this.mapChanged = false;
    }
    this.camera.prevCamX = this.camera.x;
    this.camera.prevCamY = this.camera.y;
    this.camera.prevCamT = this.camera.t;
  }

  loadMap(mapString) {
    const mapData = [], camera = {x: 0, y: 0, t: Math.PI / 2};
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
