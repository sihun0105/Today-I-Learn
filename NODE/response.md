## res.send vs res.json

node에서 express프레임워크를 사용할 때 req-res를 사용하여 데이터를 주고 받는다.

express를 공부하다가 궁금한 점이 생겼다.

- A코드에선 res.send()를 사용하여 응답을 보낸다.
- B코드에선 res.json()을 사용하여 응답을 보낸다.

그렇다면 res.send()와 res.json()은 같은 처리를하고 혼용하여 사용해도 되는것일까? 결론은 send와 json 은 크게 다르지 않다.

send의 경우 res.send(Object)를 실행했을 때 다음과 같은 동작을 수행한다.
1 res.send(object)
2 res.json(object)
3 res.send(string)

json의 경우 res.json(Object)를 실행했을 때 다음과 같은 동작을 수행한다.
res.json(object)
res.send(string)

### 결론

JSON과 같이 Object를 내려보낼 때는 res.json을 사용하자
