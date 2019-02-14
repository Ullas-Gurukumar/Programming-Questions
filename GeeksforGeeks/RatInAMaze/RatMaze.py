maze1 = [[1, 0, 0, 0], [1, 1, 0, 1], [0, 1, 0, 0], [0, 1, 1, 1]]
maze2 = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]


def checkAllDirections(maze, x, y):
    if x == len(maze[0]) - 1 and y == len(maze[0]) - 1:
        return None

    ret = ["x", "x", "x", "x"] # Left, Up, Right, Down

    if y != 0 and maze[x][y - 1] == 1:
        ret[0] = ("L", (x, y - 1))
    if x != 0 and maze[x - 1][y] == 1:
        ret[1] = ("U", (x - 1, y))
    if y != len(maze[0]) - 1 and maze[x][y + 1]:
        ret[2] = ("R", (x, y + 1))
    if x != len(maze[0]) - 1 and maze[x + 1][y]:
        ret[3] = ("D", (x + 1, y))

    return ret


solution = [""]

points_to_check = [(0,0)]

while len(points_to_check) > 0:
    point = points_to_check[-1]
    possible_paths = checkAllDirections(maze2, point[0], point[1])
    if possible_paths == None:
        break
        
    for result in possible_paths: 
        if result != "x" and result[1] not in points_to_check:
            solution[0] = solution[0] + result[0]
            points_to_check.append(result[1])


print(solution)
