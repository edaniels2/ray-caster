import { Camera } from './camera.js';
import { Input } from './input.js';
import { Minimap } from './minimap.js';
import { RayCaster } from './ray-caster.js';
import { BLOCK_SIZE, LARGE_MAP, FOV, MOVE_SPEED, SLIVER_SIZE, TEXTURES, TURN_SPEED, INITIAL_CAMERA, TEXTURE_FRAMES, SPRITE_FRAMES } from './constants.js';

/**
 * Main entry point to the render engine. Responsible for initial setup and scheduling frame updates
 */
export class Renderer {
  animationCounter = 0;
  mapChanged = true;
  prevTimestamp = 0;
  wasmModule = null;

  constructor(
    mainCanvas,
    minimapCanvas,
    initialMap = LARGE_MAP,
    mapSizeX = 60,
    mapSizeY = 60,
    miniMapSizeX = 30,
    miniMapSizeY = 30,
    // initialMap = MAP,
    // mapSizeX = 30,
    // mapSizeY = 30
  ) {
    this.mainCanvas = mainCanvas;
    /** @type {number} */this.mapSizeX = mapSizeX;
    /** @type {number} */this.mapSizeY = mapSizeY;
    const mapData = this.loadMap(initialMap);
    /** @type {number} */const screenWidth = mainCanvas.width;
    /** @type {number} */this.distToPlane = screenWidth / 2 / Math.tan(FOV / 2);
    /** @type {number} */this.numSlivers = Math.ceil(screenWidth / SLIVER_SIZE);
    /** @type {number} */this.deltaT = FOV / this.numSlivers;
    /** @type {number[][]} */this.mapData = mapData;
    /** @type {Camera} */this.camera = new Camera(INITIAL_CAMERA);
    /** @type {Minimap} */this.minimap = new Minimap(this.camera, minimapCanvas, miniMapSizeX, miniMapSizeY, mapData);
  }

  start() {
    this.minimap.init();
    this.minimap.listenForChanges(() => this.mapChanged = true);
    Input.init(this.camera);
    this.rayCaster = new RayCaster(this.camera, this.distToPlane, this.mapData, this.mainCanvas, this.numSlivers, this.deltaT, this.minimap, this.mapSizeX, this.mapSizeY);
    this.rayCaster.init().then(() => {
      requestAnimationFrame(this.update.bind(this))});
  }

  update(/** @type {DOMHighResTimeStamp} */timestamp) {
    if (timestamp === this.prevTimestamp) {
      this.prevTimestamp = timestamp;
      return;
    }
    const secondsElapsed = (timestamp - this.prevTimestamp) * .001;
    const FRAME_RATE = 1 / secondsElapsed;
    const moveSpeed = MOVE_SPEED * 24 / FRAME_RATE;
    const turnSpeed = TURN_SPEED * 24 / FRAME_RATE;
    this.animationCounter += secondsElapsed;
    let positionChanged = false;
    if (this.camera.movingFwd) {
      const targetX = this.camera.x + Math.cos(this.camera.t) * moveSpeed;
      const targetY = this.camera.y - Math.sin(this.camera.t) * moveSpeed;
      const gridY = Math.floor(targetY / BLOCK_SIZE);
      const gridX = Math.floor(targetX / BLOCK_SIZE);
      if (this.mapData[gridY][gridX] !== TEXTURES.WALL) {
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
      if (this.mapData[gridY][gridX] !== TEXTURES.WALL) {
        this.camera.x = targetX;
        this.camera.y = targetY;
        positionChanged = true;
      }
    }
    if (this.camera.strafeLeft) {
      const targetX = this.camera.x - Math.sin(this.camera.t) * moveSpeed;
      const targetY = this.camera.y - Math.cos(this.camera.t) * moveSpeed;
      const gridY = Math.floor(targetY / BLOCK_SIZE);
      const gridX = Math.floor(targetX / BLOCK_SIZE);
      if (this.mapData[gridY][gridX] !== TEXTURES.WALL) {
        this.camera.x = targetX;
        this.camera.y = targetY;
        positionChanged = true;
      }
    }
    if (this.camera.strafeRight) {
      const targetX = this.camera.x + Math.sin(this.camera.t) * moveSpeed;
      const targetY = this.camera.y + Math.cos(this.camera.t) * moveSpeed;
      const gridY = Math.floor(targetY / BLOCK_SIZE);
      const gridX = Math.floor(targetX / BLOCK_SIZE);
      if (this.mapData[gridY][gridX] !== TEXTURES.WALL) {
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
    if (this.camera.jumpTime > 0) {
      // this curve was initially set to 'land' in 24 frames, generalized to any frame rate
      const x = this.camera.jumpTime * 24;
      // got this from a polynomial regression, creates a little push-off/landing bounce in the jump
      this.camera.altitude = 0.0018 * Math.pow(x, 4) - 0.0861 * Math.pow(x, 3) + 1.1798 * Math.pow(x, 2) - 3.5297 * x;
      this.camera.jumpTime -= secondsElapsed;
      positionChanged = true;
    }
    if (positionChanged || this.mapChanged) {
      this.minimap.updateOffset();
      this.mapChanged = false;
    }
    this.minimap.drawMiniMap(this.mapData, this.camera);

    for (let key of Object.keys(TEXTURE_FRAMES)) {
      const frameIndex = Math.floor(this.animationCounter * 4) % this.rayCaster.animatedTextures.get(Number(key)).length;
      this.rayCaster.wasmCalculations.setTexture(key, this.rayCaster.animatedTextures.get(Number(key))[frameIndex]);
    }
    for (let [key, value] of Object.entries(SPRITE_FRAMES)) {
      const frameIndex = Math.floor(this.animationCounter * value.speed) % this.rayCaster.animatedSprites.get(Number(key)).length;
      this.rayCaster.wasmCalculations.setSprite(key, this.rayCaster.animatedSprites.get(Number(key))[frameIndex]);
    }
    this.rayCaster.cast();
    this.prevTimestamp = timestamp;
    requestAnimationFrame(this.update.bind(this));
  }

  loadMap(mapString) {
    const mapData = [];
    for (let i = 0; i < this.mapSizeY; i++) {
      /** @type {number[]} */
      let row = [];
      for (let j = 0; j < this.mapSizeX; j++) {
        let char = mapString[i * this.mapSizeX + j];
        switch (char) {
          case ' ':
            row.push(TEXTURES.GRASS);
            break;
          case '#':
            row.push(TEXTURES.WALL);
            break;
          case 'w':
            row.push(TEXTURES.WATER)
            break;
          case '_':
            row.push(TEXTURES.PATH);
            break;
          // should put a default but for now just make sure the map string is valid
        }
      }
      mapData.push(row);
    }
    return mapData;
  }
}
