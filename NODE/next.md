express에서 router를 작성하다 보면 콜백으로(req,res,err,next) 다양한 메서드를 사용한다. 그렇다면 next는 무슨역할을 해주는것일까?
express 공식문서에서는 next는 다음과 같이 정의했다.

> "next, indicating the next middleware function."

next는 다음미들웨어 기능을 나타낸다. 즉 현재 라우터에서 판단하지 않고 다음 라우터에서 처리하겠다는 의미다. 코드를 보면 더욱 쉽게 이해할 수 있다.

```javascript
//test1.js
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("test1");
  next();
});

module.exports = router;
```

```javascript
//test2.js
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("test2");
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
test1 # test1.js
test2 # test2.js
```

참고자료 https://kamang-it.tistory.com/624
