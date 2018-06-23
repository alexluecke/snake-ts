"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var Snake = /** @class */ (function () {
    function Snake(body) {
        this._body = [];
        this._body = body;
    }
    Snake.prototype.getBody = function () {
        return this._body;
    };
    Snake.prototype.eatFood = function (item) {
        this._setHead(new _1.Coord(item.x, item.y));
    };
    Snake.prototype.move = function (direction) {
        var head = this.getHead();
        this._body.pop();
        switch (direction) {
            case "left" /* LEFT */:
                this._setHead(new _1.Coord(head.x - 1, head.y));
                break;
            case "right" /* RIGHT */:
                this._setHead(new _1.Coord(head.x + 1, head.y));
                break;
            case "up" /* UP */:
                this._setHead(new _1.Coord(head.x, head.y + 1));
                break;
            case "down" /* DOWN */:
                this._setHead(new _1.Coord(head.x, head.y - 1));
                break;
        }
    };
    Snake.prototype.getHead = function () {
        return this._body[0];
    };
    Snake.prototype._setHead = function (coord) {
        this._body.unshift(coord);
    };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map