import heapq

def find_cities(N, M, X, K, graph):
    distances = {city: float('inf') for city in range(1, N+1)}
    distances[X] = 0
    
    # 우선순위 큐를 사용하여 다익스트라 알고리즘 구현
    queue = []
    heapq.heappush(queue, (0, X))  # (거리, 도시) 쌍을 큐에 추가
    
    while queue:
        current_distance, current_city = heapq.heappop(queue)
        
        # 현재 도시에서 이어진 도시들을 확인하며 최단 거리 업데이트
        for neighbor, distance in graph[current_city]:
            new_distance = current_distance + distance
            
            if new_distance < distances[neighbor]:
                distances[neighbor] = new_distance
                heapq.heappush(queue, (new_distance, neighbor))
    
    result = []
    for city, distance in distances.items():
        if distance == K:
            result.append(city)
    
    return result

# 입력값 받기
N, M, X, K = map(int, input().split())
graph = {city: [] for city in range(1, N+1)}

# 도로 정보 입력받아 그래프 생성
for _ in range(M):
    start, end = map(int, input().split())
    graph[start].append((end, 1))  # 단방향 도로이므로 거리는 항상 1입니다.

# 결과 출력
result = find_cities(N, M, X, K, graph)
for city in result:
    print(city)
