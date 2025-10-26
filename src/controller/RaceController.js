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
    // 시도할 횟수 입력
    this.#attemptCount = await inputView.readLineAttemptCount();
    validateAttemptCount(this.#attemptCount);

    resultView.printRacingStart();

    this.#race();
  }

  // 시도할 횟수만큼 반복하여 각 RacingCar의 tryToMove 호출 후 라운드 결과 출력
  #race() {
    for (let i = 0; i < this.#attemptCount; i++) {
      this.#racingCar.forEach((car) => car.tryToMove());
      this.#printEachCarResult();
    }
  }

  // 라운드 결과를 출력하는 함수
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
