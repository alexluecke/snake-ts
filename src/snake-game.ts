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

  constructor(
    public renderer: Renderer
  ) {}

  public start(): void {
    this.renderer.init();
    const snake = this.createSnake();

    fromEvent(window.document, 'keydown').subscribe(event => {
      const direction = this.getDirection(String((event as KeyboardEvent).keyCode) as KeyCode).getOrElse(this.direction);
      if (this.isNextDirectionValid(direction)) {
        this.direction = direction;
      }
    });

    interval(0, animationFrameScheduler).pipe(filter(tick => tick%5 === 0)).subscribe(() => {
      this.renderer.render(snake.getBody().map(coord => new Atom(coord, '#FFFFFF')));
      snake.move(this.direction);
    });
  }

  public stop(): void {}

  private createSnake(): Snake {
    return new Snake(range(20).map((_, i) => new Coord(i + 1, 1)));
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
}

