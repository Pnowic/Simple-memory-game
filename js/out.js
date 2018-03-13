/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoryGame = {
    tileCount: 20, //number of tiles
    tileOnRow: 5, //tiles in row
    divBoard: null, //board
    divScore: null, //result
    tiles: [], //shuffled tiles
    tilesChecked: [], //checked tiles
    moveCount: 0, //number of moves
    tilesImg: [//tiles images
    'images/tile1.png', 'images/tile2.png', 'images/tile3.png', 'images/tile4.png', 'images/tile5.png', 'images/tile6.png', 'images/tile7.png', 'images/tile8.png', 'images/tile9.png', 'images/tile10.png'],

    canGet: true, //able to click tile
    tilePairs: 0,

    tileClick: function tileClick(e) {
        if (this.canGet) {

            if (!this.tilesChecked[0] || this.tilesChecked[0].dataset.index !== e.target.dataset.index) {
                this.tilesChecked.push(e.target);
                e.target.style.backgroundImage = 'url(' + this.tilesImg[e.target.dataset.cardType] + ')';
            }

            if (this.tilesChecked.length === 2) {
                this.canGet = false;

                if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                    setTimeout(this.deleteTiles.bind(this), 500);
                } else {
                    setTimeout(this.resetTiles.bind(this), 500);
                }

                this.moveCount++;
                this.divScore.innerText = this.moveCount;
            }
        }
    },

    deleteTiles: function deleteTiles() {
        this.tilesChecked[0].remove();
        this.tilesChecked[1].remove();

        this.canGet = true;
        this.tilesChecked = [];

        this.tilePairs++;
        if (this.tilePairs >= this.tileCount / 2) {
            alert('Game Over! You needed ' + this.moveCount + ' moves !');
        }
    },

    resetTiles: function resetTiles() {
        this.tilesChecked[0].style.backgroundImage = 'url(images/question.png)';
        this.tilesChecked[1].style.backgroundImage = 'url(images/question.png)';

        this.tilesChecked = [];
        this.canGet = true;
    },

    startGame: function startGame() {

        this.divBoard = document.querySelector('.game-board');
        this.divBoard.innerText = '';

        this.divScore = document.querySelector('.game-score');
        this.divScore.innerText = 0;

        this.tiles = [];
        this.tilesChecked = [];
        this.moveCount = 0;
        this.canGet = true;
        this.tilePairs = 0;

        for (var i = 0; i < this.tileCount; i++) {
            this.tiles.push(Math.floor(i / 2));
        }

        //shuffle tiles
        for (var _i = this.tileCount - 1; _i > 0; _i--) {
            var swap = Math.floor(Math.random() * _i);
            var temp = this.tiles[_i];
            this.tiles[_i] = this.tiles[swap];
            this.tiles[swap] = temp;
        }

        for (var _i2 = 0; _i2 < this.tileCount; _i2++) {
            var tile = document.createElement('div');
            tile.classList.add("game-tile");
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[_i2];
            tile.dataset.index = _i2;

            tile.style.left = 5 + (tile.offsetWidth + 10) * (_i2 % this.tileOnRow) + 'px';
            tile.style.top = 5 + (tile.offsetHeight + 10) * Math.floor(_i2 / this.tileOnRow) + 'px';

            tile.addEventListener('click', this.tileClick.bind(this));
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.game-start').addEventListener('click', function () {
        memoryGame.startGame();
    });
});

/***/ })
/******/ ]);