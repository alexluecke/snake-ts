import { Renderer } from "./renderer";
import { Atom } from "./atom";
export declare class Canvas2DRenderer implements Renderer {
    private _canvas;
    private _context;
    private _size;
    constructor();
    init(): void;
    render(buffer: Atom[]): void;
    private _drawAtom(atom);
}
