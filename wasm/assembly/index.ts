// this is my first attempt at assemblyscript, it may be uglier than my initial
// plain js version but it still compiles to something more performant 

//can i export declare const and get this from 'imports' at instantiation?
const BLOCK_SIZE: u32 = 64;
const FOV: f64 = Math.PI / 3;
const REALLY_FAR: u32 = 100000;
const Q1_BOUND: f64 = Math.PI / 2;
const Q2_BOUND: f64 = Math.PI;
const Q3_BOUND: f64 = 3 * Math.PI / 2;
const Q4_BOUND: f64 = 2 * Math.PI;
const TEXTURES: TileTypes = {
  GRASS: 1,
  PATH: 2,
  WATER: 4,
  // CEILING: 4,
  WALL: 8,
};
const SPRITES: Sprites = {
  TREE: 1,
  RAIDEN: 2,
  DRAGON: 3,
};

// these may be changed but will at least be constant per frame
var screenWidth: u32 = 320;
var screenHeight: u32 = 200;
var deltaT: f64 = FOV / screenWidth;
var distToPlane: f64 = screenWidth / 2 / Math.tan(FOV / 2);
var halfHeight = <u32>(screenHeight / 2);
var imageBuffer: Uint8ClampedArray;
var textures: Map<u8, Uint8ClampedArray> = new Map();
var sprites: Map<u8, Uint8ClampedArray> = new Map();
var mapData: Uint8ClampedArray;
var mapSizeX: i16;
var mapSizeY: i16;
var wallDistances: Float64Array = new Float64Array(screenWidth);

// these are updated per frame
/** angle between center of view and ray angle */let beta: f64 = 0;
/** angle of current ray normalized between 0 - pi/4 */let theta: f64 = 0;
let camera: Camera = {x: 0, y: 0, t: 0, alt: 0};
/** x-index of currently drawing texture slice */let wallSlice: u8 = 0;

// export declare function miniMapRay(alpha: f64, q: u8): void;

export function setSize(width: u32, height: u32): void {
  screenWidth = width;
  screenHeight = height;
  deltaT = FOV / screenWidth;
  distToPlane = screenWidth / 2 / Math.tan(FOV / 2);
  halfHeight = screenHeight / 2;
}

export function setMapData(data: Uint8ClampedArray, sizeX: i16, sizeY: i16): Uint8ClampedArray {
  mapData = data;
  mapSizeX = sizeX;
  mapSizeY = sizeY;
  return mapData;
}

export function setImageBuffer(buffer: Uint8ClampedArray): void {
  imageBuffer = buffer;
}

export function setTexture(type: u8, data: Uint8ClampedArray): void {
  textures.set(type, data);
}

export function setSprite(type: u8, data: Uint8ClampedArray): void {
  sprites.set(type, data);
}

export function drawSliver(renderX: f64, cameraAlt: f64, cameraAngle: f64, cameraX: f64, cameraY: f64): f64 {
  camera.alt = cameraAlt;
  camera.t = cameraAngle;
  camera.x = cameraX;
  camera.y = cameraY;
  const dist: f64 = distToWall(renderX);
  wallDistances[<u32>renderX] = dist;
  const height: f64 = BLOCK_SIZE / dist * distToPlane;

  // map the sliver to the image buffer pixel by pixel
  const cosBeta: f64 = Math.cos(beta);
  const cosTheta: f64 = Math.cos(theta);
  const sinTheta: f64 = Math.sin(theta);
  const topOfWall: f64 = halfHeight - height / 2 + camera.alt / dist * distToPlane;
  const bottomOfWall = <u64>Math.floor(topOfWall + height);
  const shade: f64 = 1 - 1 / Math.abs(REALLY_FAR / 16 / (1 - dist)); // adds some light shadow to distant walls
  const distCoef: f64 = distToPlane * (BLOCK_SIZE / 2 + camera.alt);
  for (let renderY: u32 = 0; renderY < screenHeight; renderY++) {
    const bufferStart = <i64>(renderY * screenWidth + renderX) * 4;
    if (renderY < topOfWall) {
      if (true) { // update the mapData to include ceilings (only on specified tiles)
        // rgba values for css 'skyblue'
        imageBuffer[<i32>bufferStart] = 135 + renderY / 2 + 15; // adds a little gradient to the sky
        imageBuffer[<i32>(bufferStart + 1)] = 206;
        imageBuffer[<i32>(bufferStart + 2)] = 235;
        imageBuffer[<i32>(bufferStart + 3)] = 255;
      } else {
        // let pixel: u32 = <u32>(trunc(halfHeight) - renderY);
        // pixel = pixel == 0 ? 1 : pixel;
        // const distCoefCeil: f64 = distToPlane * (BLOCK_SIZE / 2 - camera.alt);
        // const straightDist: f64 = distCoefCeil / pixel;
        // const distToP: f64 = straightDist / cosBeta;
        // const x: f64 = camera.x + cosTheta * distToP;
        // const y: f64 = camera.y - sinTheta * distToP;
        // use this once there are ceiling tiles
        // const tileX = Math.floor(x % BLOCK_SIZE);
        // const tileY = y < 0 ? Math.floor(y % BLOCK_SIZE) + BLOCK_SIZE : Math.floor(y % BLOCK_SIZE);
        // const dataStart = (tileY * this.floorTextureData.width + tileX) * 4; // change to a different texture
        // for (let offset = 0; offset < 4; offset++) {
        //   imageBuffer[<i32>(bufferStart + offset] = this.floorTextureData.data[dataStart + offset];
        // }
      }
    } else if (renderY < bottomOfWall) {
      if (renderY - topOfWall < 1) {
        // gray border
        for (let offset = 0; offset < 4; offset++) {
          imageBuffer[<i32>(bufferStart + offset)] = offset == 3 ? 200 : 0;
        }
      } else {
        // wall texture
        const texture = textures.get(TEXTURES.WALL);
        const tileX = <u32>wallSlice;
        const tileY = <u32>Math.floor((renderY - topOfWall) / height * BLOCK_SIZE);
        const dataStart = <i64>(tileY * BLOCK_SIZE + tileX) * 4;
        for (let offset: i64 = 0; offset < 4; offset++) {
          if (offset == 3) {
            imageBuffer[<i32>(bufferStart + offset)] = texture[<i32>(dataStart + offset)];
          } else {
            // rgb channels - darken proportional to distance
            imageBuffer[<i32>(bufferStart + offset)] = <u8>(shade * <f64>texture[<i32>(dataStart + offset)]);
          }
        }
      }
    } else {
      // floor texture
      let pixel: f64 = f64(renderY - halfHeight);
      pixel = pixel == 0 ? 1 : pixel;
      const straightDist: f64 = distCoef / pixel;
      const distToP: f64 = straightDist / cosBeta;
      const x: f64 = camera.x + cosTheta * distToP;
      const y: f64 = camera.y - sinTheta * distToP;
      const gridX = <f64>Math.floor(x / BLOCK_SIZE);
      const gridY = <f64>Math.floor(y / BLOCK_SIZE);
      if (gridX < 0 || gridY < 0 || gridX >= mapSizeX || gridY >= mapSizeY) {
        continue;
      }
      // const mapIndex = <i32>(trunc(gridY) * mapSizeX + trunc(gridX));
      // if (mapIndex < 0 || mapIndex >= mapData.length) {
      //   // landed outside of map
      //   continue;
      // }
      const tileType = mapData[<i32>(f64(gridY * mapSizeX) + gridX)];
      const texture = textures.get(<u8>tileType);
      if (!texture) {
        continue;
      }
      const tileX = <f64>Math.floor(x % BLOCK_SIZE);
      const tileY = y < 0 ? <f64>Math.floor(y % BLOCK_SIZE) + BLOCK_SIZE : <f64>Math.floor(y % BLOCK_SIZE);
      const dataStart: i64 = <i64>((tileY * BLOCK_SIZE/* texture.width */ + tileX) * 4);
      for (let offset: i64 = 0; offset < 4; offset++) {
        imageBuffer[<i32>(bufferStart + offset)] = texture[<i32>(dataStart + offset)];
      }
    }
  }
  return theta;
}

export function drawSprite(mapX: f64, mapY: f64, spriteId: u8): void {
  const sprite: Uint8ClampedArray = sprites.get(spriteId);
  const spritePositionX: f64 = BLOCK_SIZE * mapX;
  const spritePositionY: f64 = BLOCK_SIZE * mapY;
  const spriteDist: f64 = getDistance(camera.x, camera.y, spritePositionX, spritePositionY) - /* sprite.width */BLOCK_SIZE / 2;
  const spriteMapX: f64 = spritePositionX - camera.x;
  const spriteMapY: f64 = spritePositionY - camera.y;
  const viewAngle: f64 = normalizeAngle(Math.atan2(-spriteMapY, spriteMapX));
  const gamma = normalizeAngle(camera.t + FOV / 2 - viewAngle);
  let spriteScreenX: i64 = <i64>Math.round(gamma * screenWidth / FOV);
  const altitudeCorrection: f64 = camera.alt / spriteDist * distToPlane;
  const spriteScreenY: i64 = <i64>(halfHeight + Math.round(1 / (1 - spriteDist) + altitudeCorrection));
  const spriteHeight: f64 = distToPlane * /* sprite.height */BLOCK_SIZE / spriteDist;
  const halfSprite = <i64>Math.round(spriteHeight / 2);
  const spriteIncrement: f64 = /* sprite.height */BLOCK_SIZE / spriteHeight;
  let spriteDataX = <f64>0;
  // not sure if this is generalizable, it may depend on the sprite image
  const fishEyeCorrection: f64 = -Math.cos(Q2_BOUND * Math.abs(screenWidth / 2 - <f64>spriteScreenX) / screenWidth) * 2 * screenWidth / spriteDist + 4;
  const correctedScreenY: i64 = <i64>Math.floor(<f64>spriteScreenY + fishEyeCorrection);

  if (spriteScreenX > screenWidth + halfSprite) {
    spriteScreenX -= <i64>Math.floor(screenWidth * 2 * Math.PI / FOV); // wrap around the circle
  }
  const sinViewAngle = -1 * Math.sin(viewAngle);
  let bufferCoef = <f64>halfSprite * sinViewAngle;
  for (let counter = <u8>0; counter < spriteHeight; counter++) {
    const bufferX = <i64>Math.floor(<f64>spriteScreenX - bufferCoef);
    bufferCoef -= sinViewAngle;
    if (bufferX >= 0 && bufferX < <i64>screenWidth) {
      if (!wallDistances[<i32>bufferX] || spriteDist < wallDistances[<i32>bufferX]) {
        /** adjustment to 'move' the sprite around in its tile, probably will need to be associated with
         * the sprite image. */
        let spriteDataY: f64 = spriteOffset(spriteId);
        for (let y: i64 = correctedScreenY - halfSprite; y < correctedScreenY + halfSprite; y++) {
          if (y >= 0 && y < <i64>screenHeight) {
            const bufferStart: i64 = (y * screenWidth + bufferX) * 4;
            const dataStart: i32 = <i32>(Math.floor(spriteDataY) * /* sprite.width */BLOCK_SIZE + Math.floor(spriteDataX)) * 4;
            if (dataStart >= 0 && dataStart < sprite.length) {
              // start on the alpha channel, if it's blank the pixel is transparent so just move on
              for (let offset: i32 = 3; offset >= 0; offset--) {
                const data: u8 = sprite[<i32>(dataStart + offset)];
                if (!data && offset === 3) {
                  break;
                }
                imageBuffer[<i32>(bufferStart + offset)] = data;
              }
            }
          }
          spriteDataY += spriteIncrement;
        }
      }
    }
    spriteDataX += spriteIncrement;
  }
}

function spriteOffset(spriteId: u8): f64 {
  if (spriteId === SPRITES.TREE) {
    return <f64>-8;
  }
  return <f64>0;
}

export function distToWall(sliverX: f64): f64 {
  beta = FOV / 2 - sliverX * deltaT;
  theta = normalizeAngle(camera.t + beta);
  let dist: f64;
  if (theta < Q1_BOUND) {
    dist = q1Dist(theta);
  } else if (theta < Q2_BOUND) {
    dist = q2Dist(theta - Q1_BOUND);
  } else if (theta < Q3_BOUND) {
    dist = q3Dist(theta - Q2_BOUND);
  } else {
    dist = q4Dist(theta - Q3_BOUND);
  }

  if (dist > REALLY_FAR) {
    dist = REALLY_FAR;
  }
  return dist * Math.cos(normalizeAngle(camera.t - theta));
}

function q1Dist(alpha: f64): f64 {
  const tanAlpha: f64 = Math.tan(alpha);
  const yV: f64 = (Math.floor(camera.y / BLOCK_SIZE) * BLOCK_SIZE) - 1;
  const xH: f64 = Math.ceil(camera.x / BLOCK_SIZE) * BLOCK_SIZE;
  const params: WallData = {
    vertical: {
      dX: <f64>BLOCK_SIZE / tanAlpha,
      dY: -1 * BLOCK_SIZE,
      y: yV,
      x: camera.x + (camera.y - yV) / tanAlpha
    },
    horizontal: {
      dX: BLOCK_SIZE,
      dY: <f64>(-1 * BLOCK_SIZE) * tanAlpha,
      y: camera.y + (camera.x - xH) * tanAlpha,
      x: xH
    }
  };
  // miniMapRay(alpha, 1);
  return findWall(params);
}

function q2Dist(alpha: f64): f64 {
  const tanAlpha: f64 = Math.tan(alpha);
  const yV: f64 = (Math.floor(camera.y / BLOCK_SIZE) * BLOCK_SIZE) - 1;
  const xH: f64 = (Math.floor(camera.x / BLOCK_SIZE) * BLOCK_SIZE) - 1;
  const params: WallData = {
    vertical: {
      dX: -1 * BLOCK_SIZE * tanAlpha,
      dY: -1 * BLOCK_SIZE,
      y: yV,
      x: camera.x - (camera.y - yV) * tanAlpha
    },
    horizontal: {
      dX: -1 * BLOCK_SIZE,
      dY: -1 * BLOCK_SIZE / tanAlpha,
      y: camera.y - (camera.x - xH) / tanAlpha,
      x: xH
    }
  };
  // miniMapRay(alpha, 2);
  return findWall(params);
}

function q3Dist(alpha: f64): f64 {
  const tanAlpha: f64 = Math.tan(alpha);
  const yV: f64 = Math.ceil(camera.y / BLOCK_SIZE) * BLOCK_SIZE;
  const xH: f64 = (Math.floor(camera.x / BLOCK_SIZE) * BLOCK_SIZE) - 1;
  const params: WallData = {
    vertical: {
      dX: -1 * BLOCK_SIZE / tanAlpha,
      dY: BLOCK_SIZE,
      y: yV,
      x: camera.x - (yV - camera.y) / tanAlpha
    },
    horizontal: {
      dX: -1 * BLOCK_SIZE,
      dY: BLOCK_SIZE * tanAlpha,
      y: camera.y + (camera.x - xH) * tanAlpha,
      x: xH
    }
  };
  // miniMapRay(alpha, 3);
  return findWall(params);
}

function q4Dist(alpha: f64): f64 {
  const tanAlpha: f64 = Math.tan(alpha);
  const yV: f64 = Math.ceil(camera.y / BLOCK_SIZE) * BLOCK_SIZE;
  const xH: f64 = Math.ceil(camera.x / BLOCK_SIZE) * BLOCK_SIZE;
  const params: WallData = {
    vertical: {
      dX: BLOCK_SIZE * tanAlpha,
      dY: BLOCK_SIZE,
      y: yV,
      x: camera.x + (yV - camera.y) * tanAlpha
    },
    horizontal: {
      dX: BLOCK_SIZE,
      dY: BLOCK_SIZE / tanAlpha,
      y: camera.y + (xH - camera.x) / tanAlpha,
      x: xH
    }
  };
  // miniMapRay(alpha, 4);
  return findWall(params);
}

function findWall(data: WallData): f64 {
  let vDist: f64 = REALLY_FAR, hDist: f64 = REALLY_FAR, vSlice: u8 = 0, hSlice: u8 = 0;
  const vHit = hitData(data.vertical, true);
  vSlice = vHit.slice;
  vDist = vHit.dist;
  const hHit = hitData(data.horizontal, false);
  hSlice = hHit.slice;
  hDist = hHit.dist;
  if (vDist < hDist) {
    wallSlice = vSlice;
    return vDist;
  } else {
    wallSlice = hSlice;
    return hDist;
  }
}

function hitData(data: HitData, intersectVert: bool): HitResult {
  let hit = false, outOfBounds = false;
  let gridY = <f64>Math.floor(data.y / BLOCK_SIZE);
  let gridX = <f64>Math.floor(data.x / BLOCK_SIZE);
  let slice: u8 = 0;
  if (gridX < 0 || gridX >= <f64>mapSizeX || gridY < 0 || gridY >= <f64>(mapSizeY)) {
    outOfBounds = true;
  } else if (mapData[<i32>(f64(gridY * mapSizeX) + gridX)] == TEXTURES.WALL) {
    hit = true;
    if (intersectVert) {
      slice = <u8>(Math.floor(data.x) % BLOCK_SIZE);
    } else {
      slice = <u8>(Math.floor(data.y) % BLOCK_SIZE);
    }
  }
  while (!hit && !outOfBounds) {
    data.x += data.dX;
    data.y += data.dY;
    gridY = <f64>Math.floor(data.y / <f64>BLOCK_SIZE);
    gridX = <f64>Math.floor(data.x / <f64>BLOCK_SIZE);
    if (gridX < 0 || gridX >= <f64>mapSizeX || gridY < 0 || gridY >= <f64>mapSizeY) {
      outOfBounds = true;
    } else if (mapData[<i32>(trunc(gridY * mapSizeX) + gridX)] == TEXTURES.WALL) {
      hit = true;
      if (intersectVert) {
        slice = <u8>(Math.floor(data.x) % BLOCK_SIZE);
      } else {
        slice = <u8>(Math.floor(data.y) % BLOCK_SIZE);
      }
    }
  }
  return {slice, dist: getDistance(data.x, data.y, camera.x, camera.y)};
}

function getDistance(x1: f64, y1: f64, x2: f64, y2: f64): f64 {
  const dx: f64 = Math.abs(x1 - x2);
  const dy: f64 = Math.abs(y1 - y2);
  return Math.sqrt(dx * dx + dy * dy);
}

export function normalizeAngle(angle: f64): f64 {
  while (angle < 0) {
    angle += Q4_BOUND;
  }
  while (angle > Q4_BOUND) {
    angle -= Q4_BOUND;
  }
  return angle;
}

export const Uint8ClampedArray_ID = idof<Uint8ClampedArray>();

class Camera {
  x: f64;
  y: f64;
  t: f64;
  alt: f64;
}

class TileTypes {
  GRASS: u8;
  PATH: u8;
  WATER: u8;
  WALL: u8;
}

class Sprites {
  TREE: u8;
  RAIDEN: u8;
  DRAGON: u8;
}

class HitData {
  dX: f64;
  dY: f64;
  y: f64;
  x: f64;
}

// i don't know if I like this class setup, but it's the way I initially did it and just want to see if it works
class WallData {
  vertical: HitData;
  horizontal: HitData;
}

class HitResult {
  slice: u8;
  dist: f64;
}
