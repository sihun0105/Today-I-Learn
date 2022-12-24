### jest란?

jest는 Node 환경에서 주로 사용되는 테스트용 종합 프레임워크다.

프론트 및 백엔드 환경에서도 전부 활용할 수가 있다.

사용법은 간단하다

먼저 프로젝트 폴더/Package.json에 test용 스크립트에 jest를 넣어준다.

```
//Package.json
"scripts" : {
    "test" : "jest"
}
```

add라는 간단한 덧셈용 함수를 만들고, 해당 함수가 유효하게 동작하는지 확인해본다

```javascript
//add.js
function add(1,r) {
    return 1+r;
}
module.exports = add;
```

그리고 테스트용 코드를 작성해본다. 테스트용 소스파일은 항상 .test.확장자(js,ts 등)로 끝나야 한다.

안그러면 jest가 파일을 찾질 못한다.

테스트코드는 다음과 같이 작성할 수 있다.

```javascript
//add.js
const add = require("./add");
test("2+5가 7이라고?", () => {
  expect(add(2, 5)).toBe(7);
});
```

test 함수에 첫`번째 인자로는 설명`을. `두번째 인자로는 수행할 테스트 코드`가 들어간다.

그리고 expect에는 함수의 호출을, 그 `toBe` 메서드에는 `기대값`이 들어간다.

공식문서 : https://jestjs.io/docs/api
참고자료 : https://m.blog.naver.com/sssang97/222009530791
