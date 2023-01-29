## Promise객체란 무엇인가?

프로미스는 자바스크립트 비동기 처리에 사용되는 객체이며, ES6버전에 처음 공개되었습니다.
(*비동기 : 코드의 결과를 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특징)

Promise객체가 없었던 과거에는 흔히 말하는 ~~콜백지옥~~을 경험한 적이 있을 것 입니다.


## Promise 생애주기
Promise객체는 3가지 상태를 가지고 있습니다.
- pending : 이행도 거부도 아닌 초기 상태
- fulfilled : 작업이 성공적으로 완료되었음을 의미하는 상태 (  resolve )
- reject : 작업이 실패했음을 의미하는 상태 ( reject )

## 사용방법

```javascript
const p = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve("foo");
  }, 300);
})
p.then((message)=>{ console.log(message)});
```
기본적인 프로미스는 프로미스 객체를 생성한 후, 콜백함수 부분에서 필요한 로직을 작성해주며 성공했을시 resolve(), 실패했을 시 reject()함수를 불러서 사용하곤 합니다.

제가 자주 사용하는 방법은 함수를 만든후 함수 내부에서 Promise를 생성하고 리턴하는 방법을 주로 사용하곤 합니다.
```javascript
const fun = () => {
    return new Promise((resolve,reject)=>{
        let num1 = 1;
        let num2 = 2;
        let result = num1+num2;
        resolve(result);
    })
}
fun().then((v)=>{ console.log(v)});
```
