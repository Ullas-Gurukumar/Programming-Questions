from typing import List


def subsets(nums: List[int]) -> List[List[int]]:
    result = set([[], nums])

    for i in range(len(nums)):
        subset_len = i + 1

        
    pass



print(subsets([1,2,3]))
print(subsets([0]))
