## 소켓이란?

IPC기법중의 하나로 OSI 7 Layer구조의 `응용계층(L7`에서
`전송 계층(L4)` 의 TCP 또는 UDP를 이용하기 위한 수단이다.

목적지와의 통신이 내부에서 이루어지는 것이 아닌 온라인 범위에서 이루어지기 떄문에 네트워크간의 통신으로 생각 할 수 있지만, **로컬 PC와 원격 PC의 프로세스가 IPC통신을 하는것 이다.**

소켓을 이용한다면 통신 과정을 직접 개발자가 구현을 하게 되는데, 이것은 서비스가 고도화 될 수록 엄청난 양의 데이터가 돌아다니게 된다. 따라서 data 의 formatting또한 복잡해 지게 된다.

## RPC란?

이러한 소켓의 한계 속에서 RPC(Remote Procedure Call)라는 기술이 등장하게 된다.

이름 그대로 네트워크로 연결된 서버 상의 프로시저(메서드)를 원격으로 호출할 수 있는 기능이다.

IDL(Interface Definication Language) 기반으로 다양한 언어를 가진 환경에서도 쉽게 확장이 가능하다.

> RPC의 핵심 기능은 **스텁**이다.
> 서버와 클라이언트는 서로 다른 주소 공간을 사용 하므로, 함수 호출에 사용된 매개 변수를 꼭 변환해줘야 한다. 안그러면 메모리 매개 변수에 대한 포인터가 다른 데이터를 가리키게 될 수 있다. 이 변환을 담당하는 것이 **스텁**이다.

![RPC](../../source/RPC.jpeg)

|    스텁     |                                                        특징                                                         |
| :---------: | :-----------------------------------------------------------------------------------------------------------------: |
| client stub | **함수에서 호출에 사용된 파라미터의 변환(Marshalling, 마샬링)** 및 함수 실행 후 서버에서 전달 된 결과를 변환을 담당 |
| server stub |          **클라이언트가 전달한 매개 변수의 역변환(Unmarshalling, 언마샬링)** 및 함수 실행 결과 변환을 담당          |

## GRPC란?

GRPC는 google 사에서 개발한 오픈소스 RPC(Remote Procedure Call) 프레임워크이다.

이전까지는 RPC 기능은 지원하지 않고, 메세지(JSON 등)을 Serialize할 수 있는 프레임워크인 PB(Protocol Buffer, 프로토콜 버퍼)만을 제공해왔는데, PB 기반 Serizlaizer에 HTTP/2를 결합하여 RPC 프레임워크를 탄생시켰다.
