import { Canvas2DRenderer } from "./canvas-2d-renderer";
import { SnakeGame } from "./snake-game";

export class SnakeGameFactory {
  public build(): SnakeGame {
    return new SnakeGame(new Canvas2DRenderer());
  }
}
