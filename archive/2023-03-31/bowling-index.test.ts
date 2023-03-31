import Bowling from './bowling-index';

// NOTE: Always be thoughtful when introducing a test helper
function repeatRoll(bowling: Bowling, value: number, numberOfTimes: number) {
  for (let i = 0; i < numberOfTimes; i++) {
    bowling.roll(value);
  }
}

describe('Bowling', () => {
  describe('rolled 1 in the first frame, and zeroes for the remainder of the game', () => {
    it('you should have total score of 1', () => {
      // Arrange
      const bowling = new Bowling();

      // Act
      bowling.roll(1);
      repeatRoll(bowling, 0, 19);

      // Assert
      expect(bowling.getScore()).toBe(1);
    });
  });

  describe('rolled two 1s in the first frame, and zeroes for the remainder of the game', () => {
    it('you should have a total score of 2', () => {
      // Arrange
      const bowling = new Bowling();

      // Act
      bowling.roll(1);
      bowling.roll(1);
      repeatRoll(bowling, 0, 18);

      // Assert
      expect(bowling.getScore()).toBe(2);
    });
  });

  describe('Spare: rolled 1 and 9 in the frame, and a 2 in the second frame, zeroes for the remainder of the game', () => {
    it('you should have a total score of 14', () => {
      // Arrange
      const bowling = new Bowling();

      // Act
      bowling.roll(1);
      bowling.roll(9);
      bowling.roll(2);
      repeatRoll(bowling, 0, 17);

      // Assert
      expect(bowling.getScore()).toBe(1 + 9 + 2 + (2 + 0));
    });
  });

  describe('Strike: rolled 10 in the first frame, 4 and 4 in the second frame, zeroes for the remainder of the game', () => {
    it('you should have a total score of 26', () => {
      // Arrange
      const bowling = new Bowling();

      // Act
      bowling.roll(10); // Strike: 10 + 4 + 4 (Frame 1) = 18
      bowling.roll(4); // (Frame 2)
      bowling.roll(4); // (Frame 2) 4 + 4 = 8
      repeatRoll(bowling, 0, 16);

      // Assert
      expect(bowling.getScore()).toBe(10 + 4 + 4 + (4 + 4));
    });
  });

  describe('Strike: rolled 10 in the first frame, 10 in the second frame, a 4 in the third frame, zeroes for the remainder of the game', () => {
    it('you should have a total score of 42', () => {
      // Arrange
      const bowling = new Bowling();

      // Act
      bowling.roll(10); // Frame 1: 10 + 10 + 4 = 24
      bowling.roll(10); // Frame 2: 10 + 4 + 0 = 14
      bowling.roll(4); // Frame 3: 4 = 4
      repeatRoll(bowling, 0, 15);

      // Assert
      expect(bowling.getScore()).toBe(42);
    });
  });

  describe('Strike: rolled 10 in the first frame, 10 in the second frame, a 0 in the third frame, zeroes for the remainder of the game', () => {
    it('you should have a total score of 42', () => {
      // Arrange
      const bowling = new Bowling();

      // Act
      bowling.roll(10); // Frame 1: 10 + 10 + 0 = 20
      bowling.roll(10); // Frame 2: 10 + 0 + 0 = 10
      bowling.roll(0); // Frame 3: 4 = 0
      repeatRoll(bowling, 0, 15);

      // Assert
      expect(bowling.getScore()).toBe(30);
    });
  });

  describe('Perfect Game: Rolled all the strike (total of 12)', () => {
    it('you should have a total score of 300', () => {
      // Arrange
      const bowling = new Bowling();

      // Act
      repeatRoll(bowling, 10, 12);

      // Assert
      expect(bowling.getScore()).toBe(300);
    });
  });
});
