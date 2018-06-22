import { timer } from 'rxjs';
;
;
export class SnakeGameFactory {
    build() {
        return new SnakeGame(new Canvas2DRenderer());
    }
}
export class SnakeGame {
    constructor(renderer) {
        this.renderer = renderer;
    }
    start() {
        timer(0, 500).subscribe(() => console.info('looping'));
    }
    stop() { }
}
export class Coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
export class Apple extends Coord {
}
export class Snake {
    constructor(body) {
        this._body = [];
        this._body = body;
    }
    getBody() {
        return this._body;
    }
    eatFood(item) {
        this._setHead(new Coord(item.x, item.y));
    }
    move(direction) {
        const head = this.getHead();
        this._body.pop();
        switch (direction) {
            case "left" /* LEFT */:
                this._setHead(new Coord(head.x - 1, head.y));
                break;
            case "right" /* RIGHT */:
                this._setHead(new Coord(head.x + 1, head.y));
                break;
            case "up" /* UP */:
                this._setHead(new Coord(head.x, head.y + 1));
                break;
            case "down" /* DOWN */:
                this._setHead(new Coord(head.x, head.y - 1));
                break;
        }
    }
    getHead() {
        return this._body[0];
    }
    _setHead(coord) {
        this._body.unshift(coord);
    }
}
export class Thing {
    constructor(coord, color) {
        this.coord = coord;
        this.color = color;
    }
}
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
