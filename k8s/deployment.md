#### 디플로이먼트 yaml작성법

```
apiVersion:
kind:
metadata:
    name: #디플로이먼트 이름
spec:
    selector: #셀렉터 설정
        machLabels: #셀렉터가 선택할 관리 대상 레이블
replicas: #레플리카 설정
template: #파드의 정보
    metadata: #파드의 메타데이터
    spec: #파드의 스펙
```
