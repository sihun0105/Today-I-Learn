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

### Memory 엔진
메모리에 데이터를 저장하는 엔진이며 Transaction을 지원하지 않고 table-level locking을 사용한다.

메모리를 사용하기 때문에 기본적으로 속도가 아주 빠른 편이지만 데이터를 읽어버릴 위험이 있다. 그렇기 때문에 중요하지 않지만 빠른 처리가 필요한 임시 테이블로 많이 사용하는 편이다. 메모리 테이블의 모든 데이터는 메모리 안에 저장되므로 쿼리가 디스크 입출력을 기다릴 필요가 없다.

HEAP 테이블이라 불리던 메모리 테이블은 불변하는 데이터나 재시작 이후 지속되지 않는 데이터에 빠르게 접근하는 데 유용하다. 메모리 테이블의 테이블 구조는 서버가 재시작해도 지속되지만 데이터는 지속되지 않는다.