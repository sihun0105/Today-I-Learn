func isEven(i int) bool {
    return (i%2) == 0
}

func makeBox(n, w int) [][]int {
    totalRows := (n + w - 1) / w

    box := make([][]int, totalRows)
    for i := range box {
        box[i] = make([]int, w)
    }
    
    currentNum := 1
    
    for row := 0; row < totalRows; row++ {
        if isEven(row) {
            // 짝수 행: 왼 -> 오
            for col := 0; col < w && currentNum <= n; col++ {
                box[row][col] = currentNum
                currentNum++
            }
        } else {
            // 홀수 행: 오 -> 왼
            for col := w - 1; col >= 0 && currentNum <= n; col-- {
                box[row][col] = currentNum
                currentNum++
            }
        }
    }
    
    return box
}

func solution(n int, w int, num int) int {
    box := makeBox(n, w)
    totalRows := len(box)
    
    targetRow, targetCol := -1, -1
    for row := 0; row < totalRows; row++ {
        for col := 0; col < w; col++ {
            if box[row][col] == num {
                targetRow = row
                targetCol = col
                break
            }
        }
    }
    
    count := 1
    
    for row := targetRow + 1; row < totalRows; row++ {
        if box[row][targetCol] > 0 && box[row][targetCol] <= n {
            count++
        }
    }
    
    return count
}
//https://school.programmers.co.kr/learn/courses/30/lessons/389478?language=go