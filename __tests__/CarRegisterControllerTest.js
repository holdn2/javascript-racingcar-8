import { Console } from '@woowacourse/mission-utils';
import CarRegisterController from '../src/controller/CarRegisterController';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('CarRegisterController 테스트. 문자열 입력에 대하여 배열로 파싱한다.', () => {
  test('정상적인 입력 시 RacingCar 인스턴스 배열을 반환한다.', async () => {
    // given
    const inputs = ['pobi,woni,jun'];
    mockQuestions(inputs);

    // when
    const controller = new CarRegisterController();
    const result = await controller.run();
    const carNames = result.map((car) => car.carCurrentInfo.carName);

    // then
    expect(carNames).toEqual(['pobi', 'woni', 'jun']);
  });

  test('잘못된 이름 입력 시 에러를 발생시킨다.', async () => {
    // given
    const inputs = ['pobi,woni##'];
    mockQuestions(inputs);

    // when
    const controller = new CarRegisterController();

    //  then
    await expect(controller.run()).rejects.toThrow('[ERROR]');
  });

  test('빈 문자열 입력 시 에러를 발생시킨다.', async () => {
    // given
    const inputs = [''];
    mockQuestions(inputs);

    // when
    const controller = new CarRegisterController();

    // then
    await expect(controller.run()).rejects.toThrow('[ERROR]');
  });
});
