"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atom_1 = require("./atom");
var coord_1 = require("./coord");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var lodash_1 = require("lodash");
var snake_1 = require("./snake");
var space_lift_1 = require("space-lift");
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
            var direction = _this.getDirection(String(event.keyCode)).getOrElse(_this.direction);
            if (_this.isNextDirectionValid(direction)) {
                _this.direction = direction;
            }
        });
        rxjs_1.interval(0, rxjs_1.animationFrameScheduler).pipe(operators_1.filter(function (tick) { return tick % 5 === 0; })).subscribe(function () {
            _this.renderer.render(snake.getBody().map(function (coord) { return new atom_1.Atom(coord, '#FFFFFF'); }));
            snake.move(_this.direction);
        });
    };
    SnakeGame.prototype.stop = function () { };
    SnakeGame.prototype.createSnake = function () {
        return new snake_1.Snake(lodash_1.range(20).map(function (_, i) { return new coord_1.Coord(i + 1, 1); }));
    };
    SnakeGame.prototype.isNextDirectionValid = function (direction) {
        switch (this.direction) {
            case "left" /* LEFT */:
                return direction !== "right" /* RIGHT */;
            case "right" /* RIGHT */:
                return direction !== "left" /* LEFT */;
            case "up" /* UP */:
                return direction !== "down" /* DOWN */;
            case "down" /* DOWN */:
                return direction !== "up" /* UP */;
        }
        return false;
    };
    SnakeGame.prototype.getDirection = function (keyCode) {
        switch (keyCode) {
            case "37" /* LEFT */:
                return space_lift_1.Some("left" /* LEFT */);
            case "39" /* RIGHT */:
                return space_lift_1.Some("right" /* RIGHT */);
            case "38" /* UP */:
                return space_lift_1.Some("up" /* UP */);
            case "40" /* DOWN */:
                return space_lift_1.Some("down" /* DOWN */);
        }
        return space_lift_1.None;
    };
    return SnakeGame;
}());
exports.SnakeGame = SnakeGame;
//# sourceMappingURL=snake-game.js.map