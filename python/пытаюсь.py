num = int(input('10:'))
list1 = []
i = int(0)
os = 0
answ = ' '
while 1 == 1:
    os = num % 2
    answ = answ + str(os)
    i+=1
    num = (num // 2)
    if num <= 1:
        break
answ = answ + '1'
answ = answ[::-1]
print(answ)