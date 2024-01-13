## GRPC란?

GRPC는 google 사에서 개발한 오픈소스 RPC(Remote Procedure Call) 프레임워크이다.

이전까지는 RPC 기능은 지원하지 않고, 메세지(JSON 등)을 Serialize할 수 있는 프레임워크인 PB(Protocol Buffer, 프로토콜 버퍼)만을 제공해왔는데, PB 기반 Serizlaizer에 HTTP/2를 결합하여 RPC 프레임워크를 탄생시켰다.
