export interface Visitor<T, K = void> {
  visit: (t: T) => K;
}
