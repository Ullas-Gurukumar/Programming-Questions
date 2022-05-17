def longestDiverseString(a: int, b: int, c: int) -> str:
    letters = ['a', 'b', 'c']
    occurrence = [a, b, c]
    result = ''
    omit_index = None

    while True:
        index = findHighestOccurrence(occurrence, omit_index)
        if occurrence[index] == 0:
            break
        result += letters[index]
        occurrence[index] = occurrence[index] - 1

        if len(result) >= 2:
            if result[-1] == result[-2]:
                omit_index = letters.index(result[-1])
            else:
                omit_index = None


    return result

def findHighestOccurrence(occurrence, omit_index=None) -> int:
    highest_index = None
    highest = None
    for index, letter_count in enumerate(occurrence):
        if omit_index == index: continue

        if highest is None or highest < letter_count:
            highest = letter_count
            highest_index = index
    
    return highest_index

print(longestDiverseString(a = 1, b = 1, c = 7))
print(longestDiverseString(a = 7, b = 1, c = 0))