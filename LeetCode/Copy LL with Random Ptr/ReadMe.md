# [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

- I'm copying all the nodes in the first iteration. In second iteration, I'm copying random pointers and next pointers. This is only possible with the use of hashtable table to map each node to it's new node.

- Runtime: O(n) 2 \* n where n is the length of the linked list
- Space: O(n)
