## declare

- 변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 알린다.
  **즉, JS 코드로는 컴파일 되지 않고, TypeScript 컴파일러에게 타입 정보를 알리기만 한다.**

- 타입의 경우 어차피 JS 코드로 컴파일 되지 않으므로 declare 키워드를 사용하지 않아도 된다.
  declare 블록 (declare namespace, declare module, declare global)
  앰비언트 컨텍스트(Ambient Context)로 정의되는 영역이다.
  이 영역 안에서는 declare 키워드가 기본으로 붙는다. 즉 굳이 또 붙여줄 필요가 없다.
