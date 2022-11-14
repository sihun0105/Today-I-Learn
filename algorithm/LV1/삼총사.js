//https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript
const n = [-2, 3, 0, 2, -5];
function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }
  console.log(answer);
  return answer;
}
solution(n);
