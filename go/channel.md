### channel?

- Go 채널은 그 채널을 통하여 데이타를 주고 받는 통로
- 채널은 make() 함수를 통해 미리 생성되어야 하며, 채널 연산자 `<-` 을 통해 데이타를 보내고 받는다.
- 상대편이 준비될 때까지 채널에서 대기함으로써 별도의 lock을 걸지 않고 데이타를 동기화하는데 사용된다.

```go
package main

import "fmt"

func main() {
exampleChannel := make(chan bool)
go func() {
        for i := 0; i < 10; i++ {
            fmt.Println(i)
        }
        exampleChannel <- true
    }()
    // 위의 Go루틴이 끝날 때까지 대기
    <-exampleChannel
}
```

Go 채널은 수신자와 송신자가 서로를 기다리는 속성때문에, 이를 이용하여 (다음 예제와 같이) Go루틴이 끝날 때까지 기다리는 기능을 구현할 수 있다.

exampleChannel채널에 true를 보내면, 수신자 메인루틴은 이를 받고 프로그램을 끝내게 만들 수 있다.
