# https://leetcode.com/problems/minimum-window-substring/

def minWindow(s: str, t: str) -> str:
    t_counts = {}
    for char in t:
        t_counts[char] = t_counts[char] or 1
    print(t_counts)



minWindow('ADOBECODEBANC', 'ABC')