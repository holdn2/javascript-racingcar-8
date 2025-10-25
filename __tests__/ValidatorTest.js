import { ERROR_MESSAGE } from '../src/constant/error.js';
import {
  validateAttemptCount,
  validateCarNameArray,
  validateCarNameString,
} from '../src/utils/validator.js';

describe('자동차 이름 문자열을 파싱했을 때, 조건을 만족하지 못하면 에러를 발생시킨다.', () => {
  test.each([
    {
      desc: '영어, 한글, 숫자, 쉼표를 제외한 문자가 입력되면 에러를 발생시킨다.',
      input: 'pobi,woni##',
      func: validateCarNameString,
      expected: ERROR_MESSAGE.INVALID_CAR_NAME_CHARACTER,
    },
    {
      desc: '이름 중 하나라도 5자보다 길다면 에러를 발생시킨다.',
      input: ['pobi', 'woni', 'qwerasdf'],
      func: validateCarNameArray,
      expected: ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH,
    },
    {
      desc: '중복된 이름이 있다면 에러를 발생시킨다.',
      input: ['pobi', 'woni', 'pobi'],
      func: validateCarNameArray,
      expected: ERROR_MESSAGE.DUPLICATE_CAR_NAME,
    },
    {
      desc: '자동차가 1대 이상 입력되지 않으면 에러를 발생시킨다.',
      input: [],
      func: validateCarNameArray,
      expected: ERROR_MESSAGE.EMPTY_CAR_NAME_LIST,
    },
  ])('$desc', ({ input, func, expected }) => {
    expect(() => func(input)).toThrow(expected);
  });
});

describe('시도할 횟수 입력이 조건을 만족하지 못하면 에러를 발생시킨다.', () => {
  test('시도할 횟수가 양의 정수가 아닌 경우 에러를 발생시킨다.', () => {
    const input = '-6';
    expect(() => validateAttemptCount(input)).toThrow(
      ERROR_MESSAGE.INVALID_ATTEMPT_COUNT,
    );
  });
});
