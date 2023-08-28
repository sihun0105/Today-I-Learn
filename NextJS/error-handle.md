## Error-handling

Next.js에서는 파일규칙을 사용하여 error.js에서 런타임 오류를 적절하게 처리할 수 있다.
(tip : 가장 가까운 구조에 있는 error.js를 활용하여 처리하게 된다.)

- 세분성을 조정하기 위해 파일 시스템 계층 구조를 사용하여 특정 세그먼트에 맞는 오류 UI를 만듭니다.
- 나머지 애플리케이션 기능을 유지하면서 영향을 받은 세그먼트에 대한 오류를 격리합니다.
- 전체 페이지를 다시 로드하지 않고 오류 복구를 시도하는 기능을 추가합니다.
  error.js경로 세그먼트 내부에 파일을 추가하고 React 구성 요소를 내보내 오류 UI를 만듭니다 .

```typescript
"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
```

### 오류복구

오류 구성 요소는 이 reset()기능을 사용하여 사용자에게 오류 복구를 시도하라는 메시지를 표시할 수 있습니다.
실행되면 함수는 오류 경계의 내용을 다시 렌더링하려고 시도합니다.
성공하면 대체 오류 구성요소가 다시 렌더링된 결과로 대체됩니다.

```typescript
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```
