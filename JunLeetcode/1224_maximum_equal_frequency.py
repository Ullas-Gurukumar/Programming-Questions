"""
Given an array nums of positive integers, return the longest possible length of an array prefix of nums, such that it is possible to remove exactly one element from this prefix so that every number that has appeared in it will have the same number of occurrences.

If after removing one element there are no remaining elements, it's still considered that every appeared number has the same number of ocurrences (0).

 

Example 1:

Input: nums = [2,2,1,1,5,3,3,5]
Output: 7
Explanation: For the subarray [2,2,1,1,5,3,3] of length 7, if we remove nums[4] = 5, we will get [2,2,1,1,3,3], so that each number will appear exactly twice.
Example 2:

Input: nums = [1,1,1,2,2,2,3,3,3,4,4,4,5]
Output: 13
 

Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= 105
"""
from collections import defaultdict, Counter


class Solution:
    def isEqualOccurrence(self, map):
        mapValues = list(map.values())
        print(mapValues)
        maxMapValues = max(mapValues)
        a = Counter(mapValues)
        if len(a) == 2 and a[1] == 1:
            return True
        return False

    def maxEqualFreq(self, nums) -> int:
        numsLen = len(nums)
        freqMap = defaultdict(int)
        maxSoFar = 0
        for i, num in enumerate(nums):
            freqMap[num] += 1
            i == 8 and print("candidate", i, nums[: i + 1])
            if self.isEqualOccurrence(freqMap):
                maxSoFar = i + 1
        print(maxSoFar)
        return maxSoFar


sol = Solution()
assert sol.maxEqualFreq([2, 2, 1, 1, 5, 3, 3, 5]) == 7
assert sol.maxEqualFreq([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]) == 13
assert sol.maxEqualFreq([1, 2, 2]) == 3
assert sol.maxEqualFreq([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 6, 4]) == 9
