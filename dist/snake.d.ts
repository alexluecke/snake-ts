import { Coord } from "./coord";
import { Direction } from "./direction";
import { Food } from "./food";
export declare class Snake {
    private _body;
    private dx;
    constructor(body: Coord[]);
    getBody(): Coord[];
    eatFood<T extends Food>(item: T): void;
    /**
     * Move the snake to new coordinate depending on direction. Note that the position y direction is down in the
     * coordinate system.
     */
    move(direction: Direction): void;
    getHead(): Coord;
    private _setHead(coord);
}
