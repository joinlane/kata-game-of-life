function adder(x: number, y: number) {
  return x + y;
}

describe.skip('adder', () => {
  describe('given a larger negative has absolute value greater than positive, {x < 0 && abs(x) > y', () => {
    it('should have a negative result', () => {
      const result = adder(-10, 5);
      expect(result).toBeLessThan(0);
    });
  });
});
