# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(array):
    if len(array) == 0:
        return 0
    
    num_negative = 0
    for number in array:
        if number == 0:
            return 0
        elif number < 0:
            num_negative += 1
            
    if num_negative % 2 == 0:
        return 1

    return -1


print(solution([1, -2, -3, 5]))
print(solution([1, 2, 3, -5]))
print(solution([1, -2, 0, 5]))
print(solution([]))