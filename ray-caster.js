import { Camera } from './camera.js';
import { Minimap } from './minimap.js';
import { SPRITES, TILE_TYPES } from './constants.js';
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
  wasmCalculations = null;

  constructor(camera, distToPlane, mapData, canvas, numSlivers, deltaT, minimap) {
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
          this.wasmCalculations.setMapData(this.mapPtr, mapDataLinear);
          this.wasmCalculations.__pin(this.mapPtr);
        }
      });
      loadWasm().then(module => {
        this.wasmCalculations = module;
        this.wasmCalculations.setSize(this.screenWidth, this.screenHeight);
        const mapDataLinear = this.mapData.flat();
        this.mapPtr = this.wasmCalculations.setMapData(this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, mapDataLinear));
        this.wasmCalculations.__pin(this.mapPtr);
        const grassPtr = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, textures.get(TILE_TYPES.GRASS).data);
        this.wasmCalculations.__pin(grassPtr);
        const pathPtr = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, textures.get(TILE_TYPES.PATH).data);
        this.wasmCalculations.__pin(pathPtr);
        const wallPtr = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, textures.get(TILE_TYPES.WALL).data);
        this.wasmCalculations.__pin(wallPtr);
        const treePtr = this.wasmCalculations.__newArray(this.wasmCalculations.Uint8ClampedArray_ID, sprites.get(SPRITES.TREE).data);
        this.wasmCalculations.__pin(treePtr);
        this.wasmCalculations.setTexture(TILE_TYPES.GRASS, grassPtr);
        this.wasmCalculations.setTexture(TILE_TYPES.PATH, pathPtr);
        this.wasmCalculations.setTexture(TILE_TYPES.WALL, wallPtr);
        this.wasmCalculations.setSprite(SPRITES.TREE, treePtr);
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
    this.wasmCalculations.drawSprite();
    this.wasmCalculations.__collect();

    const imageData = new ImageData(this.imageBufferLiveView, this.screenWidth, this.screenHeight);
    this.ctx.putImageData(imageData, 0, 0);
  }
}
