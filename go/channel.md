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

Go 채널은 2가지의 채널이 있는데, Unbuffered Channel과 Buffered Channel이 있다. 위의 예제에서의 Go 채널은 Unbuffered Channel로서 이 채널에서는 하나의 수신자가 데이타를 받을 때까지 송신자가 데이타를 보내는 채널에 묶여 있게 된다. 하지만, Buffered Channel을 사용하면 비록 수신자가 받을 준비가 되어 있지 않을 지라도 지정된 버퍼만큼 데이타를 보내고 계속 다른 일을 수행할 수 있다. 버퍼 채널은 make(chan type, N) 함수를 통해 생성되는데, 두번째 파라미터 N에 사용할 버퍼 갯수를 넣는다. 예를 들어, make(chan int, 10)은 10개의 정수형을 갖는 버퍼 채널을 만든다.
