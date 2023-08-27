## 동적 라우팅

동적 세그먼트는 폴더 이름을 대괄호로 묶어 생성할 수 있습니다 [folderName]. 예를 들어, [id]또는 [slug].

### 예시코드

```typescript
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
```

| 노선                    | 예시 URL | params        |
| ----------------------- | -------- | ------------- |
| app/blog/[slug]/page.js | /blog/a  | { slug: 'a' } |
| app/blog/[slug]/page.js | /blog/b  | { slug: 'b' } |
| app/blog/[slug]/page.js | /blog/c  | { slug: 'c' } |

## 포괄 세그먼트

대괄호 안에 줄임표를 추가하면 동적 세그먼트를 모든 후속 세그먼트 로 확장할 수 있습니다 [...folderName].

| 노선                       | 예시 URL    | params                  |
| -------------------------- | ----------- | ----------------------- |
| app/shop/[...slug]/page.js | /blog/a     | { slug: ['a'] }         |
| app/shop/[...slug]/page.js | /blog/a/b   | { slug: ['a','b'] }     |
| app/shop/[...slug]/page.js | /blog/a/b/c | { slug: ['a','b','c'] } |

## 선택적 포괄 세그먼트

이중 대괄호 안에 매개변수를 포함하여 포괄 세그먼트를 선택사항으로[[...folderName]] 만들 수 있습니다 .

| 노선                         | 예시 URL    | params                  |
| ---------------------------- | ----------- | ----------------------- |
| app/shop/[[...slug]]/page.js | /blog       | {}                      |
| app/shop/[[...slug]]/page.js | /blog/a     | { slug: ['a'] }         |
| app/shop/[[...slug]]/page.js | /blog/a/b   | { slug: ['a','b'] }     |
| app/shop/[[...slug]]/page.js | /blog/a/b/c | { slug: ['a','b','c'] } |
