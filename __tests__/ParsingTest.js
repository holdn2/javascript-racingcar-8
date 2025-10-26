import { parseCarNameString, removeAllSpaces } from '../src/utils/utils';

describe('입력된 경주할 자동차 이름 문자열을 문자열 배열로 파싱한다.', () => {
  test.each([
    // given
    {
      desc: '유효한 이름 입력 - 쉼표로 구분된 세 개의 이름',
      input: 'pobi,woni,jun',
      expected: ['pobi', 'woni', 'jun'],
    },
    {
      desc: '마지막에 쉼표가 있어 빈 토큰 발생하면 제거 후 판정한다.',
      input: 'pobi,woni,',
      expected: ['pobi', 'woni'],
    },
    {
      desc: '하나의 이름이어도 제대로 동작한다.',
      input: 'pobi',
      expected: ['pobi'],
    },
  ])('$desc', ({ input, expected }) => {
    // when
    const noSpaceString = removeAllSpaces(input);
    const parsedCarNameArray = parseCarNameString(noSpaceString);

    //then
    expect(parsedCarNameArray).toEqual(expected);
  });
});
