num = input()
list1 = list(str(num))
ip = len(list1)
answ = 0
i = 0
list1 = list1[::-1]
while i <= len(list1)-1:
    answ += int(list1[i])*(2**(i))
    i+=1
print(answ)