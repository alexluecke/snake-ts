import { Atom } from './atom';
import { Coord } from './coord';
import { Direction } from './direction';
import { fromEvent, interval, animationFrameScheduler } from 'rxjs';
import { filter } from 'rxjs/operators';
import { KeyCode } from './key-code';
import { range } from 'lodash';
import { Renderer } from './renderer';
import { Snake } from './snake';
import { Some, None, Option } from 'space-lift';

export class SnakeGame {
  private direction: Direction = Direction.RIGHT;
  private dx = 1;

  constructor(
    public renderer: Renderer
  ) {}

  public start(): void {
    this.renderer.init();
    let snake = this.createSnake();

    fromEvent(window.document, 'keydown').subscribe(event => {
      const direction = this.getDirection(String((event as KeyboardEvent).keyCode) as KeyCode).getOrElse(this.direction);
      if (this.isNextDirectionValid(direction)) {
        this.direction = direction;
      }
    });

    interval(0, animationFrameScheduler).pipe(filter(tick => tick%5 === 0)).subscribe(() => {

      snake.visit({
        visit: (visitee: Snake) => {
          const nextHeadCoord = this.nextCoord(visitee.getHead(), this.direction);
          const [ , ...body ] = visitee.getBody();

          if (this.hasCollision(nextHeadCoord, body)) {
            this.direction = Direction.RIGHT;
            snake = this.createSnake();
          } else {
            visitee.setBody([ ...body, nextHeadCoord]);
          }
        }
      });

      this.renderer.render(snake.getBody().map(coord => new Atom(coord, '#FFFFFF')));
    });
  }

  public stop(): void {}

  private createSnake(): Snake {
    return new Snake(range(20).map((_, i) => new Coord(i + 1, 1)));
  }

  private hasCollision(coord: Coord, coords: Coord[]): boolean {
    return coords.some(item => item.x === coord.x && item.y === coord.y);
  }

  private isNextDirectionValid(direction: Direction): boolean {
    switch (this.direction) {
      case Direction.LEFT:
        return direction !== Direction.RIGHT;
      case Direction.RIGHT:
        return direction !== Direction.LEFT;
      case Direction.UP:
        return direction !== Direction.DOWN;
      case Direction.DOWN:
        return direction !== Direction.UP;
    }

    return false;
  }

  private getDirection(keyCode: KeyCode): Option<Direction> {
    switch (keyCode) {
      case KeyCode.LEFT:
          return Some(Direction.LEFT);
      case KeyCode.RIGHT:
          return Some(Direction.RIGHT);
      case KeyCode.UP:
          return Some(Direction.UP);
      case KeyCode.DOWN:
          return Some(Direction.DOWN);
    }

    return None;
  }

  /**
   * Move the snake to new coordinate depending on direction. Note that the position y direction is down in the
   * coordinate system.
   */
  public nextCoord(coord: Coord, direction: Direction): Coord {
    switch (direction) {
      case Direction.LEFT:
        return new Coord(coord.x - this.dx, coord.y);
      case Direction.RIGHT:
        return new Coord(coord.x + this.dx, coord.y);
      case Direction.UP:
        return new Coord(coord.x, coord.y - this.dx);
      case Direction.DOWN:
        return new Coord(coord.x, coord.y + this.dx);
    }

    return coord;
  }
}
