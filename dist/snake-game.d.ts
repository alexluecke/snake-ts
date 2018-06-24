import { Coord } from './coord';
import { Direction } from './direction';
import { Renderer } from './renderer';
export declare class SnakeGame {
    renderer: Renderer;
    private direction;
    private dx;
    constructor(renderer: Renderer);
    start(): void;
    stop(): void;
    private createSnake();
    private hasCollision(coord, coords);
    private isNextDirectionValid(direction);
    private getDirection(keyCode);
    /**
     * Move the snake to new coordinate depending on direction. Note that the position y direction is down in the
     * coordinate system.
     */
    nextCoord(coord: Coord, direction: Direction): Coord;
}
