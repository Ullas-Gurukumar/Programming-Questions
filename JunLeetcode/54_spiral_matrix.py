"""
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
"""


from types import DynamicClassAttribute


class Solution:
    def spiralOrder(self, matrix):
        m = len(matrix)
        n = len(matrix[0])
        directions = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        currentDirection = 0
        i, j = 0, 0
        spiralOrder = []
        count = 0
        while count < m * n:
            spiralOrder.append(matrix[i][j])
            matrix[i][j] = None
            d_x, d_y = directions[currentDirection]
            i_temp = i + d_y
            j_temp = j + d_x
            if (
                j_temp < 0
                or j_temp >= n
                or i_temp < 0
                or i_temp >= m
                or not matrix[i_temp][j_temp]
            ):
                currentDirection = (currentDirection + 1) % 4
            d_x, d_y = directions[currentDirection]
            i = i + d_y
            j = j + d_x
            count += 1

        print(spiralOrder)
        return spiralOrder


sol = Solution()
assert sol.spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == [1, 2, 3, 6, 9, 8, 7, 4, 5]
assert sol.spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]) == [
    1,
    2,
    3,
    4,
    8,
    12,
    11,
    10,
    9,
    5,
    6,
    7,
]
