import { Atom } from './atom';
import { Coord } from './coord';
import { Direction } from './direction';
import { fromEvent, interval, animationFrameScheduler } from 'rxjs';
import { filter } from 'rxjs/operators';
import { KeyCode } from './key-code';
import { range } from 'lodash';
import { Renderer } from './renderer';
import { Snake } from './snake';

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

  private getDirection(keyCode: KeyCode): Direction | undefined {
    if (keyCodes.indexOf(keyCode) === -1) {
      return;
    }

    switch (keyCode) {
      case KeyCode.LEFT:
          return Direction.LEFT;
      case KeyCode.RIGHT:
          return Direction.RIGHT;
      case KeyCode.UP:
          return Direction.UP;
      case KeyCode.DOWN:
          return Direction.DOWN;
    }
  }
}

