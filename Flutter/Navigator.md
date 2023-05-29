## 1. Navigator.push()로 화면 전환
전달할 데이터가 없는 경우에는 Navigator.push() 메소드를 통해 화면전환을 할 수 있습니다.

Navigator.push()에 전환할 페이지를 MaterialPageRoute()에 넣어주면 됩니다.

> Navigator.push(context, MaterialPageRoute(builder: (context) => FirstScreen()));

```dart
//main.dart
import 'package:flutter/material.dart';
import 'package:flutter_widgets/screen/button_above_keyboard.dart';
import 'package:flutter_widgets/screen/first_screen.dart';
import 'package:flutter_widgets/screen/second_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Widgets',
      theme: ThemeData(
          primaryColor: Colors.blue,
          brightness: Brightness.dark),
      home: new HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title: Text("Flutter Widgets"),
      ),
      body: Container(
        child: Column(
          children: [
            Expanded(
              child: ListView(
                children: [
                  ListTile(
                    title: Text('FirstScreen'),
                    onTap: () {
                      // 화면전환(데이터 전달x)
                      Navigator.push(context, MaterialPageRoute(builder: (context) => FirstScreen())); 
                    },
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
```

```dart
import 'package:flutter/material.dart';
import 'package:flutter_widgets/text_style.dart';

class FirstScreen extends StatefulWidget {
  @override
  _FirstScreenState createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'FirstScreen',
          style: kNotoSansMedium16.copyWith(color: Colors.white),
        ),
      ),
    );
  }
}
```