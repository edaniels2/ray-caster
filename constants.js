export const FRAME_RATE = 45;
export const FOV = Math.PI / 3; // 60 degrees
export const BLOCK_SIZE = 64;
export const MINIMAP_TILE_SIZE = 10;
export const MOVE_SPEED = 20;
export const REALLY_FAR = 100000;
export const SLIVER_SIZE = 1;
export const TURN_SPEED = 30;
export const Q1_BOUND = Math.PI / 2;
export const Q2_BOUND = Math.PI;
export const Q3_BOUND = Math.PI * 1.5;
export const Q4_BOUND = Math.PI * 2;

export const TILE_TYPES = { // probably expand this to allow different textures for each type
  GRASS: 1,
  PATH: 2,
  // CEILING: 4,
  WALL: 8,
}
export const SPRITES = {
  TREE: 0,
};

export const IMAGE_SOURCES = {
  TILES: {
    [TILE_TYPES.GRASS]: './textures/LeavesOP.png',
    [TILE_TYPES.PATH]: './textures/Stone.png',
    [TILE_TYPES.WALL]: './textures/bricksx64.png',
  },
  SPRITES: {
    [SPRITES.TREE]: './sprites/Tree.png',
  }
};

export const MAP =  '##############################' +
                    '#                            #' +
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
                    '#             .              #' +
                    '#                            #' +
                    '##############################';
