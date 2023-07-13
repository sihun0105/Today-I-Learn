## BLoC 패턴이란?

> BLoC(Business Logic Component)은 상태가 변화할때마다 렌더링 되는 Flutter에서 UI와 Business Logic을 분리하여 사용하는 패턴이다.

공식문서에 따르면 Presentation layer와 Business layer를 분리함으로써 아래와 같은 효과를 얻을 수 있다고 작성되있다.

## BLoC 의 특징

- UI 에서는 여러 BLoC 이 존재할 수 있다.
- UI 에서는 화면에 집중하고, BLoC 에서는 Logic 에 집중한다.
- UI 에서는 BLoC 의 내부 구현에 대해서 몰라도 된다.
- BLoC 은 여러 UI 에서 구독 할 수 있다. 때문에 재사용이 용의하다.
- BLoC 만을 분리해서 테스트가 가능하다.

## BlocBuilder

Bloc의 새로운 상태에 따라서 위젯을 만드는 클래스다. Bloc의 State가 변할 때마다 builder 함수가 여러번 불리게 되고 상태에 따라서 표현할 위젯을 바꿀 수 있다. 리턴 함수는 위젯 함수여야 한다. buildWhen 은 스테이트에 대해서 새롭게 위젯을 만들어야할지 말지를 리턴하는 함수다. 조건 문으로 특정 스테이트에 대해선 업데이트 하지 않도록 할 수 있다.

```dart
BlocBuilder<BlocA, BlocAState>(
  buildWhen: (previousState, state) {
    // return true/false to determine whether or not
    // to rebuild the widget with state
  },
  builder: (context, state) {
    // return widget here based on BlocA's state
  }
)
```

## BlocSelector

BlocBuilder랑 여러모로 유사한데, 개발자가 관찰하고 싶은 상태에 대해서만 새롭게 빌드하도록 한다. 선택된 값이 변화하지 않는다면 불필요한 빌드를 막을 수 있다.

```dart
BlocSelector<BlocA, BlocAState, SelectedState>(
  selector: (state) {
    // return selected state based on the provided state.
  },
  builder: (context, state) {
    // return widget here based on the selected state.
  },
)
```

## BlocProvider

자식 뷰에게 Bloc을 제공할 수 있는 위젯이다. 하나의 동일한 인스턴스 bloc이 여러개의 위젯에 전달될 수 있게 Dependency Inversion 방식으로 제공된다. 안드로이드에서 Hilt를 이용해 컴포넌트를 인젝트 했던 것을 생각하면 된다.

```dart
BlocProvider(
  create: (BuildContext context) => BlocA(),
  child: ChildA(),
);
```

## MultiBlocProvider

자식에게 여러개의 Bloc을 제공할 수 있다.

```dart
MultiBlocProvider(
  providers: [
    BlocProvider<BlocA>(
      create: (BuildContext context) => BlocA(),
    ),
    BlocProvider<BlocB>(
      create: (BuildContext context) => BlocB(),
    ),
    BlocProvider<BlocC>(
      create: (BuildContext context) => BlocC(),
    ),
  ],
  child: ChildA(),
)
```
