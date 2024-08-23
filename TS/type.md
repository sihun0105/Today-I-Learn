Exclude<Type, ExcludedUnion>
ExcludedUnion에 할당할 수 있는 모든 유니온 멤버를 Type에서 제외하여 타입을 생성합니다.

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">;
     
type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
     
type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
     
type T2 = string | number
```