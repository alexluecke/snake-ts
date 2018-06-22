import { SnakeGame, Canvas2DRenderer } from ".";

export class SnakeGameFactory {
  public build(): SnakeGame {
    return new SnakeGame(new Canvas2DRenderer());
  }
}
