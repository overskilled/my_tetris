class Board {
    constructor (cxt) {
        this.cxt = cxt;
    }

    reset () {
        this.grid = this.getEmptyBoard();
    }

    
    valid(p) {
        return p.shape.every((row, dy) => {
          return row.every((value, dx) => {
            let x = p.x + dx;
            let y = p.y + dy;
            return value === 0 || (this.isInsideWalls(x, y) && this.notOccupied(x, y));
          });
        });
      }

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