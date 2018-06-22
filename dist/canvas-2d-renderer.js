export class Canvas2DRenderer {
    constructor() {
        this._size = 10;
        const width = 1024;
        this._canvas = document.createElement('canvas');
        this._canvas.setAttribute('width', '1024');
        this._canvas.setAttribute('height', String(Math.floor(width * 9 / 16)));
        this._context = this._canvas.getContext('2d');
    }
    init() {
        window.document.body.appendChild(this._canvas);
    }
    render(buffer) {
        this._context.fillStyle = "#282828";
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        buffer.forEach(atom => this._drawAtom(atom));
    }
    _drawAtom(atom) {
        this._context.fillStyle = atom.color;
        this._context.fillRect(atom.coord.x * this._size, atom.coord.y * this._size, this._size, this._size);
    }
}
//# sourceMappingURL=canvas-2d-renderer.js.map