"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas2DRenderer = /** @class */ (function () {
    function Canvas2DRenderer() {
        this._atomicUnit = 30;
        var dimension = 2000;
        this._canvas = document.createElement('canvas');
        this._canvas.setAttribute('width', String(dimension));
        this._canvas.setAttribute('height', String(dimension));
        this._context = this.getContext(this._canvas);
    }
    Canvas2DRenderer.prototype.init = function () {
        window.document.body.appendChild(this._canvas);
    };
    Canvas2DRenderer.prototype.render = function (buffer) {
        var _this = this;
        this._context.fillStyle = "#282828";
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        buffer.forEach(function (atom) { return _this._drawAtom(atom); });
    };
    Canvas2DRenderer.prototype.getMinMax = function () {
        return [Number(this._canvas.width) / this._atomicUnit, Number(this._canvas.height) / this._atomicUnit];
    };
    Canvas2DRenderer.prototype._drawAtom = function (atom) {
        this._context.fillStyle = atom.color;
        this._context.fillRect(atom.coord.x * this._atomicUnit, atom.coord.y * this._atomicUnit, this._atomicUnit, this._atomicUnit);
    };
    Canvas2DRenderer.prototype.getContext = function (canvas) {
        return canvas.getContext('2d') || new CanvasRenderingContext2D();
    };
    return Canvas2DRenderer;
}());
exports.Canvas2DRenderer = Canvas2DRenderer;
//# sourceMappingURL=canvas-2d-renderer.js.map