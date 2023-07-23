##NEST.js란?
Nest(NestJS)는 효율적이고 확장 가능한 Node.js 서버 측 애플리케이션을 구축하기 위한 프레임워크입니다.

기존 node.js프로젝트 아키텍쳐는 개인마다 다양한 방식으로 개발을 진행하게 되었습니다.
node.js의 아키텍쳐를 제공하는 프레임워크가 바로 Nest.js입니다. 코드를 살펴보면 Angular의 아키텍쳐와 매우 유사하다는 느낌을 받을 수 있습니다.

```
//소스코드 구성
app.controller.spec.ts
app.controller.ts
app.module.ts
app.service.ts
main.ts
```

> app.controller.ts : 단일 경로가 있는 기본 컨트롤러.

> app.controller.spec.ts : 컨트롤러에 대한 단위 테스트입니다.

> app.module.ts : 응용 프로그램의 루트 모듈입니다.

> app.service.ts : 단일 메서드를 사용하는 기본 서비스입니다.

> main.ts : NestFactory핵심 기능을 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 엔트리 파일입니다 .

즉
controller.ts는 경로를 제공하고,
service.ts는 비즈니스 로직을 처리합니다.
module.ts를 통해 controller을 공급하게 됩니다.

이러한 아키택쳐패턴을 제공함으로서, 통일성있는 코드를 만들어 낼 수 있고, 확장성과, 유지보수면에서 좋은 효과를 낼 수 있습니다.
