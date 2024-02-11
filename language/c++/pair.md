### Pair

Pair 클래스는 사용자가 지정한 2개의 타입의 데이터를 저장하는데 사용.

#### pair 클래스의 형태

```c++
template <class T1, class T2> struct pair;
T1, T2는 아래와 같이 접근을 합니다.
T1 : firstT2 : second
```

```c++
#include<iostream>
#include<vector>

using namespace std;

pair<int, double> p;

int main()
{
	p.first = 1; //pair의 첫번째 인자에 접근
    p.second = 2.1; //pair의 두번째 인자에 접근

    cout<<"first value: "<<p.first<<endl;
    cout<<"second value: "<<p.second<<endl;

    return 0;
}

```

```
first value: 1
second value: : 2.1
```
