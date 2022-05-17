# Implement the power function that computes a to the power of b using basic arithmetic operations

# 3^100 = 3*3*3*3..*3 = 3^50 * 3^50
# 3^-100 = 1/(3^100)
# power(2,3)
def power(a, b):
    if b == 0:
        return 1
    
    if b == 1:
        return a

    isInverse = False
    if b < 0:
        isInverse = True

    ret_val = 1

    if (b % 2 == 0):
        x = power(a, abs(b/2))
        ret_val = x * x
    else:
        half_b = abs(int(b/2))
        x = power(a, half_b)

        ret_val = x * x * a

    if isInverse:
        return 1 / ret_val
    
    return ret_val

# Given a sequence of integers and an integer total target, return whether a continuous sequence of integers sums up to target.

# [1, 3, 1, 4, 23], 8 : True (because 3 + 1 + 4 = 8)
# [1, 3, 1, 4, 23], 7 : False

def sequence_of_int(seq, target):
    pointer1 = 0 
    pointer2 = len(seq) - 1
    
    while(pointer1 < pointer2):
        sum1 = seq[pointer1]
        sum2 = seq[pointer2]
        for i in range(pointer1 + 1, len(seq)):
            if sum1 is target or sum2 is target:
                return True
            
            sum1 += seq[i]
            sum2 += seq[pointer2 - i]
        
        pointer1 += 1
        pointer2 -= 1

    return False

print(sequence_of_int([1, 3, 1, 4, 23], 8))
print(power(2,9))