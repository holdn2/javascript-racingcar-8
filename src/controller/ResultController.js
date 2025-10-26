import { MARK } from '../constant/mark.js';
import resultView from '../view/ResultView.js';

export default class ResultController {
  #racingCar;
  #winners;
  #mostSuccesses;

  constructor(racingCar) {
    this.#racingCar = racingCar;
    this.#winners = [];
  }

  run() {
    this.#getMostSuccesses();
    this.#getWinners();

    // 최종 결과 출력
    resultView.printFinalResult(this.#winners.join(MARK.COMMA));
  }

  // 가장 많은 전진 횟수 구하는 함수
  #getMostSuccesses() {
    this.#mostSuccesses = Math.max(
      ...this.#racingCar.map((car) => car.carCurrentInfo.successCount),
    );
  }

  // 가장 많은 전진 횟수를 가진 자동차 구하여 winners에 넣는 함수
  #getWinners() {
    const winnerCars = this.#racingCar.filter(
      (car) => car.carCurrentInfo.successCount === this.#mostSuccesses,
    );
    this.#winners = winnerCars.map((car) => car.carCurrentInfo.carName);
  }
}
