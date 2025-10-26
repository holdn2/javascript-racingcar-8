import { Random } from '@woowacourse/mission-utils';

export default class RacingCar {
  #carName;
  #successCount = 0;

  constructor(carName) {
    this.#carName = carName;
  }

  // 무작위 값으로 전진 여부를 판단하여 전진하는 함수
  tryToMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.#successCount += 1;
    }
  }

  // RacingCar 정보 조회 getter
  get carCurrentInfo() {
    return {
      carName: this.#carName,
      successCount: this.#successCount,
    };
  }
}
