import math

def product_except_self(nums):
    # Added input validation
    if nums is None or len(nums) == 0:
        return []
    
    zero_count = 0
    total_product = 1
    for num in nums:
        if num == 0:
            zero_count += 1
        else:
            total_product = total_product * num
            
    result = []
    for num in nums:
        if (num == 0 and zero_count > 1) or (num != 0 and zero_count >= 1):
            result.append(0)
        elif num == 0 and zero_count == 1:
            result.append(total_product)
        else:
            result.append(math.floor(total_product/num))
            
    return result

# input = [1,2,3,4]
# Output: [24,12,8,6]
print(product_except_self([1,2,3,4]))

# input = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]
print(product_except_self([-1,1,0,-3,3]))

print(product_except_self([0,0,0,000,0,0,0]))

print(product_except_self([]))

print(product_except_self(None))