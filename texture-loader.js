import { BLOCK_SIZE, TEXTURES, SPRITES, IMAGE_SOURCES, TEXTURE_FRAMES, SPRITE_FRAMES } from './constants.js';

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
      for (const tileType of Object.values(TEXTURES)) {
        if (Array.isArray(IMAGE_SOURCES.TILES[tileType])) {
          IMAGE_SOURCES.TILES[tileType].forEach((imageSrc, i) => {
            const key = TEXTURE_FRAMES[tileType][i];
            resolveTexture(imageSrc, key);
          });
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
        const def = IMAGE_SOURCES.SPRITES[spriteType];
        if (Array.isArray(def)) {
          def.forEach((frameDef, i) => {
            const key = SPRITE_FRAMES[spriteType].ids[i];
            resolveSprite(frameDef, key);
          })
        } else {
          resolveSprite(def, spriteType);
        }

        function resolveSprite(def, key) {
          const image = new Image();
          let x = 0, y = 0;
          image.src = def.file;
          if (def.coords) {
            x = def.coords[0];
            y = def.coords[1];
          }
          image.decode().then(() => {
            sprites.set(key, TextureLoader.extractTextureData(image, x, y));
            spritesReady = sprites.size === Object.values(IMAGE_SOURCES.SPRITES).flat().length;
            if (spritesReady && texturesReady) {
              resolve({ sprites, textures });
            }
          });
        }
      }
    });
  }
  
  static extractTextureData(/** @type {HTMLImageElement} */image, x = 0, y = 0) {
    const tempCanvas = document.createElement('canvas');
    document.body.appendChild(tempCanvas);
    const ctx = tempCanvas.getContext('2d');
    tempCanvas.width = BLOCK_SIZE;
    tempCanvas.height = BLOCK_SIZE;
    ctx.drawImage(image, x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE, 0, 0, BLOCK_SIZE, BLOCK_SIZE);
    const imageData = ctx.getImageData(0, 0, BLOCK_SIZE, BLOCK_SIZE);
    tempCanvas.remove();
    return imageData;
  }
}
