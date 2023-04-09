class Piece {
    constructor (cxt) {
        this.cxt = cxt;
        this.generate();
    }

   

    //function to generate a new tetromino
    generate () {
        this.typeId = this.randomizeTetrominoType(COLORS.length - 1);
        this.shape = SHAPES[this.typeId];
        this.color = COLORS[this.typeId];
        this.x = 0;
        this.y = 0;
        this.hardDropped = false;
    }

     //function to display the piece on the board
     draw() {
        this.cxt.fillStyle = this.color;
        this.shape.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value > 0) {
              this.cxt.fillRect(this.x + x, this.y + y, 1, 1);
            }
          });
        });
      }

    //function to move the tetromino
    move(tetromino) {
        if (!this.hardDropped) {
          this.x = tetromino.x;
          this.y = tetromino.y;
        }
        this.shape = tetromino.shape;
    }

    //function to generate random tetrominos 
    randomizeTetrominoType(noType) {
        return Math.floor(Math.random() * noType + 1);
    }

    hardDrop() {
        this.hardDropped = true;
    }

    
}