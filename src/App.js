import CarRegisterController from './controller/CarRegisterController.js';
import RaceController from './controller/RaceController.js';
import ResultController from './controller/ResultController.js';

class App {
  async run() {
    const carRegisterController = new CarRegisterController();
    const racingCarArray = await carRegisterController.run();

    const raceController = new RaceController(racingCarArray);
    await raceController.run();

    const resultController = new ResultController(racingCarArray);
    await resultController.run();
  }
}

export default App;
