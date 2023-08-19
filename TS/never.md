## Never

`Never`타입은 절대 발생할 수 없는 타입이며, `Never`타입은 모든 타입에 할당 가능한 하위 타입이다.

하지만 어떤 타입도 `Never`에 할당할 수 있거나, 하위 타입이 아니다.(never 자신은 제외) 심지어 any 도 never에 할당할 수 없다.

```typescript
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
  throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
  return error("Something failed");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
  while (true) {}
}
```

### Never vs Void

`void` 타입은 기본적으로 반환 값이 없을 때 사용한다.

`JavaScript`에서는 아무것도 반환하지 않는 함수는 기본적으로 `undefined`을 반환한다.

하지만 `TypeScript`에서는 반환유형이 `void`가 된다.

### 결론

void는 의미 있는 반환값을 생성하지 않고 작업을 수행하는 함수를 나타낸다.

never은 절대 발생해서는 안되는 값을 나타낸다.
