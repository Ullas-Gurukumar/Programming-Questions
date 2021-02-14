[Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/)

Going through the array to check if current value is less than the next, if not, I'm storing the current value's index as wrong index.

wrong index value or the next index value might be wrong so checking which case it is before fixing it.

- Runtime: O(n) since we only go through the array once
- Space: O(1) Only need to store some values.
