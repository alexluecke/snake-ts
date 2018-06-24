import { Renderer } from "./renderer";
import { Atom } from "./atom";

export class Canvas2DRenderer implements Renderer {
  private _canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;
  private _size = 30;

  constructor() {
    const dimension = 2000;
    this._canvas = document.createElement('canvas');
    this._canvas.setAttribute('width', String(dimension));
    this._canvas.setAttribute('height', String(dimension));
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
