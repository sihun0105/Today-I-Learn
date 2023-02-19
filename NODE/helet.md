## helmet이란?
helmet 모듈은 서버에서 다양한 HTTP 헤더를 자동 설정을 통해 서버 어플리케이션의 보안을 강화해주는 대표적인 노드 보안 모듈이다
***(헤더에 안전모를 씌운다고 생각하자)***

```
npm install helmet # 헬멧 설치
```


### 사용방법 
```javascript
// 기본 설정 기능 사용
app.use(helmet());

// or

// 특정 세부 기능 하나하나 설정할때 사용
app.use(helmet.contentSecurityPolicy());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
```