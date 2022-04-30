from turtle import pos


def solution(number):
    num_str = str(number)
    possibilities = []
    for index, digit in enumerate(num_str):
        if digit == '5':
            possibilities.append(int(num_str[:index] + num_str[(index+1):]))
    
    possibilities.sort()

    return possibilities[-1]


print(solution(15958))
print(solution(-5859))
print(solution(-5000))

