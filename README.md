# javascript-racingcar-precourse

## ❓ 기능 요구 사항

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

## ❓ 입출력 요구 사항

### 입력

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)
  ```
  pobi,woni,jun
  ```
- 시도할 횟수
  ```
  5
  ```

### 출력

- 차수별 실행 결과
  ```
  pobi : --
  woni : ----
  jun : ---
  ```
- 단독 우승자 안내 문구
  ```
  최종 우승자 : pobi
  ```
- 공동 우승자 안내 문구
  ```
  최종 우승자 : pobi, jun
  ```

### 실행 결과 예시

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

## 추가 결정 요구사항

- 자동차 이름 입력에 포함된 모든 공백은 제거 후 판정한다.
- 자동차 이름 한글/영문/숫자만 허용한다.
- 동일한 이름이 있다면 에러를 발생시킨다.
- 1대 이상의 자동차를 입력해야 한다.
- 입력 문자열에서 공백 제거 후 쉼표를 기준으로 분리하였을 때 빈 토큰이 생기면 제거 후 판정한다.
- 시도할 횟수 입력은 양의 정수만 허용한다.

## 👉 프로그램 흐름

1. **경주할 자동차 이름 입력 (CarRegisterController)**

- 입력 받은 문자열의 모든 공백을 제거한다.
  - 영어, 한글, 숫자, `,` 외의 문자를 포함하면 에러를 발생시킨다.
- `,`로 분리한 뒤 빈 토큰을 제거하고 배열로 변환한다.
- 배열로 변환한 이후 아래 조건을 만족하지 않으면 에러를 발생시킨다.
  - 중복 이름 불가
  - 최소 1대 이상이어야 함
  - 이름이 5자 이하여야 함
- 배열의 문자열을 이름으로 갖는 `RacingCar` 클래스를 생성하여 반환한다.

2. **자동차 경주 게임 진행 (RaceController)**

- 시도할 횟수를 입력 받는다.
  - 횟수는 양의 정수로만 입력해야 하고, 그 외의 경우에는 에러를 발생시킨다.
- 각 `RacingCar` 객체의 `tryToMove`을 시도할 횟수만큼 호출한다.
- 각 `RacingCar` 객체의 전진 횟수(`successCount`)를 이름과 함께 `-`를 사용하여 출력한다.
  - 출력 예시는 다음과 같다.
    ```
    pobi : --
    woni : ----
    jun : ---
    ```

3. **자동차 게임 결과 출력 (ResultController)**

- 각 `RacingCar` 객체의 전진 횟수를 비교하여 가장 높은 횟수를 구한다.
- 가장 높은 횟수를 가진 우승자를 찾아서 아래와 같은 형태로 출력한다.
  - 단독 우승자의 경우
    ```
    최종 우승자 : pobi
    ```
  - 공동 우승자의 경우
    ```
    최종 우승자 : pobi, jun
    ```

## 📍 함수

### Model

- `RacingCar.tryToMove()` : `Random.pickNumberInRange(0, 9)` 결과가 ≥ 4면 `successCount` 1 증가
- `RacingCar.carCurrentInfo (getter)` : `{ carName, successCount }` 반환 (상태 조회용)

### View

- `InputView.readLineCarNames()` : 경주할 자동차 이름 문자열 입력 받기
- `InputView.readLineAttemptCount()` : 시도할 횟수 후 문자열 입력 받기
- `ResultView.printRacingStart()` : “실행 결과” 안내 출력
- `ResultView.printEachCar(carName, progress)` : `carName + " : " + progress` 형식으로 1줄 각 자동차에 대하여 출력
- `ResultView.printLineBreak()` : 라운드 간 공백 줄 출력(빈 문자열 출력)
- `ResultView.printFinalResult(winners)` : `최종 우승자 : ${winners}` 출력

### Controller

- `RaceController.#race()` : 입력된 횟수만큼 라운드 반복, 각 라운드에서 모든 자동차 `tryToMove()` 호출 후 `#printEachCarResult()` 실행
- `RaceController.#printEachCarResult()` : 각 자동차의 `successCount`를 `-`로 렌더링하여 라인별 출력, 라운드 구분 공백 줄 출력
- `ResultController.#getMostSuccesses()` : `RacingCar[]`에서 `successCount`의 최댓값 계산
- `ResultController.#getWinners()` : 최댓값을 가진 자동차들의 이름 배열 도출

### Utils

- `removeAllSpaces(input)` : 모든 공백 제거(정규식 `\s` 기반)
- `parseCarNameString(input)` : 쉼표를 기준으로 분리 후 빈 토큰 제거하여 이름 배열 생성

### Validator

- `validateCarNameString(input)` : 공백 제거 전의 원본 이름 문자열에 대해 허용 문자(영/한/숫자/쉼표) 여부 검증. 위반 시 `[ERROR]` throw
- `validateCarNameArray(arr)` : 1대 이상, 중복 없음, 각 이름 5자 이하 검증. 위반 시 `[ERROR]` throw
- `validateAttemptCount(input)` : 양의 정수 여부 검증. 위반 시 `[ERROR]` throw

## 🔥 예외 처리

- [ERROR] 자동차 이름은 영어, 한글, 숫자, 쉼표(,)만 입력 가능합니다.
- [ERROR] 이름은 5자 이하로만 입력 가능합니다.
- [ERROR] 이름이 중복되었습니다. 모두 다른 이름으로 입력해주세요.
- [ERROR] 1대 이상의 자동차 이름을 입력해주세요.
- [ERROR] 시도할 횟수는 양의 정수로 입력해주세요.

## 📁 디렉토리 구조

```
src/
 ├─ 📄 index.js
 ├─ 📄 App.js                       # 전체 실행 흐름
 ├─ 📁 constant/                    # 상수/정규식/메시지
 │   ├─ 📄 error.js                 # 에러 메시지 상수
 │   ├─ 📄 inform.js                # 안내/입출력 메시지 상수
 │   ├─ 📄 mark.js                  # 출력 포맷 기호 (콜론/대시/콤마 등)
 │   └─ 📄 regex.js                 # 입력 검증 정규식
 ├─ 📁 controller/                  # 흐름 제어
 │   ├─ 📄 CarRegisterController.js # 이름 입력, 파싱/검증, RacingCar 배열 생성
 │   ├─ 📄 RaceController.js        # 시도 횟수 입력/검증, 라운드 진행 및 라운드 출력
 │   └─ 📄 ResultController.js      # 최댓값 산출, 우승자 목록 생성 및 최종 출력
 ├─ 📁 model/                       # 도메인 엔티티
 │   └─ 📄 RacingCar.js             # 자동차 상태(name/position)와 tryToMove()
 ├─ 📁 utils/                       # 유틸 / 검증
 │   ├─ 📄 utils.js                 # 공백 제거, 이름 문자열 파싱 등 순수 함수
 │   └─ 📄 validator.js             # 자동차 이름 / 시도할 횟수 검증 로직
 └─ 📁 view/                        # 콘솔 입출력
     ├─ 📄 InputView.js             # 입력 전담(readLineAsync)
     └─ 📄 ResultView.js            # 출력 전담(print)

```

## 💻 참고자료

- [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript?tab=readme-ov-file#table-of-contents)
- [Airbnb JavaScript Style Guide(번역)](https://github.com/ParkSB/javascript-style-guide)
- [우테코 mission-utils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils?tab=readme-ov-file)
- [Using Matchers](https://jestjs.io/docs/using-matchers) / [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous) / [Jest로 파라미터화 테스트하기](https://www.daleseo.com/jest-each/)
