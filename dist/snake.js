import { Coord } from ".";
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
//# sourceMappingURL=snake.js.map