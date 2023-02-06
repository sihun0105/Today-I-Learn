## MySQL의 엔진
MySQL은 크게 서버 엔진과 스토리지 엔진 두 가지 구조로 되어있다.

- 서버 엔진
클라이언트가 Query 요청 시, 쿼리 파싱과 스토리지 엔진 데이터를 용청하는 작업을 수행한다.
- 스토리지 엔진
물리적 저장장치에서 데이터를 읽어온다.


### InnoDB
- mysql 5.5버전 이후 기본값인 엔진이다.
- 복잡하다
- default 스토리지 엔진이다.
- transaction-safe하고, 커밋과 롤백, 데이터 복구 기능을 제공한다.
- row-level locking을 제공 (외에도 다양한 종류의 lock이 있긴하다)
- 동시 처리에 효과적이나, deadlock이 발생할 수 있다. (참고 영상 : https://www.youtube.com/watch?v=FXzBRD3CPlQ&t=263s )
- clustered index에 저장하여 Primary Key 기반의 query의 I/O 비용을 줄인다.
- 외래키를 허용해 무결성을 보장.
- 단순 select 기능에서는 MyISAM에 비해 안좋은 성능을 보인다.

### Archive
- 로그 수집, 원시 로그 데이터 관리에 적합한 엔진
- 메모리 상에서 압축된 상태로 저장
- row-level locking이 가능
- 한번 insert된 데이터는 update나 delete가 불가능
- 인덱스 지원 안함
- 테이블 파티셔닝 지원
- 트랜잭션은 지원하지 않는다.
