import { Console } from '@woowacourse/mission-utils';
import { INFORM_MESSAGE } from '../constant/inform.js';
import { MARK } from '../constant/mark.js';

const resultView = {
  printRacingStart() {
    Console.print(INFORM_MESSAGE.ROUND_RESULT);
  },

  printEachCar(carName, successCountView) {
    Console.print(carName + MARK.COLON + successCountView);
  },

  printLineBreak() {
    Console.print(MARK.EMPTY);
  },

  printFinalResult(winners) {
    Console.print(INFORM_MESSAGE.FINAL_RESULT + winners);
  },
};
export default resultView;
