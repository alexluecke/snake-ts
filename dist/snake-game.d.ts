import { Renderer } from './renderer';
export declare class SnakeGame {
    renderer: Renderer;
    private direction;
    constructor(renderer: Renderer);
    start(): void;
    stop(): void;
    private createSnake();
    private getDirection(keyCode);
}
