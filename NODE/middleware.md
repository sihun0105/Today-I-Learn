express를 사용하여 api를 작성하다보면 라우터에 다양한 미들웨어를 붙여쓰게 된다.

여기서 미들웨어에 종류에대해 정리하려고 한다.

Express 애플리케이션은 다음과 같은 유형의 미들웨어를 사용할 수 있습니다.
- 애플리케이션 레벨 미들웨어 : 애플리케이션 레벨 및 라우터 레벨 미들웨어는 선택적인 마운트 경로를 통해 로드할 수 있습니다. 일련의 미들웨어 함수를 함께 로드할 수도 있으며, 이를 통해 하나의 마운트 위치에 미들웨어 시스템의 하위 스택을 작성할 수 있습니다.

```javascript
var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
```
- 라우터 레벨 미들웨어 : 라우터 레벨 미들웨어는 express.Router() 인스턴스에 바인드된다는 점을 제외하면 애플리케이션 레벨 미들웨어와 동일한 방식으로 작동합니다.

```javascript
var router = express.Router();
```
- 오류 처리 미들웨어 : 다른 미들웨어 함수와 동일반 방법으로 다음과 같이 오류 처리 미들웨어 함수를 정의할 수 있지만, 오류 처리 함수는 3개가 아닌 4개의 인수, 구체적으로 말하면 (err, req, res, next) 시그니처를 갖는다는 점이 다릅니다.
```javascript
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```


- 기본 제공 미들웨어 : 4.x 버전 이후의 Express는 더 이상 Connect에 종속되지 않습니다. express.static의 실행을 제외하면, 이전에 Express와 함께 포함되었던 모든 미들웨어 함수는 이제 별도의 모듈에 포함되어 있습니다. 미들웨어 함수 목록을 확인하십시오.
- 써드파티 미들웨어 : Express 앱에 기능을 추가하려면 써드파티 미들웨어를 사용하십시오.
필요한 기능을 위한 Node.js 모듈을 설치한 후, 애플리케이션 레벨 또는 라우터 레벨에서 해당 모듈을 앱에 로드하십시오.
다음 예는 쿠키 구문 분석 미들웨어 함수인 cookie-parser의 설치 및 로드를 나타냅니다.
```javascript
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());
```

참고자료 https://expressjs.com/ko/guide/using-middleware.html#middleware.built-in