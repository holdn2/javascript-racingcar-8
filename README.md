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

- 입력에 포함된 모든 공백은 제거 후 판정한다.
- 자동차 이름 한글/영문/숫자만 허용한다.
- 동일한 이름이 있다면 에러를 발생시킨다.
- 1대 이상의 자동차를 입력해야 한다.
- `pobi,,jun`, `, ,` 처럼 빈 토큰이 생기면 제거 후 판정한다.
- 시도할 횟수는 양의 정수만 허용한다.

## 👉 프로그램 흐름

1. **경주할 자동차 이름 입력**
   - 입력 받은 문자열의 모든 공백은 제거한다.
   - `,`로 각 자동차 이름을 구분하여 배열로 변환한다.
   - 아래의 조건을 만족하지 않을 때, 에러를 발생시킨다.
     - 이름은 `영어/한글/숫자`만을 허용한다.
     - 1자 이상 5자 이하로 입력해야 한다.
     - 중복된 이름이 없어야 한다.
     - 조건을 모두 만족하는 자동차는 1대 이상이어야 한다.

2. **시도할 횟수 입력**
   - 입력 받은 문자열의 모든 공백을 제거한다.
   - 횟수는 양의 정수로만 입력해야 하고, 그 외의 경우에는 에러를 발생시킨다.

3. **RacingCar** 클래스 생성
   - 입력 받은 자동차에 따라 각각 RacingCar 클래스를 생성한다.
   - `carName`(이름), `successCount`(성공 횟수), `tryToMove()`(전진 시도 함수)를 가진다.
   - `tryToMove()`는 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우 `successCount`를 1 증가시킨다.
   - 무작위 값을 구할 때는 `Random.pickNumberInRange()` 를 활용한다.

4. **전진 시도 및 실행 결과 출력**
   - 입력받은 시도할 횟수만큼 각 자동차의 `tryToMove` 를 실행한다.
   - 매 시도마다 `Console.print()` 로 실행 결과를 출력한다.
   - 각 자동차의 `carName`과 함께 `successCount` 만큼 `-` 를 출력한다.
   - 출력 형식 : `pobi : -`

5. **최종 우승자 출력**
   - 모든 시도가 종료된 이후 `Console.print()` 로 우승자의 이름을 출력한다.
   - 각 자동차가 가진 `successCount` 를 비교하여 가장 큰 경우의 자동차 이름을 출력한다.
   - `successCount` 가 동일한 경우 모두 출력한다.
   - 출력 형식 : `최종 우승자 : pobi, jun`

## 🔥 예외 처리

- [ERROR] 자동차 이름은 영어, 한글, 숫자만 입력 가능합니다.
- [ERROR] 이름은 1자 이상 5자 이하로만 입력 가능합니다.
- [ERROR] 이름이 중복되었습니다. 모두 다른 이름으로 입력해주세요.
- [ERROR] 1대 이상의 자동차 이름을 입력해주세요.
- [ERROR] 시도할 횟수는 양의 정수로 입력해주세요.

## 💻 참고자료

- [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript?tab=readme-ov-file#table-of-contents)
- [Airbnb JavaScript Style Guide(번역)](https://github.com/ParkSB/javascript-style-guide)
- [우테코 mission-utils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils?tab=readme-ov-file)
- [Using Matchers](https://jestjs.io/docs/using-matchers) / [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous) / [Jest로 파라미터화 테스트하기](https://www.daleseo.com/jest-each/)
