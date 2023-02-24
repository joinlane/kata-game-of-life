import { cloneDeep } from 'lodash';

type Grid = Array<Array<boolean>>;

export default class GameOfLife {
  private _grid: Grid;

  constructor(seed: Grid) {
    this._grid = seed;
  }

  get grid(): Grid {
    return this._grid;
  }

  tick(): void {
    debugger;

    const nextGrid = cloneDeep(this._grid);

    const m = this._grid.length; // height
    const n = this._grid[0]!.length; // width

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        let livingNeighbours = 0;

        for (let ii = -1; ii <= 1; ii++) {
          for (let jj = -1; jj <= 1; jj++) {
            if (ii === 0 && jj === 0) {
              continue;
            }
            if (this._grid[jj + j]?.[ii + i] === true) {
              livingNeighbours++;
            }
          }
        }

        if (
          (livingNeighbours === 2 || livingNeighbours === 3) &&
          this._grid[j][i] === true
        ) {
          continue;
        }

        if (livingNeighbours === 3 && this._grid[j][i] === false) {
          nextGrid[j][i] = true;
          continue;
        }

        nextGrid[j][i] = false;
      }
    }

    this._grid = nextGrid;
  }
}
