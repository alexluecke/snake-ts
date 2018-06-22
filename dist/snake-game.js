import { timer } from 'rxjs';
export class SnakeGame {
    constructor(renderer) {
        this.renderer = renderer;
    }
    start() {
        timer(1, 500).subscribe(() => console.info('looping'));
    }
    stop() { }
}
//# sourceMappingURL=snake-game.js.map