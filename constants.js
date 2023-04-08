//Board size 
const COLS       = 10;
const ROWS       = 20;
const BLOCK_SIZE = 30;
const LINES_PER_LEVEL = 10;
const NO_OF_HIGH_SCORES = 10;

//Tetrominos colors
const COLORS = [
    'none',
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
];


//keyboard key number mapping
const KEY = {
    LEFT  : 37,
    RIGHT : 39,
    DOWN  : 40,
    SPACE : 32,
    UP    : 38,
    ESC   : 27,
    PAUSE : 80,
    Q  : 81
}


const LEVEL = {
    0: 800,
    1: 720,
    2: 630,
    3: 550,
    4: 470,
    5: 380,
    6: 300,
    7: 220,
    8: 130,
    9: 100,
    10: 80,
    11: 80,
    12: 80,
    13: 70,
    14: 70,
    15: 70,
    16: 50,
    17: 50,
    18: 50,
    19: 30,
    20: 30,
};

const ROTATION = {
    LEFT: 'left',
    RIGHT: 'right'
};

[COLORS, SHAPES, KEY, POINTS, LEVEL, ROTATION].forEach(item => Object.freeze(item));


