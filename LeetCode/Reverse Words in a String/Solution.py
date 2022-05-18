# https://leetcode.com/problems/reverse-words-in-a-string/submissions/

def reverseWords(s: str) -> str:
    words = s.split(' ')
    result = ''
    for word in words:
        if len(word) > 0:
            result = f"{word} {result}".strip()
        
    return result
    

# print(reverseWords("the sky is blue"))
# print(reverseWords("  hello world  "))
# print(reverseWords("a good   example"))


# https://leetcode.com/problems/reverse-words-in-a-string-ii/

from typing import List 

def reverseWords2(s: List[str]) -> None:
    # result = []
    # for i in range(len(s)):
    #     result.insert(0, s[len(s) - i - 1])
    # return result
    point = 0
    for i in range(len(s)):
        char = s.pop(len(s) - 1)
        if char == ' ':
            point = i
        s.insert(point, char)
        if char == ' ':
            point = i + 1
        

    return s


print(reverseWords2(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]))
