import { Random } from '@woowacourse/mission-utils';

export default class RacingCar {
  #carName;
  #successCount = 0;

  constructor(carName) {
    this.#carName = carName;
  }

  tryToMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.#successCount += 1;
    }
  }

  get carCurrentInfo() {
    return {
      carName: this.#carName,
      successCount: this.#successCount,
    };
  }
}
