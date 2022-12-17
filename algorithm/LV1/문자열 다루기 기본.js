//https://school.programmers.co.kr/learn/courses/30/lessons/12918
function solution(s) {
  let answer = true;

  if (s.length !== 4 && s.length !== 6) {
    answer = false;
  } else {
    answer = s.split("").every((c) => !isNaN(c));
  }
  return answer;
}
