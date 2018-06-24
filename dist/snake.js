"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coord_1 = require("./coord");
var Snake = /** @class */ (function () {
    function Snake(body) {
        this._body = [];
        if (body.length < 1) {
            throw new Error('no');
        }
        this._body = body;
    }
    Snake.prototype.eatFood = function (item) {
        this.setHead(new coord_1.Coord(item.x, item.y));
    };
    Snake.prototype.getBody = function () {
        return this._body;
    };
    Snake.prototype.setBody = function (body) {
        this._body = body;
    };
    Snake.prototype.getHead = function () {
        return this._body[this._body.length - 1];
    };
    Snake.prototype.setHead = function (coord) {
        this._body.push(coord);
    };
    Snake.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map