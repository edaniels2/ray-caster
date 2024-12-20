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
  // these values are only used for the intermediate map of image data, maybe combine the
  // process in texture-loader with passing the data to the wasm module in ray-caster
  [TEXTURES.WATER]: [4, 5, 6, 7],
};

export const SPRITES = {
  TREE: 1,
  RAIDEN: 2,
  DRAGON: 3,
  FIRE: 4,
  WALKER0: 20,
  WALKER1: 36,
  WALKER2: 52,
  WALKER3: 68,
  WALKER4: 84,
  WALKER5: 100,
  WALKER6: 116,
  WALKER7: 132,
  CAPYBARA: 148,
  LIGHTNING: 164,
};
export const SPRITE_FRAMES = {
  [SPRITES.FIRE]: {ids: [4, 5, 6, 7, 8, 9, 10, 11, 12], speed: 8},
  [SPRITES.WALKER0]: {ids: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], speed: 10},
  [SPRITES.WALKER1]: {ids: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], speed: 10},
  [SPRITES.WALKER2]: {ids: [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67], speed: 10},
  [SPRITES.WALKER3]: {ids: [68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83], speed: 10},
  [SPRITES.WALKER4]: {ids: [84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99], speed: 10},
  [SPRITES.WALKER5]: {ids: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115], speed: 10},
  [SPRITES.WALKER6]: {ids: [116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131], speed: 10},
  [SPRITES.WALKER7]: {ids: [132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147], speed: 10},
  [SPRITES.CAPYBARA]: {ids: [148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163], speed: 3},
  [SPRITES.LIGHTNING]: {ids: [164, 165, 166, 167, 168, 169, 170], speed: 7},
};
export const FULL_SHEET_SPRITES = {
  [SPRITES.WALKER0]: 'WALKER',
  [SPRITES.WALKER1]: 'WALKER',
  [SPRITES.WALKER2]: 'WALKER',
  [SPRITES.WALKER3]: 'WALKER',
  [SPRITES.WALKER4]: 'WALKER',
  [SPRITES.WALKER5]: 'WALKER',
  [SPRITES.WALKER6]: 'WALKER',
  [SPRITES.WALKER7]: 'WALKER',
}

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
    [SPRITES.WALKER0]: [
      {file: './sprites/walker1.png', coords: [0, 3]},
      {file: './sprites/walker1.png', coords: [1, 3]},
      {file: './sprites/walker1.png', coords: [2, 3]},
      {file: './sprites/walker1.png', coords: [3, 3]},
      {file: './sprites/walker1.png', coords: [4, 3]},
      {file: './sprites/walker1.png', coords: [5, 3]},
      {file: './sprites/walker1.png', coords: [6, 3]},
      {file: './sprites/walker1.png', coords: [7, 3]},
      {file: './sprites/walker1.png', coords: [8, 3]},
      {file: './sprites/walker1.png', coords: [9, 3]},
      {file: './sprites/walker1.png', coords: [10, 3]},
      {file: './sprites/walker1.png', coords: [11, 3]},
      {file: './sprites/walker1.png', coords: [12, 3]},
      {file: './sprites/walker1.png', coords: [13, 3]},
      {file: './sprites/walker1.png', coords: [14, 3]},
      {file: './sprites/walker1.png', coords: [15, 3]},
    ],
    [SPRITES.WALKER1]: [
      {file: './sprites/walker1.png', coords: [0, 2]},
      {file: './sprites/walker1.png', coords: [1, 2]},
      {file: './sprites/walker1.png', coords: [2, 2]},
      {file: './sprites/walker1.png', coords: [3, 2]},
      {file: './sprites/walker1.png', coords: [4, 2]},
      {file: './sprites/walker1.png', coords: [5, 2]},
      {file: './sprites/walker1.png', coords: [6, 2]},
      {file: './sprites/walker1.png', coords: [7, 2]},
      {file: './sprites/walker1.png', coords: [8, 2]},
      {file: './sprites/walker1.png', coords: [9, 2]},
      {file: './sprites/walker1.png', coords: [10, 2]},
      {file: './sprites/walker1.png', coords: [11, 2]},
      {file: './sprites/walker1.png', coords: [12, 2]},
      {file: './sprites/walker1.png', coords: [13, 2]},
      {file: './sprites/walker1.png', coords: [14, 2]},
      {file: './sprites/walker1.png', coords: [15, 2]},
    ],
    [SPRITES.WALKER2]: [
      {file: './sprites/walker1.png', coords: [0, 1]},
      {file: './sprites/walker1.png', coords: [1, 1]},
      {file: './sprites/walker1.png', coords: [2, 1]},
      {file: './sprites/walker1.png', coords: [3, 1]},
      {file: './sprites/walker1.png', coords: [4, 1]},
      {file: './sprites/walker1.png', coords: [5, 1]},
      {file: './sprites/walker1.png', coords: [6, 1]},
      {file: './sprites/walker1.png', coords: [7, 1]},
      {file: './sprites/walker1.png', coords: [8, 1]},
      {file: './sprites/walker1.png', coords: [9, 1]},
      {file: './sprites/walker1.png', coords: [10, 1]},
      {file: './sprites/walker1.png', coords: [11, 1]},
      {file: './sprites/walker1.png', coords: [12, 1]},
      {file: './sprites/walker1.png', coords: [13, 1]},
      {file: './sprites/walker1.png', coords: [14, 1]},
      {file: './sprites/walker1.png', coords: [15, 1]},
    ],
    [SPRITES.WALKER3]: [
      {file: './sprites/walker1.png', coords: [0, 4]},
      {file: './sprites/walker1.png', coords: [1, 4]},
      {file: './sprites/walker1.png', coords: [2, 4]},
      {file: './sprites/walker1.png', coords: [3, 4]},
      {file: './sprites/walker1.png', coords: [4, 4]},
      {file: './sprites/walker1.png', coords: [5, 4]},
      {file: './sprites/walker1.png', coords: [6, 4]},
      {file: './sprites/walker1.png', coords: [7, 4]},
      {file: './sprites/walker1.png', coords: [8, 4]},
      {file: './sprites/walker1.png', coords: [9, 4]},
      {file: './sprites/walker1.png', coords: [10, 4]},
      {file: './sprites/walker1.png', coords: [11, 4]},
      {file: './sprites/walker1.png', coords: [12, 4]},
      {file: './sprites/walker1.png', coords: [13, 4]},
      {file: './sprites/walker1.png', coords: [14, 4]},
      {file: './sprites/walker1.png', coords: [15, 4]},
    ],
    [SPRITES.WALKER4]: [
      {file: './sprites/walker1.png', coords: [0, 7]},
      {file: './sprites/walker1.png', coords: [1, 7]},
      {file: './sprites/walker1.png', coords: [2, 7]},
      {file: './sprites/walker1.png', coords: [3, 7]},
      {file: './sprites/walker1.png', coords: [4, 7]},
      {file: './sprites/walker1.png', coords: [5, 7]},
      {file: './sprites/walker1.png', coords: [6, 7]},
      {file: './sprites/walker1.png', coords: [7, 7]},
      {file: './sprites/walker1.png', coords: [8, 7]},
      {file: './sprites/walker1.png', coords: [9, 7]},
      {file: './sprites/walker1.png', coords: [10, 7]},
      {file: './sprites/walker1.png', coords: [11, 7]},
      {file: './sprites/walker1.png', coords: [12, 7]},
      {file: './sprites/walker1.png', coords: [13, 7]},
      {file: './sprites/walker1.png', coords: [14, 7]},
      {file: './sprites/walker1.png', coords: [15, 7]},
    ],
    [SPRITES.WALKER5]: [
      {file: './sprites/walker1.png', coords: [0, 6]},
      {file: './sprites/walker1.png', coords: [1, 6]},
      {file: './sprites/walker1.png', coords: [2, 6]},
      {file: './sprites/walker1.png', coords: [3, 6]},
      {file: './sprites/walker1.png', coords: [4, 6]},
      {file: './sprites/walker1.png', coords: [5, 6]},
      {file: './sprites/walker1.png', coords: [6, 6]},
      {file: './sprites/walker1.png', coords: [7, 6]},
      {file: './sprites/walker1.png', coords: [8, 6]},
      {file: './sprites/walker1.png', coords: [9, 6]},
      {file: './sprites/walker1.png', coords: [10, 6]},
      {file: './sprites/walker1.png', coords: [11, 6]},
      {file: './sprites/walker1.png', coords: [12, 6]},
      {file: './sprites/walker1.png', coords: [13, 6]},
      {file: './sprites/walker1.png', coords: [14, 6]},
      {file: './sprites/walker1.png', coords: [15, 6]},
    ],
    [SPRITES.WALKER6]: [
      {file: './sprites/walker1.png', coords: [0, 5]},
      {file: './sprites/walker1.png', coords: [1, 5]},
      {file: './sprites/walker1.png', coords: [2, 5]},
      {file: './sprites/walker1.png', coords: [3, 5]},
      {file: './sprites/walker1.png', coords: [4, 5]},
      {file: './sprites/walker1.png', coords: [5, 5]},
      {file: './sprites/walker1.png', coords: [6, 5]},
      {file: './sprites/walker1.png', coords: [7, 5]},
      {file: './sprites/walker1.png', coords: [8, 5]},
      {file: './sprites/walker1.png', coords: [9, 5]},
      {file: './sprites/walker1.png', coords: [10, 5]},
      {file: './sprites/walker1.png', coords: [11, 5]},
      {file: './sprites/walker1.png', coords: [12, 5]},
      {file: './sprites/walker1.png', coords: [13, 5]},
      {file: './sprites/walker1.png', coords: [14, 5]},
      {file: './sprites/walker1.png', coords: [15, 5]},
    ],
    [SPRITES.WALKER7]: [
      {file: './sprites/walker1.png', coords: [0, 4]},
      {file: './sprites/walker1.png', coords: [1, 4]},
      {file: './sprites/walker1.png', coords: [2, 4]},
      {file: './sprites/walker1.png', coords: [3, 4]},
      {file: './sprites/walker1.png', coords: [4, 4]},
      {file: './sprites/walker1.png', coords: [5, 4]},
      {file: './sprites/walker1.png', coords: [6, 4]},
      {file: './sprites/walker1.png', coords: [7, 4]},
      {file: './sprites/walker1.png', coords: [8, 4]},
      {file: './sprites/walker1.png', coords: [9, 4]},
      {file: './sprites/walker1.png', coords: [10, 4]},
      {file: './sprites/walker1.png', coords: [11, 4]},
      {file: './sprites/walker1.png', coords: [12, 4]},
      {file: './sprites/walker1.png', coords: [13, 4]},
      {file: './sprites/walker1.png', coords: [14, 4]},
      {file: './sprites/walker1.png', coords: [15, 4]},
    ],
    [SPRITES.CAPYBARA]: [
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [0, 5]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [1, 5]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [2, 5]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [3, 5]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [0, 6]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [1, 6]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [2, 6]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [3, 6]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [4, 6]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [5, 6]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [6, 6]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [7, 6]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [0, 7]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [1, 7]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [2, 7]},
      {file: './sprites/charlieTheCapybaraAnimationSheet.png', coords: [3, 7]},
    ],
    [SPRITES.LIGHTNING]: [
      {file: './sprites/OreVein.png'},
      {file: './sprites/OreVein.png'},
      {file: './sprites/64x64.png', coords: [7, 10]}, // blank tile; no reason to create image data for it, just add a way to specify skipping a frame
      {file: './sprites/OreVein.png'},
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
  { x: 29, y: 30, id: SPRITES.DRAGON, },
  { x: 29, y: 30, id: SPRITES.LIGHTNING, },
  { x: 30, y: 30, id: SPRITES.RAIDEN, },
  { x: 30, y: 30, id: SPRITES.FIRE, },
  { x: 25, y: 32, id: SPRITES.WALKER0, moveX: 35, },
  { x: 32, y: 21, id: SPRITES.CAPYBARA, t: Math.PI / 2, },
];

export const INITIAL_CAMERA = {
  x: 30 * BLOCK_SIZE + BLOCK_SIZE / 2,
  y: 35 * BLOCK_SIZE + BLOCK_SIZE / 2,
  t: Math.PI / 2,
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
