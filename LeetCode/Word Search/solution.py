from logging.handlers import BaseRotatingHandler
from typing import List

def exist(board: List[List[str]], word: str) -> bool:
    if board is None:
        return False
    
    row_len = len(board)
    col_len = len(board[0])
    for row_index, char_row in enumerate(board):
        for col_index, char in enumerate(char_row):
            if (char is word[0]):
                visited = set([(row_index, col_index)])
                if (find(board, word, row_index, col_index, 1, row_len, col_len, visited)):
                    return True
    
    return False
            

def find(board, word, row, col, char_index, row_len, col_len, visited):
    adjacent_cells = [(row + 1, col), (row - 1, col), (row, col + 1), (row, col - 1)]
    for (x, y) in adjacent_cells:
        if (x,y) in visited:
            continue
        
        if char_index >= len(word):
            return True
        
        if (x >= 0) and (x < row_len) and (y >= 0) and (y < col_len) and board[x][y] == word[char_index]:
            visited.add((x,y))
            if find(board, word, x, y, char_index+1, row_len, col_len, visited):
                return True
            else:
                visited.remove((x,y))
    return False


# print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))
# print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))
# print(exist(board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"))
# print(exist(board = [["A"]], word = "A"))
# print(exist([["C","A","A"],
#              ["A","A","A"],
#              ["B","C","D"]], "AAB"))
print(exist([["a","a","a"],
             ["A","A","A"],
             ["a","a","a"]], "aAaaaAaaA"))