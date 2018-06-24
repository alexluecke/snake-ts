"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atom_1 = require("./atom");
var coord_1 = require("./coord");
var rxjs_1 = require("rxjs");
var key_code_1 = require("./key-code");
var lodash_1 = require("lodash");
var snake_1 = require("./snake");
var SnakeGame = /** @class */ (function () {
    function SnakeGame(renderer) {
        this.renderer = renderer;
        this.direction = "right" /* RIGHT */;
    }
    SnakeGame.prototype.start = function () {
        var _this = this;
        this.renderer.init();
        var snake = this.createSnake();
        rxjs_1.fromEvent(window.document, 'keydown').subscribe(function (event) {
            _this.direction = _this.getDirection(String(event.keyCode)) || _this.direction;
        });
        var currentTime = 0;
        var animate = function (timestamp) {
            if (!currentTime) {
                currentTime = timestamp;
            }
            if (timestamp - currentTime > 60) {
                currentTime = timestamp;
                _this.renderer.render(snake.getBody().map(function (coord) { return new atom_1.Atom(coord, '#FFFFFF'); }));
                snake.move(_this.direction);
            }
            window.requestAnimationFrame(animate);
        };
        animate(0);
    };
    SnakeGame.prototype.stop = function () { };
    SnakeGame.prototype.createSnake = function () {
        return new snake_1.Snake(lodash_1.range(20).map(function (_, i) { return new coord_1.Coord(i + 1, 1); }));
    };
    SnakeGame.prototype.getDirection = function (keyCode) {
        if (key_code_1.keyCodes.indexOf(keyCode) === -1) {
            return;
        }
        switch (keyCode) {
            case "37" /* LEFT */:
                return "left" /* LEFT */;
            case "39" /* RIGHT */:
                return "right" /* RIGHT */;
            case "38" /* UP */:
                return "up" /* UP */;
            case "40" /* DOWN */:
                return "down" /* DOWN */;
        }
    };
    return SnakeGame;
}());
exports.SnakeGame = SnakeGame;
//# sourceMappingURL=snake-game.js.map