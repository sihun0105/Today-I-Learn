## Monstache는 무엇인가?
Monstache란. Monstache는 MongoDB 컬렉션들을 Elasticsearch로 지속적으로 색인하는 Go언어로 개발된 sync 데몬이다. 
즉 mongoDB 파이프라인을 위해 만들어 졌다.내가 원하는 기능을 손쉽게 구현할 수 있다.

하지만 여기서 새로운 문제를 만나게된다.

Monstache를 사용하기 위해선 Mongodb replica set을 사용해야 한다.

### Mongodb replica set이란?
데이터베이스의 고가용성 환경을 위해 필요한 기술이다. DB 노드의 장애가 발생하거나, DB에 문제가 발생하는 경우에도 빠르게 장애에 대응하여 복구하는 시간을 줄일수 있는 장점을 갖게 한다.

쉽게 설명하면 1개의 데이터베이스에 대하여 3개의 데이터베이스 복사본이 존재하며, 데이터베이스에 문제가 생겼을 때, 기존 복사본이 대채되게 된다.

replica set의 구성은 다음과 같다.
- Primary: 클라이언트에서 DB로 읽기 및 쓰기 작업을 한다.
- Secondary: 프라이머리로부터 데이터를 동기화 한다.
- Arbiter: 데이터를 동기화하지는 않으며 레플리카 셋의 복구를 돕는 역할을 한다.

replica set을 만드는 법은 다음과 같다.
1. 
```bash
mongo //mongo 접속
```
2. 
```bash
use admin
```
3. 
```bash
rs.initiate( {
   _id : "rs0",
   members: [
      { _id: 0, host: "mongodb01:27017" },
      { _id: 1, host: "mongodb02:27018" },
      { _id: 2, host: "mongodb03:27019" }
   ]
})
```
4.
```bash
rs.conf() // 생성된 replica set 확인
```

여기서 주의할 점은 host의 이름 혹은 포트가 달라야한다.

이제 mongo replica set 3개를 전부 실행 시킨다.(해당 포트를 전부 열어줘야한다.)
```bash
mongod --port 27017 --dbpath /var/lib/mongodb/rs1 --replSet rs0 --fork --bind_ip 0.0.0.0 --auth --keyFile /opt/mongokey/keyfile --logpath /var/log/mongodb/mongod.log
```
```bash
mongod --port 27018 --dbpath /var/lib/mongodb/rs2 --replSet rs0 --fork --bind_ip 0.0.0.0 --auth --keyFile /opt/mongokey/keyfile --logpath /var/log/mongodb/mongod.log
```
```bash
mongod --port 27019 --dbpath /var/lib/mongodb/rs3 --replSet rs0 --fork --bind_ip 0.0.0.0 --auth --keyFile /opt/mongokey/keyfile --logpath /var/log/mongodb/mongod.log
```

### 명령어를 사용하기 전
**/var/lib/mongodb/rs1** mkdir명령어를 사용해 폴더를 만들어줘야한다. 없을시 오류가 발생한다.

**/opt/mongokey/keyfile** 특정 유저만 접근하기 위해서는(mongodb://유저이름:비밀번호@123.123.123.123:27017/ 같이 접근이 필요할 때)키 파일을 만들어줘야 한다. 
1.  ```sudo openssl rand -base64 756 > /opt/mongokey/keyfile```
2. ```sudo chmod 400 /opt/mongokey/keyfile```
3.```security:
  authorization: enabled
  keyFile: /opt/mongokey/keyfile```

이제 replica set 설정은 끝이 났다.

### monstache 실행하기.
1.https://github.com/rwynn/monstache/releases 여기서 원하는 버전을 다운받고 압축을 풀어준다.
2.압축푼 폴더의 본인 os에 맞는 파일을 원하는 위치로 monstache파일을 이동시킨다.
3.monstache.conf 파일을 만들고 다음과 같이 작성한다.
```bash
# connect to MongoDB using the following URL
mongo-url = "MongoDB url"
# connect to the Elasticsearch REST API at the following node URLs
elasticsearch-urls = ["ElasticSearch Url들"]

# frequently required settings

# if you need to seed an index from a collection and not just listen and sync changes events
# you can copy entire collections or views from MongoDB to Elasticsearch
direct-read-namespaces = ["연결할 콜렉션(db.collection 형태로 입력해야 함)"]

# to listen to an entire db use only the database name.  For a deployment use an empty string.
change-stream-namespaces = ["추적할 콜렉션(db.collection 형태로 입력해야 함)"]

# compress requests to Elasticsearch
gzip = true
# generate indexing statistics
stats = true
# index statistics into Elasticsearch
index-stats = true

# use 4 go routines concurrently pushing documents to Elasticsearch
elasticsearch-max-conns = 4 

# propogate dropped collections in MongoDB as index deletes in Elasticsearch
dropped-collections = true
# propogate dropped databases in MongoDB as index deletes in Elasticsearch
dropped-databases = true

# in Elasticsearch with a newer version. Elasticsearch is preventing the old docs from overwriting new ones.
replay = false
# resume processing from a timestamp saved in a previous run
resume = true
# do not validate that progress timestamps have been saved
resume-write-unsafe = false
# override the name under which resume state is saved
resume-name = "default"
# use a custom resume strategy (tokens) instead of the default strategy (timestamps)
# tokens work with MongoDB API 3.6+ while timestamps work only with MongoDB API 4.0+
resume-strategy = 1
# turn on indexing of GridFS file content
index-files = true
# turn on search result highlighting of GridFS content
file-highlighting = true
# print detailed information including request traces
verbose = true
```
4.```./monstache -f monstache.toml``` 명령을 사용해 실행시킨다.
5. 끝


### soft delete 옵션
[[script]]
namespace = "db.collection"
script = """
module.exports = function(doc) {
    if (!!doc.deletedAt) {
        return false;
    }
    return true;
}
"""
