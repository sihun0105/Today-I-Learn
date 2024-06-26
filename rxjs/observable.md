## Observable
관찰 가능한 것은 여러 값의 게으른 푸시 모음이다.
그들은 다음 표에서 누락된 자리를 채운다

| |SINGLE|MULTIPLE|
|---|---|---|
|Pull | Function | Iterator|
|Push	|Promise	|Observable|

예시. 
다음은 구독할 때 값 1, 2, 3을 즉시 (동기적으로) 푸시하고, 
구독 호출 이후 1초 후에 값 4를 통과한 다음 완료하는 Observable입니다.

```javascript

import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
```

Observable을 호출하고 이러한 값을 보려면, 
우리는 그것을 구독해야 합니다.
```javascript
import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');
```

위 실행 결과는 다음과 같습니다.
```
just before subscribe
got value 1
got value 2
got value 3
just after subscribe
got value 4
done
```

함수의 일반화로서 관찰 가능

대중적인 주장과는 달리, Observables는 EventEmitters와 같지 않으며 여러 값에 대한 Promises와 같지도 않다. Observables는 경우에 따라 RxJS Subjects를 사용하여 멀티캐스트될 때 EventEmitters처럼 작동할 수 있지만, 일반적으로 EventEmitters처럼 작동하지 않습니다.

```javascript
import { Observable } from 'rxjs';

const foo = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100); // "return" another value
  subscriber.next(200); // "return" yet another
});

console.log('before');
foo.subscribe((x) => {
  console.log(x);
});
console.log('after');
```
```
"before"
"Hello"
42
100
200
"after"
300
```
