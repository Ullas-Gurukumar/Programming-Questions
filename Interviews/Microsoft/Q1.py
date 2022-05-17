# Time Complexity: O(n) worst case
# Space Complexity: O(1), just storing the number of occurrence of negative numbers
# I exit out of the loop if I see a 0 since the product will always be 0 (0 * x = 0)
# Checking for an empty array case, did not add None param check since the question mentioned I would be given an array, I'm assuming that it will not be None.
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