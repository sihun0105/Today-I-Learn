//https://school.programmers.co.kr/learn/courses/30/lessons/12919
function solution(seoul) {
  let answer = 0;
  for (let i = 0; i < seoul.length; i++) {
    seoul[i] == "Kim" ? (answer = i) : "";
  }
  return `김서방은 ${answer}에 있다`;
}
