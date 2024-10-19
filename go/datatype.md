DataType은 프로그램을 구성하는 가장 기본적인 메모리 구조에 대한 정의다. 
어떤 DataType을 선택하느냐에 따라서 최적화된 프로그래밍이 가능하다.

Go의 DataType은 크게 보았을 때 3가지 타입으로 나뉘어집니다.

- bool : boolean 값을 표현하는 Type으로 true 또는 false를 나타냅니다.
- numeric(숫자) : 숫자 값을 표현하는 Type 입니다. Integer Type, Floating Point Type, 그리고 Complex 타입을 나타냅니다.
- string(문자) : 문자열을 표현하는 Type 입니다.

rune : 유니코드(UTF-8)을 표현하는 타입
16 bit로 표현되는 UTF-16이 아닌, 8 bit로 표현되는 UTF-8 (8-bit Unicode Transformation Format) 인코딩 방식을 사용한다는 것을 주의한다.
유니코드 인코딩에서 한글은 3byte를 사용하고, 영어는 1byte를 사용하는 것을 주의한다.
유니코드는 한글을 지원하는 인코딩 방식이기 때문에, 한글을 사용하는 프로그램 개발에 유용하게 사용할 수 있다.
int

출처: https://caileb.tistory.com/199 [Joker:티스토리]