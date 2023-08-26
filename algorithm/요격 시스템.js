function solution(targets) {
  const result = [];
  let prev = -1;
  const len = targets.length;

  const data = targets.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < len; i++) {
    const [a, b] = data[i];

    if (prev <= a) {
      prev = b;
      result.push(true);
    }
  }

  return result.length;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/181188
