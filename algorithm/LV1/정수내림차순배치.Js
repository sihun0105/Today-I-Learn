//https://school.programmers.co.kr/learn/courses/30/lessons/12933
function solution(n) {
  let result = [];
  var answer = n
    .toString()
    .split("")
    .map((item) => {
      result.push(parseInt(item));
    });
  let newresult = parseInt(result.sort().reverse().join().replace(/,/g, ""));
  return newresult;
}
