from typing import List

# Do I need to validate my input?
# assuming matrix doesnt have any None values
def spiralOrder(matrix: List[List[int]]) -> List[int]:
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    current_direction = 0
    result = []
    total = len(matrix) * len(matrix[0])
    # tracking = [[0 for i in range(len(matrix[0]))] for j in range(len(matrix))]
    x = 0
    y = 0
    while total > 0:
        result.append(matrix[x][y])
        matrix[x][y] = None
        (x_dir, y_dir) = directions[current_direction]

        if (
            (x_dir == 1 and x + x_dir >= len(matrix))
            or y_dir == 1
            and y + y_dir >= len(matrix[0])
            or matrix[x + x_dir][y + y_dir] == None
        ):
            current_direction = (current_direction + 1) % len(directions)

        (x_dir, y_dir) = directions[current_direction]
        x = x + x_dir
        y = y + y_dir

        total -= 1

    return result


# [1,2,3,6,9,8,7,4,5]
print(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

# [1,2,3,4,8,12,11,10,9,5,6,7]
print(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
# x = [[1,2,3,4],
#     [5,6,7,8],
#     [9,10,11,12]]

# print(x[0][0], x[0][1], x[0][2], x[0][3])
