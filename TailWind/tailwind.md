## TailwindCss
Tailwind CSS는 ‘utility-first’라는 목적 하에 만들어진 CSS 프레임워크이다. 별도의 CSS 파일이나 style 태그를 사용하지 않고 HTML의 class 속성에 입력되는 내용에 따라 스타일링이 적용되기 때문에 굉장히 간단하고 직관적으로 코드를 작성할 수 있다.

### 장점

- HTML의 class 속성에 직접 입력되기 때문에 별도의 CSS 파일을 생성하여 임포트 하지 않아도 된다.
- 작성해야 하는 코드의 길이가 확연하게 짧아진다.
- 반응형 스타일링을 적용하기 용이하다.
- 클래스 이름에 대해 고민하거나 중복을 걱정할 일이 없다.


### 단점

- HTML 코드가 지저분해진다.
- class 속성에 작성하는 코드들이 각각 어떤 동작을 하는지 익혀야 하고, 그 코드들의 이름을 외워야 하기 때문에 이 모든 것을 익히려면 시간이 오래 걸린다.
- CSS에 익숙하지 않다면 각 코드들의 동작 방식을 이해하기 힘들다.
- 완성형 컴포넌트가 다른 프레임워크들에 비해 적기 때문에 사용자가 대부분 직접 만들어야 한다.
- CDN 사용 시 웹팩과 컴파일러를 통한 최적화가 이루어지지 않을 경우 기본적인 CSS 파일의 크기가 무거워진다
