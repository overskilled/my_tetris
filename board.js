class board {
    constructor (cxt) {
        this.cxt = cxt;
        this.grid = this.getEmptyBoard()
    }

    getEmptyBoard() {
        return Array.from ( {length : ROWS}, () => Array(COLS).fill(0) );
    }
}