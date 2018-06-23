"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var SnakeGameFactory = /** @class */ (function () {
    function SnakeGameFactory() {
    }
    SnakeGameFactory.prototype.build = function () {
        return new _1.SnakeGame(new _1.Canvas2DRenderer());
    };
    return SnakeGameFactory;
}());
exports.SnakeGameFactory = SnakeGameFactory;
//# sourceMappingURL=snake-game-factory.js.map