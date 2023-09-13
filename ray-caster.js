import { Camera } from './camera.js';
import { Minimap } from './minimap.js';
import { BLOCK_SIZE, FOV, Q4_BOUND, SPRITES, SPRITE_LOCATIONS, TEXTURE_FRAMES, TEXTURES, SPRITE_FRAMES } from './constants.js';
import loadWasm from './wasm/index.js';
import { TextureLoader } from './texture-loader.js';

/**
 * The main rendering engine, casts a ray out from the camera location for each vertical sliver of the
 * field of view * and calculates distance to walls, then overlays sprites at their specified location.
 *
 * The basic algorithm and most of the math are drawn from 'Implementing a Ray Caster` posts by Liam Wynn
 * https://wynnliam.github.io/blog/
 */

export class RayCaster {
  /** @type {Uint8ClampedArray} */imageBufferLiveView = null;
  /** @type {number} */mapPtr = null;
  /** @type {number} */wallSlice = null;
  /** @type Map<number, Uint8ClampedArray[] */animatedSprites = new Map;
  /** @type Map<number, Uint8ClampedArray[] */animatedTextures = new Map;
  wasmCalculations = null;

  constructor(camera, distToPlane, mapData, canvas, numSlivers, deltaT, minimap, mapSizeX, mapSizeY) {
    /** @type {Minimap} */this.minimap = minimap;
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
    /** @type {number} */this.mapSizeX = mapSizeX;
    /** @type {number} */this.mapSizeY = mapSizeY;
  }

  init() {
    return new Promise(resolve => TextureLoader.loadTextures().then(images => {
      const textures = images.textures;
      const sprites = images.sprites;
      this.minimap.listenForChanges(() => {
        if (this.mapPtr) {
          const mapDataLinear = this.mapData.flat();
          this.wasmCalculations.__unpin(this.mapPtr);
          this.mapPtr = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, mapDataLinear);
          this.wasmCalculations.setMapData(this.mapPtr, this.mapSizeX, this.mapSizeY);
          this.wasmCalculations.__pin(this.mapPtr);
        }
      });
      loadWasm().then(module => {
        this.wasmCalculations = module;
        this.wasmCalculations.setSize(this.screenWidth, this.screenHeight);
        const mapDataLinear = this.mapData.flat();
        this.mapPtr = this.wasmCalculations.setMapData(this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, mapDataLinear), this.mapSizeX, this.mapSizeY);
        this.wasmCalculations.__pin(this.mapPtr);

        // set up image data for all the sprites & textures in the wasm module
        for (let value of Object.values(TEXTURES)) {
          if (TEXTURE_FRAMES[value]) {
            const frames = TEXTURE_FRAMES[value].map(frameId => {
              const pointer = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, textures.get(frameId).data);
              this.wasmCalculations.__pin(pointer);
              return pointer;
            });
            this.animatedTextures.set(value, frames);
            this.wasmCalculations.setTexture(value, frames[0]);
          } else {
            const pointer = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, textures.get(value).data);
            this.wasmCalculations.__pin(pointer);
            this.wasmCalculations.setTexture(value, pointer);
          }
        }
        for (let value of Object.values(SPRITES)) {
          if (SPRITE_FRAMES[value]) {
            const frames = SPRITE_FRAMES[value].ids.map(frameId => {
              const pointer = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, sprites.get(frameId).data);
              this.wasmCalculations.__pin(pointer);
              return pointer;
            });
            this.animatedSprites.set(value, frames);
            this.wasmCalculations.setSprite(value, frames[0]);
          } else {
            const pointer = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, sprites.get(value).data);
            this.wasmCalculations.__pin(pointer);
            this.wasmCalculations.setSprite(value, pointer);
          }
        }

        // create frame buffer
        const size = this.screenWidth * this.screenHeight * 4;
        const imageBufferPtr = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, size);
        this.wasmCalculations.__pin(imageBufferPtr);
        this.wasmCalculations.setImageBuffer(imageBufferPtr);
        this.imageBufferLiveView = this.wasmCalculations.__getUint8ClampedArrayView(imageBufferPtr);
        resolve();
      });
    }));
  }

  /**
   * Project the current state to the main canvas & minimap
   */
  cast() {
    for (let renderX = 0; renderX < this.screenWidth; renderX++) {
      const rayAngle = this.wasmCalculations.drawSliver(renderX, this.camera.altitude, this.camera.t, this.camera.x, this.camera.y);
      this.minimap.miniMapRay(rayAngle);
    }

    // I'm guessing all the sprite stuff could be done more effeciently. Nothing is nearing
    // a bottleneck yet but if it does this is probably a good candidate for optimization
    const camera = this.camera;
    const normalizeAngle = this.wasmCalculations.normalizeAngle;
    const spriteLocations = SPRITE_LOCATIONS
      .filter(fieldOfView)
      .sort(distFromCamera);

    for (let sprite of spriteLocations) {
      this.wasmCalculations.drawSprite(sprite.x, sprite.y, sprite.id);
    }
    this.wasmCalculations.__collect();

    const imageData = new ImageData(this.imageBufferLiveView, this.screenWidth, this.screenHeight);
    this.ctx.putImageData(imageData, 0, 0);

    function fieldOfView(spriteDef) {
      const x = spriteDef.x * BLOCK_SIZE - camera.x;
      const y = spriteDef.y * BLOCK_SIZE - camera.y;
      const relativeAngle = normalizeAngle(Math.atan2(-y, x));
      const fovAngle = normalizeAngle(camera.t + FOV / 2 - relativeAngle);
      return fovAngle <= FOV * 2 || Q4_BOUND - fovAngle <= FOV;
    }

    function distFromCamera(a, b) {
      const ax = a.x * BLOCK_SIZE;
      const ay = a.y * BLOCK_SIZE;
      const bx = b.x * BLOCK_SIZE;
      const by = b.y * BLOCK_SIZE;
      const distA = Math.sqrt(Math.pow(ax - camera.x, 2) + Math.pow(ay - camera.y, 2));
      const distB = Math.sqrt(Math.pow(bx - camera.x, 2) + Math.pow(by - camera.y, 2));
      return distB - distA;
    }
  }
}
