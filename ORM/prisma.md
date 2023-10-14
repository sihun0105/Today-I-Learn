## Waht Prisma?

차세대 Node.js와 TypeScript ORM다

- Prisma Client: Node.js와 Typescript를 위한 자동 생성과 안전한 타입 쿼리 빌더
- Prisma Migrate: 마이그레이션 시스템
- Prisma Studio: 데이터 베이스의 데이터를 보고 편집할 수 있는 GUI 편집기

## Why Prisma?

Prisma와 TypeORM은 같은 ORM이지만 추상화 수준이 다르게 작동 한다.

TypeORM은 보다 SQL에 가깝게 설계되어 있고, Prisma는 개발자의 작업을 염두해 더 높은 추상화 수준을 제공 한다.

그렇다고 Prisma로 raw query를 날리지 못한다는 것은 아니다. 필요에 따라 raw query또한 날릴수 있다.

또한 TypeORM의 최대 단점인 컴파일 환경에서 에러를 검출하지 못하고, 런타임 환경에서 에러가 발생하게 되는것을 막을 수 있다.
