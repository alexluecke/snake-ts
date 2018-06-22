export const enum KeyCode {
  LEFT = '37',
  UP = '38',
  RIGHT = '39',
  DOWN = '40',
  SPACE = '32'
};

export const enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down'
};

export class SnakeGameFactory {
  public build(): SnakeGame {
    return new SnakeGame(new Canvas2DRenderer());
  }
}

export class SnakeGame {
  constructor(
    public renderer: Renderer
  ) {}

  public start(): void {}
  public stop(): void {}
}

export class Coord {
  constructor(public x: number, public y: number) {}
}

export interface Food {
  x: number;
  y: number;
}

export class Apple extends Coord implements Food {}

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

export interface Renderer {
  render(buffer: Thing[]): void;
  init(): void;
}

export class Thing {
  constructor(public coord: Coord, public color: string) {}
}

export class Canvas2DRenderer implements Renderer {
  private _canvas: HTMLCanvasElement;
  public _context: CanvasRenderingContext2D; // TODO: make not public
  private _size = 10;

  constructor() {
    const width = 1024;
    this._canvas = document.createElement('canvas');
    this._canvas.setAttribute('width', '1024');
    this._canvas.setAttribute('height', String(Math.floor(width * 9/16)));
    this._context = this._canvas.getContext('2d');
  }

  public init(): void {
    window.document.body.appendChild(this._canvas);
  }

  public render(buffer: Thing[]): void {
    this._context.fillStyle = "#282828";
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    buffer.forEach(atom => this._drawAtom(atom));
  }

  private _drawAtom(atom: Thing) {
    this._context.fillStyle = atom.color;
    this._context.fillRect(atom.coord.x * this._size, atom.coord.y * this._size, this._size, this._size);
  }
}
