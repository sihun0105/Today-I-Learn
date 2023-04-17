## Elasticsearch란?
Elasticsearch는 Apache Lucene(아파치 루씬) 기반의 java 오픈소스 분산 검색 엔진이다.
따라서 JVM환경에서 실행된다. 
Elasticsearch는 방대한 양의 데이터를 신속하고 거의 실시간으로 저장,검색,분석할 수 있다.

## 인덱스란?

Elasticsearch 인덱스는 서로 관련되어 있는 문서들의 모음이다. 쉽게 생각하면 RDBMS의 테이블로 생각하자.
Elasticsearch는 JSON 문서로 데이터를 저장한다. 각 문서는 일련의 키(필드나 속성의 이름)와 그에 해당하는 값(문자열, 숫자, 부울, 날짜, 값의 배열, 지리적 위치 또는 기타 데이터 유형)을 서로 연결한다.

그렇다 Elasticsearch는 인덱스에 있는 데이터를 기반으로 검색을 효율적으로 할 수 있게 해준다.
하지만 데이터는 ES에 저장하지 않고, 몽고, Mysql등 다른 공간에 저장한다. 이떄 사용하는 것이 Logstash다. 

Logstash는 데이터 처리 파이프라인으로, 데이터를 수집하고, 이를 강화하고 변환한 다음, Elasticsearch에서 색인되도록 할 수 있다.
