import Grid from './Grid';
const WIDTH_LESS_THAN_50_BUT_NOT_ZERO = 26;
const HEIGHT_LESS_THAN_50_BUT_NOT_ZERO = 22;

describe('Grid', () => {
  describe('ctor', () => {
    // Constructor
  });

  describe('cellIsAlive', () => {
    describe('given a living cell exists at some valid x, and valid y', () => {
      it('can recognize that cell as alive', () => {
        const grid = new Grid();

        expect(grid.cellIsAlive(2, 3)).toBe(true);
      });
    });

    describe('given a dead cell exists at some valid x, and valid y', () => {
      it('can recognize that cell as dead', () => {
        const MOSTLY_ALIVE_SEED = [
          [true, true, true, true, true],
          [true, true, true, true, true],
          [true, true, true, true, true],
          [true, true, false, true, true],
          [true, true, true, true, true],
        ];

        const grid = new Grid(MOSTLY_ALIVE_SEED);

        expect(grid.cellIsAlive(2, 3)).toBe(false);
      });
    });
  });
});
