import { Coord } from "./coord";
import { Food } from "./food";

export class Snake {
  private _body: Coord[] = [];

  constructor(body: Coord[]) {
    if (body.length < 1) {
      throw new Error('no');
    }
    this._body = body;
  }

  public eatFood<T extends Food>(item: T): void {
    this.setHead(new Coord(item.x, item.y));
  }

  public getBody(): Coord[] {
    return this._body;
  }

  public setBody(body: Coord[]): void {
    this._body = body;
  }

  public getHead(): Coord {
    return this._body[this._body.length - 1];
  }

  public setHead(coord: Coord): void {
    this._body.push(coord);
  }
}
