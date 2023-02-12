//https://school.programmers.co.kr/learn/courses/30/lessons/155652
function solution(s, skip, index) {
    const result = [];
    const skipChar = [];
    /**스킵할 아스키 코드 */
    for (let i =0; i<skip.length; i++){
        skipChar.push(skip.charCodeAt(i) % 97);//소문자이기 떄문에 %97
    }
    /**변환시작 */
    for (let i=0; i<s.length; i++){
        let char = s.charCodeAt(i) % 97;
            for (let j = 0; j < index; j++) {
            do {
                char++;  
                if (char == 26) char = 0;
            } while (skipChar.includes(char));
        }
        result.push(String.fromCharCode(char + 97));
    }
    return result.join().replaceAll(',','');
}