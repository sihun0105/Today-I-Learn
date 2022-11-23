//https://school.programmers.co.kr/learn/courses/30/lessons/12948

const phone_number = "01033334444";
function solution(phone_number) {
  var answer =
    phone_number.slice(0, -4).replace(/./g, "*") + phone_number.slice(-4);
  return answer;
}

solution(phone_number);
