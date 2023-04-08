//Manipulate the document object
let canvas  = document.getElementById("board");
let cxt = canvas.getContext('2d');

//set the size of canvas
cxt.canvas.width  = COLS * BLOCK_SIZE;
cxt.canvas.height = ROWS * BLOCK_SIZE;

//scale the block
cxt.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board(cxt);

const moves = {
    [KEY.LEFT]  : tetrominos => ({...tetrominos, x: tetrominos.x - 1}),
    [KEY.RIGHT] : tetrominos => ({...tetrominos, x: tetrominos.x + 1}),
    [KEY.DOWN]  : tetrominos => ({...tetrominos, y: tetrominos.y + 1}),
    [KEY.SPACE] : tetrominos => ({...tetrominos, y: tetrominos.y +1}),
    [KEY.UP]    : tetrominos => board.rotate(tetrominos, ROTATION.RIGHT),
    [KEY.Q]     : tetrominos => board.rotate(tetrominos, ROTATION.LEFT)
};

document.addEventListener ('keydown', event => {
    if (moves[event.keyCode]) {
        //prevent event from bubbling
        event.preventDefault();

        //get the new position/state of the piece
        let p = moves[event.keyCode](board.piece);

        //check if th move is valid
        if (board.valid(p)) {
            board.piece.move(p);

            //cler the old position and draw the new one
            cxt.clearRect(0, 0, canvas.width, cxt.canvas.height);

            board.piece.draw();
        }
    }

    if (event.keyCode === KEY.SPACE) {
        while (board.valid(p)) {
            board.piece.move(p);
            p = moves[KEY.DOWN](board.piece);
        }
    }
});

function play() {
    board.reset();
    piece = new Piece(cxt);
    piece.draw();

    board.piece = piece;
    console.table(board.grid);
}

