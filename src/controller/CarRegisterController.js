import inputView from '../view/InputView.js';
import { parseCarNameString, removeAllSpaces } from '../utils/utils.js';
import {
  validateCarNameArray,
  validateCarNameString,
} from '../utils/validator.js';
import RacingCar from '../model/RacingCar.js';

export default class CarRegisterController {
  async run() {
    // 경주할 자동차 이름 문자열 입력받기
    const carNameString = await inputView.readLineCarNames();

    const noSpaceString = removeAllSpaces(carNameString);
    validateCarNameString(noSpaceString);

    const carNameArray = parseCarNameString(noSpaceString);
    validateCarNameArray(carNameArray);

    // string[]으로 이루어진 이름을 바탕으로 각각의 RacingCar 클래스 생성
    const racingCarArray = carNameArray.map((name) => new RacingCar(name));

    return racingCarArray;
  }
}
