from typing import List, Tuple


class Solution:
    def shortestPath(self, grid: List[List[int]], bombs: int) -> int:
        stack: List[Tuple[int, int]]= []
        
        for row, i in enumerate(grid):
            for cell, ii in enumerate(row):
                return 0
        return -1



grid = [
    [0,0,0],
    [1,1,0],
    [0,0,0],
    [0,1,1],
    [0,0,0]
]