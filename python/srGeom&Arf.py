list = [];
i = 0;
ii = 0;
sy = 1;
sg = 0;
list = input('numbers:').split();
for i in range(len(list)):
    list[i] = int(list[i]);
    sy = sy * list[i];
    sg += list[i];
    i+=1;
print('Srednee Geometricheskoe:',sy ** (1/i));
print('Srednee Arefmiticheskoe:',sg/len(list));
