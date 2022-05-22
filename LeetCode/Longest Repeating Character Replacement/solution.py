def characterReplacement(s: str, k: int) -> int:
    result = None
    for right, _ in enumerate(s):
        right_longest = None
        right_char = None

        left_longest = None
        left_char = None
        left = len(s) - right
        for i in range(len(s) - right):
            # print('right', right, right + i + 1, s[right:right + i + 1])
            # print('left', left - i - 1, left, s[left - i - 1:left])
            right_substring = s[right:right + i + 1]
            left_substring = s[left - i - 1:left]

            if right_longest is None:
                right_longest = len(right_substring)
                right_char = right_substring
            
            if left_longest is None:
                left_longest = len(left_substring)
                left_char = left_substring
        
        if right > left:
            break


print(characterReplacement('ABAB', 2))
# print(characterReplacement('AABABBA', 1))