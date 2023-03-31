export default class Bowling {
  _score: number;
  _rolls: number[];

  constructor() {
    this._rolls = new Array<number>();
    this._score = 0;
  }

  roll(numberOfPins: number) {
    this._rolls.push(numberOfPins);
  }

  private checkIsStrike(v1: number) {
    return v1 === 10;
  }

  private checkIsSpare(v1: number, v2: number) {
    return v1 + v2 === 10;
  }

  private getFramesByRolls(rolls: number[]) {
    const frames = [];

    for (let i = 0; i < rolls.length; i += 1) {
      if (this.checkIsStrike(rolls[i])) {
        frames.push([rolls[i]]);
        continue;
      }
      frames.push([rolls[i], rolls[i + 1]]);
      i += 1;
    }

    return frames;
  }

  //   Score of the game
  getScore(): number {
    const frames = this.getFramesByRolls(this._rolls);

    let score = 0;

    for (let i = 0; i < 10; i++) {
      const currentFrame = frames[i];
      const nextFrame = frames[i + 1];

      let bonus: number = 0;

      const isStrike = this.checkIsStrike(currentFrame[0]);
      const isSpare = this.checkIsSpare(currentFrame[0], currentFrame[1]);

      if (isStrike) {
        bonus = nextFrame[0] + (nextFrame[1] ?? frames[i + 2][0]);
      } else if (isSpare && nextFrame) {
        bonus = nextFrame[0];
      }

      score += currentFrame[0] + (currentFrame[1] ?? 0) + bonus;
    }

    return score;
  }
}
