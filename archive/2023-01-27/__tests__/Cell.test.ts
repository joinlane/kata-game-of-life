import Cell from '../Cell';

const IS_ALIVE = true;

describe('Cell', () => {
  describe('a cell can be instantiated', () => {
    it('can be alive', () => {
      const aliveCell = new Cell(IS_ALIVE);
      expect(aliveCell.alive).toBe(true);
    });

    it('can be dead', () => {
      const deadCell = new Cell(!IS_ALIVE);
      expect(deadCell.alive).toBe(false);
    });

    // Overly Defensive Code
    // describe('when the cell ticks', () => {
    //   it('should throw a "CellNotReady" Error', () => {
    //     const cell = new Cell(IS_ALIVE);

    //     expect(() => cell.tick()).toThrow('CellNotReady');
    //   });
    // });
  });

  describe('a living cell', () => {
    it('can die', () => {
      const livingCell = new Cell(IS_ALIVE);

      livingCell.die();
      livingCell.tick();

      expect(livingCell.alive).toBe(false);
    });
  });

  describe('a dead cell', () => {
    it('can regenerate', () => {
      const deadCell = new Cell(!IS_ALIVE);

      deadCell.regenerate();
      deadCell.tick();

      expect(deadCell.alive).toBe(true);
    });
  });
});
