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
    [KEY.LEFT]: p => ({...p, x: p.x - 1}),
    [KEY.RIGHT]: p => ({...p, x: p.x + 1}),
    [KEY.DOWN]: p => ({...p, y: p.y + 1})
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
});

function play() {
    board.reset();
    piece = new Piece(cxt);
    piece.draw();

    board.piece = piece;
    console.table(board.grid);
}

