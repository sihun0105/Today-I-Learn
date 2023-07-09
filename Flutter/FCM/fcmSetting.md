## FCM 플러그인 설치

1. flutter pub add firebase_messaging
2. flutter run

## 등록 토큰 액세스

특정 기기로 메시지를 보내려면 기기의 등록 토큰을 알아야 합니다. 알림 콘솔의 필드에 토큰을 입력해야 이 튜토리얼을 마칠 수 있으므로 토큰을 검색한 후 복사하거나 안전하게 저장해야 합니다.

```
final fcmToken = await FirebaseMessaging.instance.getToken();
```

### iOS

다음과 같이 iOS에서 메타데이터 값을 Info.plist에 추가합니다.

> FirebaseMessagingAutoInitEnabled = NO

### Android

Android에서는 다음 메타데이터 값을 AndroidManifest.xml에 추가하여 애널리틱스 수집과 FCM 자동 초기화를 중지합니다(둘 다 중지해야 함).

```
<meta-data
    android:name="firebase_messaging_auto_init_enabled"
    android:value="false" />
<meta-data
    android:name="firebase_analytics_collection_enabled"
    android:value="false" />
```
