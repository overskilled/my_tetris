class Board {
    constructor (cxt) {
        this.cxt = cxt;
    }

    reset () {
        this.grid = this.getEmptyBoard();
    }

    
    valid(tetromino) {
        return tetromino.shape.every((row, dy) => {
          return row.every((value, dx) => {
            let x = tetromino.x + dx;
            let y = tetromino.y + dy;
            return value === 0 || (this.isInsideWalls(x, y) && this.notOccupied(x, y));
          });
        });
    }

    //function to rotate the tetrominos
    rotate (tetrominos, direction) {

        let tetro =JSON.parse(JSON.stringify(tetrominos));
        if(!tetrominos.hardDropped) {
            //we transpose the metrix
            for (let y = 0; y < tetro.shape.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    [tetro.shape[x][y], tetro.shape[y][x]] = [tetro.shape[y][x], tetro.shape[x][y]];
                }
            }
            //reverse the columns
            if (direction === ROTATION.RIGHT) {
                tetro.shape.forEach((row) => row.reverse());
            } else if (direction === ROTATION.LEFT) {
                tetro.shape.reverse();
            }
        }
        return tetro;
    } 

    //function to prevent the block from moving out of the board
    isInsideWalls(x, y) {
        return x >= 0 && x < COLS && y <= ROWS;
    }

    notOccupied(x, y) {
        return this.grid[y] && this.grid[y][x] === 0;
    }

    //get the board's metrix filled with zeros
    getEmptyBoard() {
        return Array.from ( {length : ROWS}, () => Array(COLS).fill(0) );
    }
}