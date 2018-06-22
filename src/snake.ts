import { Coord, Food, Direction } from ".";

export class Snake {
  private _body: Coord[] = [];

  constructor(body: Coord[]) {
    this._body = body;
  }

  public getBody(): Coord[] {
    return this._body;
  }

  public eatFood<T extends Food>(item: T): void {
    this._setHead(new Coord(item.x, item.y));
  }

  public move(direction: Direction): void {
    const head = this.getHead();

    this._body.pop()

    switch (direction) {
      case Direction.LEFT:
        this._setHead(new Coord(head.x - 1, head.y));
        break;
      case Direction.RIGHT:
        this._setHead(new Coord(head.x + 1, head.y));
        break;
      case Direction.UP:
        this._setHead(new Coord(head.x, head.y + 1));
        break;
      case Direction.DOWN:
        this._setHead(new Coord(head.x, head.y - 1));
        break;
    }
  }

  public getHead(): Coord {
    return this._body[0];
  }

  private _setHead(coord: Coord): void {
    this._body.unshift(coord);
  }
}
