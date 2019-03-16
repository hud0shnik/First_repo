m = int(input());
if (m % 4) == 0:
    lll = 0;
    llll = m // 4;
elif (m % 4) == 1 :
    lll = 3;
    llll = (m - 9) // 4;
elif (m % 4) == 2 :
    lll = 2;
    llll = (m - 6) // 4;
elif (m % 4) ==3 :
    lll = 1;
    llll = (m - 3) // 4;
if (m == 1) or (m == 2) or (m == 5):
    print('0');
    print('0');
else:
    print(lll,'',llll);

