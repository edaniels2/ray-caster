import { BLOCK_SIZE, TILE_TYPES, SPRITES, IMAGE_SOURCES } from './constants.js';

export class TextureLoader {
  /**
   * @return {Promise<{sprites: Map<number, ImageData>, textures: Map<number, ImageData>}>}
   */
  static loadTextures() {
    return new Promise(resolve => {
      const sprites = new Map, textures = new Map;
      let spritesReady = false, texturesReady = false;
      for (const tileType of Object.values(TILE_TYPES)) {
        const image = new Image();
        image.src = IMAGE_SOURCES.TILES[tileType];
        image.decode().then(() => {
          textures.set(tileType, TextureLoader.extractTextureData(image));
          texturesReady = textures.size === Object.keys(TILE_TYPES).length;
          if (spritesReady && texturesReady) {
            resolve({ sprites, textures });
          }
        });
      }
      for (const spriteType of Object.values(SPRITES)) {
        const image = new Image();
        image.src = IMAGE_SOURCES.SPRITES[spriteType];
        image.decode().then(() => {
          sprites.set(spriteType, TextureLoader.extractTextureData(image));
          spritesReady = sprites.size === Object.keys(SPRITES).length;
          if (spritesReady && texturesReady) {
            resolve({ sprites, textures });
          }
        });
      }
    });
  }
  
  static extractTextureData(/** @type {HTMLImageElement} */image) {
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
