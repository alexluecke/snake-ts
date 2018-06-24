import { Coord } from "./coord";
import { Direction } from "./direction";
import { Food } from "./food";

export class Snake {
  private _body: Coord[] = [];
  private dx = 1;

  constructor(body: Coord[]) {
    if (body.length < 1) {
      throw new Error('no');
    }
    this._body = body;
  }

  public getBody(): Coord[] {
    return this._body;
  }

  public eatFood<T extends Food>(item: T): void {
    this._setHead(new Coord(item.x, item.y));
  }

  /**
   * Move the snake to new coordinate depending on direction. Note that the position y direction is down in the
   * coordinate system.
   */
  public move(direction: Direction): void {
    const head = this.getHead();

    this._body.shift()

    switch (direction) {
      case Direction.LEFT:
        this._setHead(new Coord(head.x - this.dx, head.y));
        break;
      case Direction.RIGHT:
        this._setHead(new Coord(head.x + this.dx, head.y));
        break;
      case Direction.UP:
        this._setHead(new Coord(head.x, head.y - this.dx));
        break;
      case Direction.DOWN:
        this._setHead(new Coord(head.x, head.y + this.dx));
        break;
    }
  }

  public getHead(): Coord {
    return this._body[this._body.length - 1];
  }

  private _setHead(coord: Coord): void {
    this._body.push(coord);
  }
}
