//https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let arr = n
    .toString()
    .split("")
    .map((x) => parseInt(x));
  return arr.reduce((acc, cur) => acc + cur);
}
