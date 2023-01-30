type Seed = Array<Array<boolean>>;

const DEFAULT_SEED: Seed = [
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
];

export default class Grid {
  private _2dArr: Array<Array<boolean>>;

  constructor(seed: Seed = DEFAULT_SEED) {
    this._2dArr = seed;
  }

  cellIsAlive(x: number, y: number): boolean {
    return this._2dArr[y][x];
  }
}
