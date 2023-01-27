export default class Cell {
  alive: boolean;
  private _nextAlive: boolean;

  constructor(alive: boolean) {
    this.alive = alive;
  }

  die(): void {
    this._nextAlive = false;
  }

  regenerate(): void {
    this._nextAlive = true;
  }

  tick(): void {
    this.alive = this._nextAlive;
  }
}
