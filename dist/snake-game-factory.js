"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_2d_renderer_1 = require("./canvas-2d-renderer");
var snake_game_1 = require("./snake-game");
var SnakeGameFactory = /** @class */ (function () {
    function SnakeGameFactory() {
    }
    SnakeGameFactory.prototype.build = function () {
        return new snake_game_1.SnakeGame(new canvas_2d_renderer_1.Canvas2DRenderer());
    };
    return SnakeGameFactory;
}());
exports.SnakeGameFactory = SnakeGameFactory;
//# sourceMappingURL=snake-game-factory.js.map