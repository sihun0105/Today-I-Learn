## Guard란?

Nest.js의 Guard는 특정 라우트 핸들러가 실행되기 전에 실행되는 로직을 담당하는 컴포넌트입니다. Guard는 주로 인증과 권한 검사 등의 목적으로 사용됩니다.

Guard는 @CanActivate() 데코레이터와 함께 사용되며, canActivate() 메서드를 구현해야 합니다. 이 메서드는 boolean 또는 boolean을 반환하는 Promise 또는 Observable을 반환해야 합니다.

canActivate() 메서드가 true를 반환하면 해당 라우트 핸들러가 실행되고, false를 반환하면 라우트 핸들러는 실행되지 않습니다.
