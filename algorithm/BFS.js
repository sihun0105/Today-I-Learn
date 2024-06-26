const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "E"],
    D: ["B", "F"],
    E: ["C","G"],
    F: ["D","H","I"],
    G: ["E","J","K"],
    H: ["F","L"],
    I: ["F", "M"],
    J: ["G","N"],
    K: ["G","O"],
    L: ["H"],
    M: ["I","P"],
    N: ["J"],
    O: ["K"],
    P: ["M"]
  };
  
  const bfs = (graph, start) => {
  
      const checked = [];
      const willCheck = [];
      
      willCheck.push(start);
      
      while(willCheck.length!==0){
        const node = willCheck.shift(); // 큐(First In First Out)
        if(!checked.includes(node)){
              checked.push(node);
             willCheck.push(...graph[node]);       
        }
     }
      return checked;
  }
  
  console.log(bfs(graph, "A"));
  // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']