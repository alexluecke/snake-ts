import { Coord } from "./coord";
import { Food } from "./food";
import { Visitor } from "./visitor";
export declare class Snake {
    private _body;
    constructor(body: Coord[]);
    eatFood<T extends Food>(item: T): void;
    getBody(): Coord[];
    setBody(body: Coord[]): void;
    getHead(): Coord;
    setHead(coord: Coord): void;
    visit(visitor: Visitor<Snake>): void;
}
