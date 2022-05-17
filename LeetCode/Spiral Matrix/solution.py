from typing import List 

def spiralOrder(matrix: List[List[int]]) -> List[int]:
    direction = (1, 0)
    start = (0,0)
    result = []
    total = len(matrix) * len(matrix[0])
    tracking = [[0] * len(matrix[0])] * len(matrix)
    
    
    
    return tracking

# [1,2,3,6,9,8,7,4,5]
print(spiralOrder([[1,2,3],
                   [4,5,6],
                   [7,8,9]]))

# [1,2,3,4,8,12,11,10,9,5,6,7]
print(spiralOrder([[1,2,3,4],
                   [5,6,7,8],
                   [9,10,11,12]]))