import { Console } from '@woowacourse/mission-utils';
import { INFORM_MESSAGE } from '../constant/inform.js';

const inputView = {
  async readLineCarNames() {
    const carNameString = await Console.readLineAsync(
      INFORM_MESSAGE.READ_CAR_NAMES,
    );
    return carNameString;
  },

  async readLineAttemptCount() {
    const attemptCount = await Console.readLineAsync(
      INFORM_MESSAGE.READ_ATTEMPT_COUNT,
    );
    return attemptCount;
  },
};
export default inputView;
