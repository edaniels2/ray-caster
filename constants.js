export const BLOCK_SIZE = 64;
export const FOV = Math.PI / 3; // 60 degrees
export const JUMP_TIME = 0.8; // in seconds
export const MINIMAP_TILE_SIZE = 10;
export const MOVE_SPEED = 20;
export const REALLY_FAR = 100000;
export const SLIVER_SIZE = 1; // todo: factor this out, it's no longer editable
export const TURN_SPEED = 30;
export const Q1_BOUND = Math.PI / 2;
export const Q2_BOUND = Math.PI;
export const Q3_BOUND = Math.PI * 1.5;
export const Q4_BOUND = Math.PI * 2;

export const TEXTURES = {
  GRASS: 1,
  PATH: 2,
  // CEILING: 4,
  WATER: 4,// [4, 5, 6, 7]
  WALL: 8,
}
// animated texture frame ids should start with the same number as the texture mapping but not
// overlap with any other texture id. It's kind of brittle, maybe try to find a better way (can symbols be passed to wasm?)
export const TEXTURE_FRAMES = {
  [TEXTURES.WATER]: [4, 5, 6, 7], // these values are only used for the intermediate map of image data, maybe combine the process in texture-loader with passing the data to the wasm module in ray-caster
};

export const SPRITES = {
  TREE: 1,
  RAIDEN: 2,
  DRAGON: 3,
  FIRE: 4,
};
export const SPRITE_FRAMES = {
  [SPRITES.FIRE]: {ids: [4, 5, 6, 7, 8, 9, 10, 11, 12], speed: 8},
};

export const IMAGE_SOURCES = {
  TILES: {
    [TEXTURES.GRASS]: './textures/LeavesOP.png',
    [TEXTURES.PATH]: './textures/Stone.png',
    [TEXTURES.WATER]: ['./textures/WaterF1.png', './textures/WaterF2.png', './textures/WaterF3.png', './textures/WaterF4.png'],
    [TEXTURES.WALL]: './textures/bricksx64.png',
  },
  SPRITES: {
    [SPRITES.TREE]: {file: './sprites/Tree.png'},
    [SPRITES.RAIDEN]: {file: './sprites/64x64.png', coords: [13, 9]},
    [SPRITES.DRAGON]: {file: './sprites/64x64.png', coords: [2, 9]},
    [SPRITES.FIRE]: [
      {file: './sprites/64x64.png', coords: [8, 10]},
      {file: './sprites/64x64.png', coords: [9, 10]},
      {file: './sprites/64x64.png', coords: [10, 10]},
      {file: './sprites/64x64.png', coords: [4, 11]},
      {file: './sprites/64x64.png', coords: [3, 11]},
      {file: './sprites/64x64.png', coords: [7, 10]},
      {file: './sprites/64x64.png', coords: [7, 10]},
      {file: './sprites/64x64.png', coords: [7, 10]},
      {file: './sprites/64x64.png', coords: [7, 10]},
    ],
  }
};

export const SPRITE_LOCATIONS = [
  { x: 15, y: 15, id: SPRITES.TREE, },
  { x: 15, y: 45, id: SPRITES.RAIDEN, },
  { x: 45, y: 15, id: SPRITES.RAIDEN, },
  { x: 45, y: 45, id: SPRITES.TREE, },
  { x: 30, y: 30, id: SPRITES.DRAGON, },
  { x: 29, y: 30, id: SPRITES.RAIDEN, },
  { x: 29, y: 30, id: SPRITES.FIRE, },
];

export const INITIAL_CAMERA = {
  x: 30 * BLOCK_SIZE + BLOCK_SIZE / 2,
  y: 23 * BLOCK_SIZE + BLOCK_SIZE / 2,
  t: 3 * Math.PI / 2,
};

export const MAP =  '##############################' +
                    '#.                           #' +
                    '#                            #' +
                    '#                            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#          ###__###          #' +
                    '#          #______#          #' +
                    '#   ########______########   #' +
                    '#   __________  __________   #' +
                    '#   __________  __________   #' +
                    '#   ########______########   #' +
                    '#          #______#          #' +
                    '#          ###__###          #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#            #__#            #' +
                    '#                            #' +
                    '#                            #' +
                    '#                            #' +
                    '##############################';

export const LARGE_MAP =  '############################################################' +
                          '#                                                          #' +
                          '#                                                          #' +
                          '#                                                          #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#          ###__###                      ###__###          #' +
                          '#          #______#                      #______#          #' +
                          '#   ########______########        ########______########   #' +
                          '#   __________  ____________________________  __________   #' +
                          '#   __________  ____________________________  __________   #' +
                          '#   ########______########   __   ########______########   #' +
                          '#          #______#          __          #______#          #' +
                          '#          ###__###          __          ###__###          #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#             __             __             __             #' +
                          '#             __  ________________________  __             #' +
                          '#             __  _wwwwwwwwwwwwwwwwwwwwww_  __             #' +
                          '#             _____wwwwwwwwwwwwwwwwwwwwww_____             #' +
                          '#             _____wwwwwwwwwwwwwwwwwwwwww_____             #' +
                          '#             __  _wwwwwwwwwwwwwwwwwwwwww_  __             #' +
                          '#             __  ________________________  __             #' +
                          '#             __             __             __             #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#            #__#            __            #__#            #' +
                          '#          ###__###          __          ###__###          #' +
                          '#          #______#          __          #______#          #' +
                          '#   ########______########   __   ########______########   #' +
                          '#   __________  ____________________________  __________   #' +
                          '#   __________  ____________________________  __________   #' +
                          '#   ########______########        ########______########   #' +
                          '#          #______#                      #______#          #' +
                          '#          ###__###                      ###__###          #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#            #__#                          #__#            #' +
                          '#                                                          #' +
                          '#                                                          #' +
                          '#                                                          #' +
                          '############################################################';
