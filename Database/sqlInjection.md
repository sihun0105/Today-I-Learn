## SQL INJECTION이란?
SQL Injection이란 웹 해킹 기법중 하나로 웹서버가 데이터베이스로 쿼리를 사용해 접근할 때, 악의적으로 구문을 삽입하여 의도와 다르게 실행되도록 하는 공격방법이다.

### 방어방법은?

다음과 같은 예시 쿼리를 그냥 사용한다면 SQL INJECTION에 속수무책으로 당하게 된다.
```javascript
const sql = `SELECT * FROM users WHERE id= ${id}`;
```

#### 방법 1 - mysql escape함수 시용
> SQL Injection을 막기 위해서는 위의 코드처럼 사용자로 부터 입력받은 안전하지 않은 데이터는 connection.escape()를 통해 sql 구문을 생성하여야 합니다.
```javascript
const sql = `SELECT * FROM users WHERE id= ${connection.escape(id)}`;
```

#### 방법 2 - ? 문자
> escape함수대신에 ?문자를 사용할 수 있습니다. ?를 사용하면 위의 방법보다 더 간단하게 사용할 수 있습니다. 여기서 ?와 params 배열은 순서대로 매치 됩니다
```javascript
const sql = 'INSERT INTO users(id) VALUES(?)';
const params = [id, password];
conn.query(sql, params);
```