### TRANSACTION이란?
정의 : 트랜잭션(Transaction) 이란, 데이터베이스의 상태를 변경시키기 위해 수행하는 작업 단위이다.

하나의 커넥션을 활용해 데이터베이스에 여러 요청을 보낼 수 있으며, 커밋과 롤백을 활용하기 떄문에 데이터 불일치를 해결할 수 있다.

트랜잭션은 상황에따라 Commit (저장) 되거나 Rollback (철회)할 수 있다.

### 트랜잭션 예제 코드
```javascript
(async function(){
const pool = mysql.createPool({
  host     : '111.111.111.111',
  user     : 'root',
  password : 'root',
  port     : 1234,
  database : 'root',
  connectionLimit: 5,
});

const conn = await pool.getConnection(async conn => conn);
conn.beginTransaction() //커넥션시작
try{
await conn.query('insert into ~~');
await conn.query('update set ~~');
conn.commit() // 성공시 저장
}
catch{
conn.rollback() // 실패시 롤백
}finally{
conn.release() // 커넥션 반납
}
})
```

커넥션이 제공하는 기능
>conn.beginTransaction() //커넥션시작
conn.commit() // 저장
conn.rollback() // 철회
conn.release() // 커넥션 반납


### TRANSACTION특징
트랜잭션에는 4가지의 특징이 존재한다.
- 원자성
- 일관성
- 독립성
- 지속성

