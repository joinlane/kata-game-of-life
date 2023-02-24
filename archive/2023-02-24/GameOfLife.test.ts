import GameOfLife from './GameOfLife';

const SEED_WITH_DEAD_CELL = [[false]];

const SEED_WITH_LIVING_CELL = [[true]];

// O

describe('GameOfLife', () => {
  describe('given some valid seed', () => {
    it('can be initialized', () => {
      const gameOfLife = new GameOfLife(SEED_WITH_DEAD_CELL);

      expect(gameOfLife).not.toBeNull();
    });

    it('can access grid values', () => {
      const gameOfLife = new GameOfLife(SEED_WITH_DEAD_CELL);

      expect(gameOfLife.grid).toEqual(SEED_WITH_DEAD_CELL);
    });
  });

  describe('#tick (advance the frame)', () => {
    it('can advance the game state', () => {
      const gameOfLife = new GameOfLife(SEED_WITH_DEAD_CELL);

      gameOfLife.tick();

      expect(gameOfLife.grid).toEqual([[false]]);
    });

    describe('the grid has one (1x1) living cell', () => {
      it('the cell will die', () => {
        const gameOfLife = new GameOfLife(SEED_WITH_LIVING_CELL);

        gameOfLife.tick();

        expect(gameOfLife.grid).toEqual([[false]]);
      });
    });

    describe('the grid with 1 live cell (1,1) that has 2 or 3 neighbours', () => {
      it('(1,1) will survive', () => {
        const gameOfLife = new GameOfLife([
          [false, true, false],
          [false, true, false],
          [false, false, true],
        ]);

        gameOfLife.tick();

        expect(gameOfLife.grid).toEqual([
          [expect.any(Boolean), expect.any(Boolean), expect.any(Boolean)],
          [expect.any(Boolean), true, expect.any(Boolean)],
          [expect.any(Boolean), expect.any(Boolean), expect.any(Boolean)],
        ]);
      });
    });

    describe('the grid with a dead cell (1,1) that 3 living neighbours', () => {
      it('(1,1) will begin living', () => {
        const gameOfLife = new GameOfLife([
          [false, true, false],
          [false, false, false],
          [false, true, true],
        ]);

        gameOfLife.tick();

        expect(gameOfLife.grid).toEqual([
          [expect.any(Boolean), expect.any(Boolean), expect.any(Boolean)],
          [expect.any(Boolean), true, expect.any(Boolean)],
          [expect.any(Boolean), expect.any(Boolean), expect.any(Boolean)],
        ]);
      });
    });

    describe('given a glider seed', () => {
      it('expect a tick (1) to yield correct glider', () => {
        const gameOfLife = new GameOfLife([
          [false, false, false, false, false, false],
          [false, false, false, true, false, false],
          [false, true, false, true, false, false],
          [false, false, true, true, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
        ]);

        const nextState = [
          [false, false, false, false, false, false],
          [false, false, true, false, false, false],
          [false, false, false, true, true, false],
          [false, false, true, true, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
        ];

        gameOfLife.tick();

        expect(gameOfLife.grid).toEqual(nextState);
      });
    });
  });
});
