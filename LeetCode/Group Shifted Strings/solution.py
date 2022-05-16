from typing import List

def groupStrings(strings: List[str]) -> List[List[str]]:
    ord_strings = []
    diff_map = {}
    
    for s in strings:
        curr_ord_string = []
        current_diff = []
        prev_char = None

        for char in s:
            char_int = ord(char)
            curr_ord_string.append(char_int)
            
            if prev_char is not None:
                diff = char_int - prev_char
                if diff < 0:
                    diff += 26
                current_diff.append(diff)
            
            prev_char = char_int

        ord_strings.append(curr_ord_string)
        key = tuple(current_diff)

        if key in diff_map:
            diff_map[key].append(s)
        else:
            diff_map[key] = [s]
    ret = []
    for key in diff_map.keys():
        ret.append(diff_map[key])
    
    return ret


print(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]))