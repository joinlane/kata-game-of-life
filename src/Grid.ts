import Cell from './Cell';

type Seed = Array<string>;

export default class Grid {
  cells: Array<Array<Cell>>;

  constructor(seed: Seed) {
    if (seed.length === 0) {
      throw new Error('InvalidSeed');
    }

    if (seed.some((row) => row.length === 0)) {
      throw new Error('InvalidSeed');
    }

    this.cells = seed.map((r) => r.split('').map((c) => new Cell(c === 'O')));
  }

  private getNeighbours(x: number, y: number): Cell[] {
    const neighbours: Cell[] = [];
    const iterator = [-1, 0, 1];

    for (const i of iterator) {
      for (const j of iterator) {
        if (i === 0 && j === 0) {
          continue;
        }
        neighbours.push(this.cells[x + i]?.[y + j]);
      }
    }

    return neighbours.filter((n) => n !== undefined);
  }

  getNumberOfLivingNeighbours(x: number, y: number): number {
    return this.getNeighbours(x, y).filter((n) => n.alive).length;
  }

  private determineNextCellState() {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        const numberOfLivingNeighbours = this.getNumberOfLivingNeighbours(i, j);
        if (numberOfLivingNeighbours < 2) {
          this.cells[i][j].die();
        }
      }
    }
  }

  tick(): void {
    this.determineNextCellState();
  }
}
