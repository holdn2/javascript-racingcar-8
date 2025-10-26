import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constant/error.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    {
      desc: '둘 다 전진을 0회 했을 경우, 공동 우승',
      inputs: ['pobi,woni', '1'],
      randoms: [2, 3],
      expectedLogs: ['pobi : ', 'woni : ', '최종 우승자 : pobi, woni'],
    },
    {
      desc: '두 자동차 모두 전진 후 공동 우승',
      inputs: ['pobi,woni', '1'],
      randoms: [5, 7],
      expectedLogs: ['pobi : -', 'woni : -', '최종 우승자 : pobi, woni'],
    },
    {
      desc: '여러 번 전진 시도 및 우승자 결정',
      inputs: ['pobi,woni', '2'],
      randoms: [3, 4, 5, 4],
      expectedLogs: [
        'pobi : ',
        'woni : -',
        'pobi : -',
        'woni : --',
        '최종 우승자 : woni',
      ],
    },
  ])('$desc', async ({ inputs, randoms, expectedLogs }) => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms(randoms);

    // when
    const app = new App();
    await app.run();

    // then
    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test.each([
    {
      desc: '허용되지 않는 문자 입력 시 에러 발생',
      input: ['!!pobi,woni##'],
      expected: ERROR_MESSAGE.INVALID_CAR_NAME_CHARACTER,
    },
    {
      desc: '중복된 이름이 있다면 에러 발생',
      input: ['pobi,woni,pobi'],
      expected: ERROR_MESSAGE.DUPLICATE_CAR_NAME,
    },
    {
      desc: '자동차가 1대 이상 없다면 에러 발생',
      input: [', , ,'],
      expected: ERROR_MESSAGE.EMPTY_CAR_NAME_LIST,
    },
  ])('$desc', async ({ input, expected }) => {
    // given
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(expected);
  });
});
