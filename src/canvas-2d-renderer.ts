import { Renderer, Atom } from ".";

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

  public render(buffer: Atom[]): void {
    this._context.fillStyle = "#282828";
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    buffer.forEach(atom => this._drawAtom(atom));
  }

  private _drawAtom(atom: Atom) {
    this._context.fillStyle = atom.color;
    this._context.fillRect(atom.coord.x * this._size, atom.coord.y * this._size, this._size, this._size);
  }
}
