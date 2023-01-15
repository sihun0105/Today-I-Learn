mysqldump를 사용해서 A서버 -> B서버 DB이동하는 방법.

### mysqldump명령어를 사용해 백업을 진행
```
mysqldump -u로그인 유저 -p'패스워드' 스키마(DB명) > 저장할파일명.sql
```

### mysql명령어를 통해 파일을 복원
```
mysql -u로그인 유저 -p'패스워드' 복원스키마(DB명) < 백업파일명.sql 
```


### 주의사항
복원할 서버에서 해당 스키마를 미리 만들어둬야함.