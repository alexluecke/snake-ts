import { Renderer } from "./renderer";
import { Atom } from "./atom";
export declare class Canvas2DRenderer implements Renderer {
    private _canvas;
    private _context;
    private _atomicUnit;
    constructor();
    init(): void;
    render(buffer: Atom[]): void;
    getMinMax(): [number, number];
    private _drawAtom(atom);
    private getContext(canvas);
}
