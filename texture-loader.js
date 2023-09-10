import { BLOCK_SIZE, TILE_TYPES, SPRITES, IMAGE_SOURCES } from './constants.js';

/**
 * Extracts ImageData objects from external files and maps them to their type defined in 'constants.js'
 */
export class TextureLoader {
  /**
   * @return {Promise<{sprites: Map<number, ImageData>, textures: Map<number, ImageData>}>}
   */
  static loadTextures() {
    return new Promise(resolve => {
      const sprites = new Map, textures = new Map;
      let spritesReady = false, texturesReady = false;
      for (const tileType of Object.values(TILE_TYPES)) {
        if (Array.isArray(IMAGE_SOURCES.TILES[tileType])) {
          IMAGE_SOURCES.TILES[tileType].forEach((imageSrc, i) => resolveTexture(imageSrc, tileType[i]));
        } else {
          resolveTexture(IMAGE_SOURCES.TILES[tileType], tileType);
        }
        
        function resolveTexture(imageSrc, key) {
          const image = new Image();
          image.src = imageSrc;
          image.decode().then(() => {
            textures.set(key, TextureLoader.extractTextureData(image));
            texturesReady = textures.size === Object.values(IMAGE_SOURCES.TILES).flat().length;
            if (spritesReady && texturesReady) {
              resolve({ sprites, textures });
            }
          });
        }
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
