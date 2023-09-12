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

export const TILE_TYPES = { // probably expand this to allow different textures for each type
  GRASS: 1,
  PATH: 2,
  // CEILING: 4,
  WATER: [4, 5, 6, 7],
  WALL: 8,
}
export const SPRITES = {
  TREE: 1,
  KNIGHT: 2,
  DRAGON: 3,
};

export const IMAGE_SOURCES = {
  TILES: {
    [TILE_TYPES.GRASS]: './textures/LeavesOP.png',
    [TILE_TYPES.PATH]: './textures/Stone.png',
    [TILE_TYPES.WATER]: ['./textures/WaterF1.png', './textures/WaterF2.png', './textures/WaterF3.png', './textures/WaterF4.png'],
    [TILE_TYPES.WALL]: './textures/bricksx64.png',
  },
  SPRITES: {
    [SPRITES.TREE]: './sprites/Tree.png',
    [SPRITES.KNIGHT]: ['./sprites/64x64.png', 13, 9],
    [SPRITES.DRAGON]: ['./sprites/64x64.png', 2, 9],
  }
};

export const SPRITE_LOCATIONS = [
  { x: 15, y: 15, id: SPRITES.TREE, },
  { x: 15, y: 45, id: SPRITES.KNIGHT, },
  { x: 45, y: 15, id: SPRITES.KNIGHT, },
  { x: 45, y: 45, id: SPRITES.TREE, },
  { x: 30, y: 30, id: SPRITES.DRAGON, },
  { x: 29, y: 30, id: SPRITES.KNIGHT, },
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
