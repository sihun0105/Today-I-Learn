## Dynamic-modules?

네스트 모듈 시스템에는 동적 모듈이라는 강력한 기능이 포함되어 있습니다. 이 기능을 사용하면 공급자를 동적으로 등록하고 구성할 수 있는 맞춤형 모듈을 쉽게 만들 수 있습니다.

## example

```typescript
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === "production"
          ? ".env.production"
          : ".env.development",
    }),
  ],
})
export class AppModule {}
```
