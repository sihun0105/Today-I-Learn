## github Actions 적용방법

### SSH

우선 외부서버에서 github의 private repo를 접근 할 수 있도록 ssh 키를 적용시켜줍니다.

1. 서버 터미널 접속 (예시 : ec2, navercloud 등)

2 ) 키를 만들어줍니다.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

나오는 질문은 Enter로 넘어가시면 됩니다!
( 비밀번호를 설정 하라는 내용으로 비밀번호는 필요하지 않습니다. 있어서도 안됩니다.)

```
cd ~/.ssh      키가 저장되는 default 장소
```

~~결과물로 공개키와 기본키를 얻을 수 있습니다.~~ 3) SSH 서버가 사용자의 공개키를 인식하도록 하기위해 **authorized_keys** 파일을 만들어줍니다.

```
nano authorized_keys
```

안에 내용으로는 키.pub의 값을 그대로 넣어줍니다.

권한을 부여합니다.

```
chmod 600 authorized_keys
```

4. gitHub접속 -> 프로필 -> Settings -> SSH and GPG keys -> New SSH key 클릭
   4-1) title 본인이 알기 쉽게 작성
   4-2) key 에는 키.pub값을 붙여넣기
   ~~4-3) key type은 Authentication Key로 그대로 둡니다.~~

여기까지가 ssh key를 등록하여 서버에서 github에 접근할 수 있도록 하는 방법입니다.

하지만 저는 ssh서버 세팅에 이슈가 있었습니다.
**여기서부터는 세팅이 미흡하신분들만!**

1. vi /etc/ssh/sshd_config을 사용하여 ssh서버의 세팅환경에 접근합니다.

제일 밑에 다음의 속성을 추가해줍니다.
다음의 내용은 key를 사용하여 ssh접근을 허용하도록 하는 코드입니다.

```
RSAAuthentication yes
PubkeyAuthentication yes
PermitRootLogin yes
StrictModes no
```

이제 정말 끝났습니다. 서버에 접속하여 gihub에 접근할 수 있는지 확인합니다.

1. 본인레퍼지토리 - code - clone -ssh 의 코드를 복사합니다.
2. 서버에 접속하여 ssh clone 실행

```
git clone git@github.com:yourname/yourRepo.git
```

**이제 깃허브 Actions을 통해 본인 서버에 접근할 수 있도록 되었습니다🎉**

저는 2번과정 ( 키 생성 ) 에서 큰 삽질을 겪었습니다 ㅠㅠ
RSA로 key를 생성할 시 ssh 접근을 할 수없습니다.
때문에 다음과 같은 오류를 볼 수 있었습니다..

또한 비밀번호를 설정해도 오류가 발생하니 주의 바랍니다!🚨

> 2023/09/21 09:15:17 ssh: handshake failed: ssh: unable to authenticate, attempted methods [none], no supported methods remain

> 2023/09/\*\*\* 01:57:35 ssh: handshake failed: ssh: unable to authenticate, attempted methods [none publickey], no supported methods remain
