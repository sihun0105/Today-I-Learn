## BLoC 패턴이란?
> BLoC(Business Logic Component)은 상태가 변화할때마다 렌더링 되는 Flutter에서 UI와 Business Logic을 분리하여 사용하는 패턴이다.

공식문서에 따르면 Presentation layer와 Business layer를 분리함으로써 아래와 같은 효과를 얻을 수 있다고 작성되있다.

## BLoC 의 특징
- UI 에서는 여러 BLoC 이 존재할 수 있다.
- UI 에서는 화면에 집중하고, BLoC 에서는 Logic 에 집중한다.
- UI 에서는 BLoC 의 내부 구현에 대해서 몰라도 된다.
- BLoC 은 여러 UI 에서 구독 할 수 있다. 때문에 재사용이 용의하다.
- BLoC 만을 분리해서 테스트가 가능하다.
