import { Atom } from "./atom";
export interface Renderer {
    render(buffer: Atom[]): void;
    init(): void;
    getMinMax(): [number, number];
}
