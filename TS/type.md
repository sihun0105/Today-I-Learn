Exclude<Type, ExcludedUnion>
ExcludedUnion에 할당할 수 있는 모든 유니온 멤버를 Type에서 제외하여 타입을 생성합니다.

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">;
type T0 = "b" | "c";

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
type T1 = "c";

type T2 = Exclude<string | number | (() => void), Function>;
type T2 = string | number;
```

Extract<Type, Union>
Union에 할당할 수 있는 모든 유니온 멤버를 Type에서 가져와서 타입을 생성합니다.

```typescript
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
type T0 = "a";

type T1 = Extract<string | number | (() => void), Function>;
type T1 = () => void;
```

ReturnType<Type>
함수 Type의 반환 타입으로 구성된 타입을 생성합니다.

```typescript
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
type T0 = string;

type T1 = ReturnType<(s: string) => void>;
type T1 = void;

type T2 = ReturnType<<T>() => T>;
type T2 = unknown;

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
type T3 = number[];

type T4 = ReturnType<typeof f1>;
type T4 = {
  a: number;
  b: string;
};

type T5 = ReturnType<any>;
type T5 = any;

type T6 = ReturnType<never>;
type T6 = never;

type T7 = ReturnType<string>;
//Type 'string' does not satisfy the constraint '(...args: any) => any'.
type T7 = any;
type T8 = ReturnType<Function>;
//Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//Type 'Function' provides no match for the signature '(...args: any): any'.
type T8 = any;
```

InstanceType<Type>
Type의 생성자 함수의 인스턴스 타입으로 구성된 타입을 생성합니다.

```typescript
class C {
  x = 0;
  y = 0;
}
 
type T0 = InstanceType<typeof C>;
type T0 = C

type T1 = InstanceType<any>;
type T1 = any

type T2 = InstanceType<never>;
type T2 = never

type T3 = InstanceType<string>;
//Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
type T3 = any
type T4 = InstanceType<Function>;
Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
//Type 'Function' provides no match for the signature 'new (...args: any): any'.
```

NonNullable<Type>
Type에서 null과 정의되지 않은 것(undefined)을 제외하고 타입을 생성합니다.
```typescript
type T0 = NonNullable<string | number | undefined>;
//type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
     
//type T1 = string[]
```

Partial<Type>
Type 집합의 모든 프로퍼티를 선택적으로 타입을 생성합니다. 이 유틸리티는 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환합니다.
```typescript
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```
