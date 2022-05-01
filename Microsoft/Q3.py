# Since the performance didn't matter in this solution, I chose to use sort and store all posibilities for correctness.
# Time Complexity: O(nlog(n)), this is due to the sort method
# Space Complexity: O(n) for worst case, n being the length of number when converted to string.
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

