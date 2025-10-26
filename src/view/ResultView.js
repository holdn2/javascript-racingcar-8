import { Console } from '@woowacourse/mission-utils';
import { INFORM_MESSAGE } from '../constant/inform.js';
import { MARK } from '../constant/mark.js';

const resultView = {
  // "실행 결과" 출력
  printRacingStart() {
    Console.print(INFORM_MESSAGE.ROUND_RESULT);
  },

  // 각 RacingCar 에 대한 실행 결과 출력
  printEachCar(carName, successCountView) {
    Console.print(carName + MARK.COLON + successCountView);
  },

  // 줄바꿈
  printLineBreak() {
    Console.print(MARK.NEW_LINE);
  },

  // 최종 결과 출력
  printFinalResult(winners) {
    Console.print(INFORM_MESSAGE.FINAL_RESULT + winners);
  },
};
export default resultView;
