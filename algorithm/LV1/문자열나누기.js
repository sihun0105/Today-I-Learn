//https://school.programmers.co.kr/learn/courses/30/lessons/140108
function solution(s) {
  var answer = 0;

  test: while (true) {
    let same = 0;
    let notsame = 0;
    let firstring = s[0];

    for (let i = 0; i < s.length; i++) {
      if (s[i] == firstring) same++;
      else notsame++;

      if (same === notsame) {
        s = s.slice(i + 1);
        answer++;
        continue test;
      }
    }
    if (s.length > 0) {
      answer++;
    }
    break;
  }
  return answer;
}
