from re import X


def solution(A):
    N = len(A)
    result = 0
    for i in range(N):
        for j in range(N):
            if A[i] == A[j]:
                result = max(result, abs(i - j))
    return result



# The problem was trying to find the largest distance in the array with same values
# The unoptimized solution time Complexity was O(n), was iterating over the same array twice
# My solution:
# Time Complexity: O(n), I only iterate over the array once
# Space Complexity: O(1), just storing a few integers
# there is further optimization that can be done. Since we are trying to find the largest distance, I start checking from the farthest  pair, once I find the first pair, I can skip over pairs with distance less than the pair I have found. 
def solution2(numbers):
    n = len(numbers)
    result = 0
    pointer1 = 0
    pointer2 = n-1
    
    while (pointer1 < pointer2):
        for i in range(n):
            start = pointer1
            end = n - i -1
            if (start < end and numbers[start] == numbers[end]):
                result = max(result, abs(i - pointer1))
            
            start = i
            end = pointer2
            if (start < end and numbers[start] == numbers[end]):
                result = max(result, abs(pointer2 - i))
        
        pointer1 += 1
        pointer2 -= 1
    return result



x = [2] * 500
x[0] = 5
x[-1] = 5
print(solution(x))
print(solution2(x))
print(solution([4, 6, 2, 2, 6, 6, 1]))
print(solution2([4, 6, 2, 2, 6, 6, 1]))