# nil ?

Go에서는 주로 포인터, 인터페이스, 슬라이스, 맵, 채널과 같은 참조 타입에 대해 사용됩니다. 값 타입인 정수, 부동소수점, 불리언, 문자열 등은 nil을 가질 수 없다.

```go
var p *int = nil // p는 아무런 주소도 가리키지 않습니다.
var s []int = nil // s는 nil 슬라이스입니다.
var m map[string]int = nil // m은 nil 맵입니다.
var c chan int = nil // c는 nil 채널입니다.
var i interface{} = nil // i는 nil 인터페이스입니다.
```
