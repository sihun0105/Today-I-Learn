Go 메서드는 특별한 형태의 func 함수이다. 메서드는 함수 정의에서 func 키워드와 함수명 사이에 "그 함수가 어떤 struct를 위한 메서드인지"를 표시하게 된다.
```go
package main
 
//Rect - struct 정의
type Rect struct {
    width, height int
}
 
//Rect의 area() 메소드
func (r Rect) area() int {
    return r.width * r.height   
}
 
func main() {
    rect := Rect{10, 20}
    area := rect.area() //메서드 호출
    println(area)
}
```