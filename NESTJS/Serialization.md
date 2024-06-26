## Serialization(직렬화)란?

직렬화는 시스템 내부에서 사용하는 데이터 또는 객체를 바이트로 변환해 외부 시스템에서도 사용할 수 있도록 변환하는 과정이다.

Nest.js 프로젝트에서는 `ClassSerializerInterceptor` `Interceptors`을 사용해서 직렬화 할 수 있다.
즉 JSON.stringify을 굳이 사용할 필요가 없다.

`ClassSerializerInterceptor`는 응답 객체를 가로채 엔터티 또는 DTO에 붙은 class-transformer의 데코레이터를 인식하고 그에 맞춰 응답 객체를 변형하는 인터셉터이다.

`@Exclude`을 사용한다면 Response에서 원하는 데이터를 제외하고 반환할 수 있다.

```ts
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;
}
```

하지만 Exclude을 사용하여 클래스에 명시하는 방법은 User 클래스를 사용하는 전체 라우터에 영향을 주기 때문에 유연한 대응에 어려움이 있을 수 있다.

이러한 상황에서는 `ClassSerializerInterceptor` 보다 커스텀 `interceptor`을 사용하는게 유연한 대응을 할 수 있을 것이다.
