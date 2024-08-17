## 속성

ServerRoot: 아파치 Root홈 경로이며, 절대경로로 지정해야 한다.
Listen: 웹서버 포트이며, 여러포트 지정시 Listen 지시자를 여러번 입력 한다.
Include : httpd.conf 이외의 설정파일을 포함시킨다.
ServerAdmin : 오류 발생시 클라이언트가 확인하는 관리자 이메일을 표기한다.
ServerName: 서버의 도메인을 입력한다. DNS주소가 입력되지 않았다면 ip를 표기한다.
DocumentRoot: 웹 페이지의 경로를 입력하며, 마지막 경로엔 '/' 를 지정하지 않는다.
*<Directory>* : 각 디렉터리의 고유한 설정을 하기 위한 블록이다. 

```bash
<Directory {디렉터리 명}>
    [Options]
    [AllowOverride]
    [Require]
    ...
</Directory>
```