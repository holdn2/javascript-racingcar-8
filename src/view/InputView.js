import { Console } from '@woowacourse/mission-utils';
import { INFORM_MESSAGE } from '../constant/inform.js';

const inputView = {
  // 경주할 자동차 이름 문자열 입력
  async readLineCarNames() {
    const carNameString = await Console.readLineAsync(
      INFORM_MESSAGE.READ_CAR_NAMES,
    );
    return carNameString;
  },

  // 시도할 횟수 입력
  async readLineAttemptCount() {
    const attemptCount = await Console.readLineAsync(
      INFORM_MESSAGE.READ_ATTEMPT_COUNT,
    );
    return attemptCount;
  },
};
export default inputView;
