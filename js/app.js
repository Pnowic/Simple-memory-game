import "../scss/style.scss"

const memoryGame = {
    tileCount: 20, //number of tiles
    tileOnRow: 5, //tiles in row
    divBoard: null, //board
    divScore: null, //result
    tiles: [], //shuffled tiles
    tilesChecked: [], //checked tiles
    moveCount: 0, //number of moves
    tilesImg: [ //tiles images
        'images/tile1.png',
        'images/tile2.png',
        'images/tile3.png',
        'images/tile4.png',
        'images/tile5.png',
        'images/tile6.png',
        'images/tile7.png',
        'images/tile8.png',
        'images/tile9.png',
        'images/tile10.png'
    ],


    this: startGame = function () {

        for (let i = 0; i < tileCount; i++) {
            this.tiles.push(Math.floor(i / 2));
        }

        for (let i = this.tileCount - 1; i > 0; i--) {
            const swap = Math.floor(Math.random() * i);
            const tmp = this.tiles[i];
            this.tiles[i] = this.tiles[swap];
            this.tiles[swap] = tmp;
        }

        for (let i = 0; i < this.tileCount; i++) {
            const tile = document.createElement('div');
            tile.classList.add("game-tile");
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[i];
            tile.dataset.index = i;

            tile.addEventListener('click', this.tileClick.bind(this));
        }


    },
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-start').addEventListener('click', function() {
        memoryGame.startGame();
    });
});