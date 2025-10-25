import inputView from '../src/view/InputView';

describe('자동차 이름 문자열을 파싱했을 때, 조건을 만족하지 못하면 에러를 발생시킨다.', () => {
  test.each([
    {
      desc: '영어, 한글, 숫자, 쉼표를 제외한 문자가 입력되면 에러를 발생시킨다.',
      input: 'pobi,woni##',
      expected: '[ERROR] 자동차 이름은 영어, 한글, 숫자만 입력 가능합니다.',
    },
    {
      desc: '이름 중 하나라도 5자보다 길다면 에러를 발생시킨다.',
      input: 'pobi,woni,qwerasdf',
      expected: '[ERROR] 이름은 5자 이하로만 입력 가능합니다.',
    },
    {
      desc: '중복된 이름이 있다면 에러를 발생시킨다.',
      input: 'pobi,woni,pobi',
      expected:
        '[ERROR] 이름이 중복되었습니다. 모두 다른 이름으로 입력해주세요.',
    },
    {
      desc: '자동차가 1대 이상 입력되지 않으면 에러를 발생시킨다.',
      input: ',,',
      expected: '[ERROR] 1대 이상의 자동차 이름을 입력해주세요.',
    },
  ])('$desc', ({ input, expected }) => {
    expect(inputFunc(input)).toThrow(expected);
  });
});

describe('시도할 횟수 입력이 조건을 만족하지 못하면 에러를 발생시킨다.', () => {
  test('시도할 횟수가 양의 정수가 아닌 경우 에러를 발생시킨다.', () => {
    const input = '-6';
    const result = inputView.readLineAttemptCount(input);
    expect(result).toThrow('[ERROR] 시도할 횟수는 양의 정수로 입력해주세요.');
  });
});
