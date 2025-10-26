import { MARK } from '../constant/mark.js';
import { validateAttemptCount } from '../utils/validator.js';
import inputView from '../view/InputView.js';
import resultView from '../view/ResultView.js';

export default class RaceController {
  #racingCar;
  #attemptCount;

  constructor(racingCar) {
    this.#racingCar = racingCar;
  }

  async run() {
    this.#attemptCount = await inputView.readLineAttemptCount();
    validateAttemptCount(this.#attemptCount);

    resultView.printRacingStart();

    this.#race();
  }

  #race() {
    for (let i = 0; i < this.#attemptCount; i++) {
      this.#racingCar.forEach((car) => car.tryToMove());
      this.#printEachCarResult();
    }
  }

  #printEachCarResult() {
    this.#racingCar.forEach((element) => {
      const successCountView = MARK.DASH.repeat(
        element.carCurrentInfo.successCount,
      );

      resultView.printEachCar(element.carCurrentInfo.carName, successCountView);
    });
    resultView.printLineBreak();
  }
}
