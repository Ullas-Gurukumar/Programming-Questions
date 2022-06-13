"""
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
"""
import math


class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        len1 = len(nums1)
        len2 = len(nums2)
        i1, i2 = 0, 0
        medianIndex = math.ceil((len1 + len2) / 2)
        previousValue = None
        currentValue = None

        for sortedIndex in range(medianIndex + 1):
            previousValue = currentValue
            if i1 >= len1 and i2 >= len2:
                break
            if i1 >= len1 and i2 < len2:
                currentValue = nums2[i2]
                i2 += 1
            elif i2 >= len2 and i1 < len1:
                currentValue = nums1[i1]
                i1 += 1
            elif nums1[i1] <= nums2[i2]:
                currentValue = nums1[i1]
                i1 += 1
            else:
                currentValue = nums2[i2]
                i2 += 1
        if (len1 + len2) % 2:
            return previousValue or currentValue
        else:
            return (currentValue + previousValue) / 2


sol = Solution()
assert sol.findMedianSortedArrays([1, 2], [3]) == 2
assert sol.findMedianSortedArrays([1, 2], [3, 4]) == 2.5
assert sol.findMedianSortedArrays([1, 2], []) == 1.5
assert sol.findMedianSortedArrays([1], []) == 1
assert sol.findMedianSortedArrays([], [1]) == 1
