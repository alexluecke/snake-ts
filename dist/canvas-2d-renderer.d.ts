import { Renderer, Atom } from ".";
export declare class Canvas2DRenderer implements Renderer {
    private _canvas;
    _context: CanvasRenderingContext2D;
    private _size;
    constructor();
    init(): void;
    render(buffer: Atom[]): void;
    private _drawAtom;
}
