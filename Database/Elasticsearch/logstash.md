### 검색과정
검색 기능은 다음과 같은 과정을 거친다.
1 - logstash를 활용한 실시간 파이프라인을 구성하고, elasticsearch에 인덱싱 과정
2- elasticsearch 인덱스 기반으로 데이터 검색

### Logstash란?
Logstash : input,filter,ourter로 구성되며 실시간 파이프라인 기능을 가진 오픈소스 데이터 수집


### filter
mutate 필터를 사용하면 필드에서 일반 변형을 수행할 수 있습니다. 이벤트에서 필드의 이름을 바꾸고 바꾸고 수정할 수 있습니다.
```bash
filter {
    mutate {
        split => { "hostname" => "." }
        add_field => { "shortHostname" => "%{[hostname][0]}" }
    }

    mutate {
        rename => {"shortHostname" => "hostname"}
    }
}
```