express에서 router를 작성하다 보면 콜백으로(req,res,err,next) 다양한 메서드를 사용한다. 그렇다면 next는 무슨역할을 해주는것일까?
express 공식문서에서는 next는 다음과 같이 정의했다.

> "next, indicating the next middleware function."

next는 다음미들웨어 기능을 나타낸다. 즉 현재 라우터에서 판단하지 않고 다음 라우터에서 처리하겠다는 의미다. 코드를 보면 더욱 쉽게 이해할 수 있다.

```javascript
//test1.js
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  req.test = "test1 입니다.";
  next();
});

module.exports = router;
```

```javascript
//test2.js
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  return res.status(200).json({result : req.test+"test2도 포함됩니다."});
});

module.exports = router;
```

```javascript
//index.js
var test1 = require("./test1");
var test2 = require("./test2");
app.use("/test", test1, test2);

app.listen(3105);
```

```
//결과
test1 입니다.test2도 포함됩니다.
```

보다시피 test1라우터에서 결과를 처리하지않고, 다음 미들웨어로 판단을 넘겨주게 됩니다. 하지만 next()를 사용할때는 주의해야할 사항이 있다.

```javascript
//test1.js
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  req.test = "test1 입니다.";
  next();
  console.log('여기는 호출될까?');
});

module.exports = router;
```
```
//결과
여기는 호출될까?
test1 입니다.test2도 포함됩니다.
```

보다시피 next()밑에 있는 코드까지 읽어지게 된다.
이러한 로직은 2개의 리턴을 넘기게 되거나, 다른 오류를 불러올 수 있다. 

그렇다면 next() 밑에 코드가 존재한다면 어떻게 작성해야 안전할까?

정답은 간단하다.

```javascript
//test1.js
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  req.test = "test1 입니다.";
  return next();
  console.log('여기는 호출될까?');
});
```
위와 같이 return next()를 부르게 된다면 아래에 있는 코드는 읽지 않고 바로 리턴하게 된다. 


참고자료 https://kamang-it.tistory.com/624
