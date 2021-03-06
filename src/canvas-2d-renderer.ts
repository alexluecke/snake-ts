import { Renderer } from "./renderer";
import { Atom } from "./atom";

export class Canvas2DRenderer implements Renderer {
  private _canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;
  private _atomicUnit = 30;

  constructor() {
    const dimension = 2000;
    this._canvas = document.createElement('canvas');
    this._canvas.setAttribute('width', String(dimension));
    this._canvas.setAttribute('height', String(dimension));
    this._context = this.getContext(this._canvas);
  }

  public init(): void {
    window.document.body.appendChild(this._canvas);
  }

  public render(buffer: Atom[]): void {
    this._context.fillStyle = "#282828";
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    buffer.forEach(atom => this._drawAtom(atom));
  }

  public getMinMax(): [number, number] {
    return [Number(this._canvas.width) / this._atomicUnit, Number(this._canvas.height) / this._atomicUnit];
  }

  private _drawAtom(atom: Atom): void {
    this._context.fillStyle = atom.color;
    this._context.fillRect(atom.coord.x * this._atomicUnit, atom.coord.y * this._atomicUnit, this._atomicUnit, this._atomicUnit);
  }

  private getContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    return canvas.getContext('2d') || new CanvasRenderingContext2D();
  }
}
