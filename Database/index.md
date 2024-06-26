### 인덱스의 종류
1.클러스터형 인덱스(Clustered Index)
2.넌 클러스터형 인덱스(Nonclustered Index)

#### 클러스터 인덱스
- 테이블당 1개씩만 허용된다.
- 물리적으로 행을 재배열한다.
- PK설정 시 그 칼럼은 자동으로 클러스터드 인덱스가 만들어진다.
- 인덱스 자체의 리프 페이지가 곧 데이터이다. 즉 테이블 자체가 인덱스이다. (따로 인덱스 페이지를 만들지 않는다.)
- 데이터 입력, 수정, 삭제 시 항상 정렬 상태를 유지한다.
- 비 클러스형 인덱스보다 검색 속도는 더 빠르다. 하지만 데이터의 입력. 수정, 삭제는 느리다.
30% 이내에서 사용해야 좋은 선택도를 가진다.

#### 넌 클러스터 인덱스
- 테이블당 약 240개의 인덱스를 만들 수 있다.
- 인덱스 페이지는 로그파일에 저장된다.
- 레코드의 원본은 정렬되지 않고, 인덱스 페이지만 정렬된다.
- 인덱스 자체의 리프 페이지는 데이터가 아니라 데이터가 위치하는 포인터(RID)이기 때문에 클러스터형보다 검색 속도는 더 느리지만 데이터의 입력, 수정, 삭제는 더 빠르다.
- 인덱스를 생성할 때 데이터 페이지는 그냥 둔 상태에서 별도의 인덱스 페이지를 따로 만들기 때문에 용량을 더 차지한다
3% 이내에서 사용해야 좋은 선택도를 가진다.

클러스터 인덱스는 데이터 위치를 바로 알기 때문에 그 데이터로 바로 접근할 수 있고, 
넌 클러스터 인덱스는 인덱스 페이지를 한번 거쳐서 데이터에 접근하는 방식이다.