## Asynchronous-providers란?

모듈에 등록하기 전에 비동기적으로 초기화되거나 구성된 클래스 또는 값을 제공하는데 사용됩니다.

Asynchronous providers는 useFactory를 사용해 생성할 수 있다.
useFactory는 Promise를 반환하는 함수이다.
이 함수는 Nest가 제공자를 인스턴스화할 때 호출하고, 반환된 Promise가 해결될 때까지 기다린다.
