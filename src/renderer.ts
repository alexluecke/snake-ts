import { Atom } from ".";

export interface Renderer {
  render(buffer: Atom[]): void;
  init(): void;
}
