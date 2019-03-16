from itertools import product, permutations
nums = {1,2,3,4,5,6}
nums = {0,1,2,3} & nums
nums = filter(lambda x: x>1, nums)
print(len(list(nums)))