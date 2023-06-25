## Stateful vs Stateless

flutter 에서는 상태를 저장하는 Stateful 위젯과 상태를 저장하지 않는 Stateless 위젯이 있다.

**Stateful** 위젯을 상속받은 위젯은 위젯이 동작하는 동안 상태(Data)가 변경이 필요한 경우에 적합한 위젯이며,

**Stateless** 위젯을 상속받은 위젯은 화면이 로드될 때 1번 그려주기만 할 경우 사용기에 적합한 위젯이다.

정리하면 사용자와 상호작용이 필요한 경우는 Stateful위젯을 상속하여 재작하면 된다.
