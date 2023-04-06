//Manipulate the document object
let canvas  = document.getElementById("board");
let cxt = canvas.getContext('2d');

//set the size of canvas
cxt.canvas.width  = COLS * BLOCK_SIZE;
cxt.canvas.height = ROWS * BLOCK_SIZE;

//scale the block
cxt.scale(BLOCK_SIZE, BLOCK_SIZE);


function play() {
    board = new board(cxt);
    console.table(board.grid);
}