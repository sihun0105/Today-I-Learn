//https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  var answer = true;
  let haveP = 0;
  let haveY = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() == "p") {
      haveP++;
    } else if (s[i].toLowerCase() == "y") {
      haveY++;
    }
  }

  return haveP === haveY ? (answer = true) : (answer = false);
}
