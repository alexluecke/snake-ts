"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coord_1 = require("./coord");
var Snake = /** @class */ (function () {
    function Snake(body) {
        this._body = [];
        this.dx = 1;
        if (body.length < 1) {
            throw new Error('no');
        }
        this._body = body;
    }
    Snake.prototype.getBody = function () {
        return this._body;
    };
    Snake.prototype.eatFood = function (item) {
        this._setHead(new coord_1.Coord(item.x, item.y));
    };
    /**
     * Move the snake to new coordinate depending on direction. Note that the position y direction is down in the
     * coordinate system.
     */
    Snake.prototype.move = function (direction) {
        var head = this.getHead();
        this._body.shift();
        switch (direction) {
            case "left" /* LEFT */:
                this._setHead(new coord_1.Coord(head.x - this.dx, head.y));
                break;
            case "right" /* RIGHT */:
                this._setHead(new coord_1.Coord(head.x + this.dx, head.y));
                break;
            case "up" /* UP */:
                this._setHead(new coord_1.Coord(head.x, head.y - this.dx));
                break;
            case "down" /* DOWN */:
                this._setHead(new coord_1.Coord(head.x, head.y + this.dx));
                break;
        }
    };
    Snake.prototype.getHead = function () {
        return this._body[this._body.length - 1];
    };
    Snake.prototype._setHead = function (coord) {
        this._body.push(coord);
    };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map