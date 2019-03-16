list = [];
i = 0;
ii = 0;
sy = 1;
list = input('numbers:').split();
for i in range(len(list)):
    list[i] = int(list[i]);
    sy = sy * list[i];
    i+=1;
print(sy ** (1/i));
