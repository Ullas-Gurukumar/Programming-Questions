from typing import List


def kthSmallest(matrix: List[List[int]], k: int) -> int:
    if matrix is None:
        return None
    
    pointers = [0] * len(matrix)
    count = 0
    while count <= k:
        smallest_index = -1
        smallest_num = None
        for index, array in enumerate(matrix):
            if smallest_index == -1 and pointers[index] < len(matrix[0]):
                smallest_index = index
                smallest_num = array[pointers[index]]
            elif pointers[index] < len(matrix[0]) and array[pointers[index]] < smallest_num:
                smallest_index = index
                smallest_num = array[pointers[index]]
        pointers[smallest_index] = pointers[smallest_index] + 1
        count += 1
        if (count == k):
            return smallest_num
    
    
    
# O(nLog(n)), sort is the most expensive operation
def smallest_by_sort(matrix: List[List[int]], k: int) -> int:
    combined = []
    for array in matrix:
        combined.extend(array)
        
    combined.sort()
    return combined[k-1]
     
        
        
print(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8))
print(kthSmallest([[1]], 1))
# print(smallest_by_sort([[1,5,9],[10,11,13],[12,13,15]], 8))
# print(smallest_by_sort([[1]], 1))