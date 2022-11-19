//school.programmers.co.kr/learn/courses/30/lessons/42576
https: function solution(participant, completion) {
  let C = completion.sort(); // 완주 선수
  let P = participant.sort(); // 전체 선수

  for (let i = 0; i < P.length; i++) {
    if (P[i] !== C[i]) {
      return P[i];
    }
  }
}
