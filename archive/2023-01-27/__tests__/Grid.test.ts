import Grid from '../Grid';

const VALID_SEED = ['XXX', 'OXX', 'XXX']; // X - Dead, O - Alive
const LIVING_SEED = ['OOO', 'OOO', 'OOO'];
const INVALID_COLUMNS_SEED = [];
const INVALID_ROWS_SEED = [''];

const UNDER_POPULATION_SEED = ['XXX', 'OOX', 'XXX'];
const GENERATION_SEED = ['XXX', 'OOO', 'XXX'];

describe('Grid', () => {
  it('can be initialized', () => {
    const grid = new Grid(VALID_SEED);
    expect(grid).not.toBeUndefined();
  });

  describe('given a valid grid (seed)', () => {
    it('should have cells coresponding to seed', () => {
      const grid = new Grid(VALID_SEED);

      for (let i = 0; i < VALID_SEED.length; i++) {
        for (let j = 0; j < VALID_SEED[i].length; j++) {
          const isAlive = VALID_SEED[i][j] === 'O';
          expect(grid.cells[i][j].alive).toEqual(isAlive);
        }
      }
    });
  });

  describe('getNumberOfLivingNeighbours', () => {
    describe('given a corner cell', () => {
      it('should return 3', () => {
        const grid = new Grid(LIVING_SEED);
        const numberOfLivingNeighbours = grid.getNumberOfLivingNeighbours(0, 0);

        expect(numberOfLivingNeighbours).toBe(3);
      });
    });

    describe('given an edge/side cell', () => {
      it('should return 5', () => {
        const grid = new Grid(LIVING_SEED);
        const numberOfLivingNeighbours = grid.getNumberOfLivingNeighbours(0, 1);

        expect(numberOfLivingNeighbours).toBe(5);
      });
    });

    describe('given an internal/interior cell', () => {
      it('should return 8', () => {
        const grid = new Grid(LIVING_SEED);
        const numberOfLivingNeighbours = grid.getNumberOfLivingNeighbours(1, 1);

        expect(numberOfLivingNeighbours).toBe(8);
      });
    });
  });

  describe('when given a size', () => {
    describe('the size of a width is less than 1', () => {
      it('should throw an "InvalidSeed" Error', () => {
        expect(() => new Grid(INVALID_ROWS_SEED)).toThrow('InvalidSeed');
      });
    });

    describe('the size of a height is less than 1', () => {
      it('should throw an "InvalidSeed" Error', () => {
        expect(() => new Grid(INVALID_COLUMNS_SEED)).toThrow('InvalidSeed');
      });
    });
  });

  describe('tick', () => {
    describe('when a cell has fewer than two live neighbours', () => {
      it(' dies (underpopulation)', () => {
        const grid = new Grid(UNDER_POPULATION_SEED);
        grid.tick();
        expect(grid.cells[1][1].alive).toBe(false);
      });
    });

    describe('any live cell with two or three live neighbours', () => {
      it('lives (generation)', () => {
        const grid = new Grid(GENERATION_SEED);
        grid.tick();
        expect(grid.cells[1][1].alive).toBe(true);
      });
    });
  });
});
