## GROUP BY, HAVING 
> 조건에 따라 그룹화하여 집계를 내거나(GROUP BY), 그룹화 내에 특정 조건으로 추출하고 싶을 때 (HAVING)사용

### 2. GROUP BY 와 함께 사용되는 집계함수
- COUNT: 총 갯수
- COUNT(DISTINCT): 중복없이 총 갯수
- SUM: 합계
- AVG: 평균
- MAX: 최대
- MIN: 최소

다음 sql문은 유저의 아파트 별로 그룹을 짓는 코드이다. 이 코드는 정상적인 코드일까? 정답은 `틀렸다`.
```sql
SELECT USER.아파트,USER.이름
 FROM USER
 GROUP BY USER.아파트;
```

그룹바이를 사용할 때 가장 많이 발생하는 실수다. 그룹바이로 묶은 컬럼 이외의 컬럼을 조회할 때는 항상 집계합수를 사용해야 한다.

