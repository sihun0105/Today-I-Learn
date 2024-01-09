# 스탭 다운

Replica set 에서 Primary 가 보이지 않으면 다른 Secondary 멤버들은 모두 자신의 레플리카 셋에 프라이머리 멤버가 없다고 판단하게 됩니다. 레플리카 셋 설정된 electionTimeoutMillis 내에 응답이 없다면 레플리카 셋의 각 멤버는 현재 Primary가 없어졌다고 판단하여 새로운 Primary 선출을 위한 투표를 시작하게 됩니다.

이렇게 장애나 문제 등에 의해서 프라이머리가 없어지는 상황뿐만 아니라 다음의 명령을 통해서 관리자가 의도적으로 프라이머리를 세컨더리로 내리는(Step Down) 작업도 할 수 있습니다. 다음의 명령어 두개는 MongoDB 관리 작업을 위해서 프라이머리를 세컨더리로 전환하기 위해서 사용할 수 있게 됩니다.

```
rs.stepDown(stepDownSecs, secondaryCatchUpPeriodSecs)
```
