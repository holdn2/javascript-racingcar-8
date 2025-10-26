import inputView from '../view/InputView.js';
import { parseCarNameString, removeAllSpaces } from '../utils/utils.js';
import {
  validateCarNameArray,
  validateCarNameString,
} from '../utils/validator.js';
import RacingCar from '../model/RacingCar.js';

export default class CarRegisterController {
  async run() {
    const carNameString = await inputView.readLineCarNames();

    const noSpaceString = removeAllSpaces(carNameString);
    validateCarNameString(noSpaceString);

    const carNameArray = parseCarNameString(noSpaceString);
    validateCarNameArray(carNameArray);

    const racingCarArray = carNameArray.map((name) => new RacingCar(name));

    return racingCarArray;
  }
}
