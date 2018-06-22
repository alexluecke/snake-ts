import { timer } from 'rxjs';
import { Renderer } from '.';

export class SnakeGame {
  constructor(
    public renderer: Renderer
  ) {}

  public start(): void {
    timer(1, 500).subscribe(() => console.info('looping'));
  }
  public stop(): void {}
}
