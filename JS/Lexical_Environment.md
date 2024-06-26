## Lexical Environment
변수
자바스크립트에서는 실행 중인 함수, 코드 블록, 스크립트 전체는 렉시컬 환경이라는 내부 숨김 연관 객체를 갖는다. Lexical Environment(이하 렉시컬 환경)은 특정 코드가 선언/정의/작성된 환경을 의미하는 객체이다.
모든 코드 블록은 어떤 렉시컬 환경에 속해 있는지에 따라 이용가능한 변수가 달라진다. 다시 말해 어떤 변수나 함수의 값은, '어디에서 선언했는지', 즉 렉시컬 환경이 어디인지에 따라 결정된다.
다시 한번 말하지만, 렉시컬 환경은 객체이다. 렉시컬 환경 객체는 두 부분으로 구성된다.

## Environment Record (환경 레코드)
모든 지역 변수를 프로퍼티로 저장하고 있는 객체. this 값과 같은 기타 정보도 여기에 저장됨.
외부 렉시컬 환경에 대한 참조
외부 코드와 연관됨(?)
'변수'는 특수 내부 객체인 환경 레코드의 프로퍼티이다. 변수를 가져오거나 변경하는 것은 환경 레코드의 프로퍼티를 가져오거나 변경함을 의미한다.

스크립트 전체와 관련된 렉시컬 환경을 전역 렉시컬 환경(Global Lexical Environment)이라 한다. 각 렉시컬 환경은 외부와 내부 렉시컬 환경을 갖는다. 내 외부의 포함 관계를 확인하기 위해 내부 렉시컬 환경은 외부 렉시컬 환경에 대한 참조를 갖는다. 전역 렉시컬 환경의 경우, 외부 참조를 갖지 않기 때문에(최상위이기 때문에) 외부 참조가 null을 갖는다.