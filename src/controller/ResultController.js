import { MARK } from '../constant/mark.js';
import resultView from '../view/ReseultView.js';

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

    resultView.printFinalResult(this.#winners.join(MARK.COMMA));
  }

  #getMostSuccesses() {
    this.#mostSuccesses = Math.max(
      ...this.#racingCar.map((car) => car.carCurrentInfo.successCount),
    );
  }

  #getWinners() {
    const winnerCars = this.#racingCar.filter(
      (car) => car.carCurrentInfo.successCount === this.#mostSuccesses,
    );
    this.#winners = winnerCars.map((car) => car.carCurrentInfo.carName);
  }
}
