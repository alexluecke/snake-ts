import { Coord, Food, Direction } from ".";
export declare class Snake {
    private _body;
    constructor(body: Coord[]);
    getBody(): Coord[];
    eatFood<T extends Food>(item: T): void;
    move(direction: Direction): void;
    getHead(): Coord;
    private _setHead;
}
