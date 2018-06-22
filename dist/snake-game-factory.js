import { SnakeGame, Canvas2DRenderer } from ".";
export class SnakeGameFactory {
    build() {
        return new SnakeGame(new Canvas2DRenderer());
    }
}
//# sourceMappingURL=snake-game-factory.js.map