BPF(Berkley packet filter)는 패킷 필터 기능만 하는 것이 아니라 generic하고 유연한 instruction set을 제공하여 단순한 필터 이상의 일들을 할 수 있습니다.
작성된 BPF 프로그램은 여러 hook point에서 안전하게 실행할 수 있습니다. 리눅스 커널의 많은 서브 시스템들은 BPF가 실행할 수 있는 hook point를 제공하며, 대표적으로 분야로 networking, tracing, security가 있습니다.

BPF는 바로 OS 커널 수준부터 전체 소프트웨어 스택에 걸쳐 노코드 관찰가능성을 구현할 수 있다.

BPF는 Kernel에 Sandbox 형태로 설치되어 Packet을 필터링, 즉 Packet에 대한 제어를 할 수 있습니다.

BPF는 Packet Filtering하고 분석하는데 주로 사용되며 BPF가 사용되는 대표적인 예는 tcpdump에서 사용하는 필터링으로 볼 수 있습니다.

기존의 iptables 규칙은 Service와 Pod가 증가하는 만큼 규칙의 수는 기하 급수적으로 증가하기 때문에 규칙에 일치할 때 까지 모든 규칙을 다 검사해야하는데 많은 시간이 소요 되는 만큼 지연이 발생합니다. 또한, iptables의 규칙 업데이트가 발생하면 전체 iptables의 규칙을 교체하는데 많은 시간이 소요됩니다.

BPF는 iptables를 사용하지 않고 BPF를 통해 Packet을 처리하여 앞에서 언급한 문제점을 제거할 수 있습니다.

XDP란?
XDP(eXpress Data Path)는 eBPF를 기반으로 한 기술로 eBPF 프로그램이 packet processing을 할 수 있도록 지원해준다.