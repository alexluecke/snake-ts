"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var SnakeGame = /** @class */ (function () {
    function SnakeGame(renderer) {
        this.renderer = renderer;
    }
    SnakeGame.prototype.start = function () {
        rxjs_1.timer(1, 500).subscribe(function () { return console.info('looping'); });
    };
    SnakeGame.prototype.stop = function () { };
    return SnakeGame;
}());
exports.SnakeGame = SnakeGame;
//# sourceMappingURL=snake-game.js.map