class Piece {
    constructor (cxt) {
        this.cxt = cxt;
        this.color = 'blue';
        this.shape = [
            [2, 0, 0], 
            [2, 2, 2], 
            [0, 0, 0]
          ];

        //set starting position
        this.x = 3;
        this.y = 0;
    }

    //function to display the piece on the board
    draw () {
        this.cxt.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.cxt.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }

    move(p) {
        if (!this.hardDropped) {
          this.x = p.x;
          this.y = p.y;
        }
        this.shape = p.shape;
    }

    hardDrop() {
        this.hardDropped = true;
    }
}