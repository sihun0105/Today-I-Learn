## express-mysql-rawquery

평소 orm만 사용하던탓에 rawquery를 날리는걸 까먹어서 다시 정리해보기위해 글을 작성한다.

## 1.node프로젝트 생성

우선 프로젝트 기본 틀을 잡아보자

```
npm init -y //선택사항 전부 yes
```

```
npm i express dotenv mysql2 mysql // 필요한 모듈 설치
```

```javascript
///index.js
const express = require("express"); // express서버를 띄우기 위함
const dotenv = require("dotenv"); // .env파일을 통한 환경변수 관리
const mysql = require("mysql2"); // mysql접속을 위함

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "DBname",
});

const app = express();
connection.connect();
dotenv.config();
app.set("port", process.env.PORT || 8000);

//localhast:8000/ 접속시 쿼리 실행 -> 콜백을 실행함.
app.get("/", (req, res) => {
  connection.query("SELECT * FROM users", function (error, results) {
    if (error) throw error;
    console.log("The solution is : ", results);
    res.send(results);
  });
});
//대기중인 포트 콘솔에 출력
app.listen(app.get("port"), () => {
  console.log(app.get("port"));
});
```

```
node index.js // 실행 gogogo
```

localhost:8000에 접속하면 쿼리를 날린 값을 담은 results를 출력하는 것을 볼 수 있다.
