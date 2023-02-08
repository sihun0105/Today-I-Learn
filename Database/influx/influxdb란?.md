### influx란

influxdb란 Go언어로 작성된 시계열 데이터베이스다. 

### influx 왜 사용하는걸까?

**장점**
- 많은 쓰기 작업과 쿼리 부하를 처리하기 위해 2013년에 Go 언어로 개발된 오픈소스 TSDB
- Tick Stack의 필수 컴포넌트 중 하나
- 가장 유명하고, 많이 사용되는 TSDB
- Distributed, Scale horizontally하게 설계되어 scale-out이 쉬우며, Restful API를 제공하고 있어 API 통신이 가능

### 용어와 개념
알기 쉽도록 익숙한 RDB의 용어와 비교합니다.

- RDB	
database - database	
table - table	
column - column	
PK or indexed column - PK or indexed column
unindexed column - unindexed column	
SET of index entries - SET of index entries	
---
- InfluxDB
database - database
table - measurement
column - key
PK or indexed column - tag key (only string)
unindexed column - field key
SET of index entries - series