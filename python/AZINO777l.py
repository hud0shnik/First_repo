import random
rub = int(input("Сколько ты хочешь поменять Рублей на фишки?"))
x = rub // 10
while x > 0:
    print("Окей, ты имеешь", x ,"Фишек")
    s11 =int(input("Твоя ставка?"))
    if s11 <= x:
        if s11 == 1:
            ss1 = "Фишка"
        elif s11 == 10:
            ss1 = "Фишек"
        else:
            ss1 = "Фишки"
        print("Твоя ставка:", s11 , ss1)
        print("Крутим барабан....")
        slot1 = random.randint(1,9)
        slot2 = random.randint(1,9)
        slot3 = random.randint(1,9)
        ver = random.randint(1,10)
        sh  = random.randint(1,2)
        s1 = random.randint(1,4)
        s2 = random.randint(5,9)
        s = random.randint(1,3)
        ss = random.randint(4,7)
        sss = random.randint(8,9)
        if ver == 1:
            list = [slot1, slot1, slot1]
            print("На барабане числа:", list)
            print("Поздравляем!У вас комбо из трёх чисел, сумма стаки умножается на три")
            x += (s11 + s11)
        elif (ver == 2) and (sh == 1):
            list = [s1, s1, s2]
            random.shuffle(list)
            print("На барабане числа:", list)
            print("Поздравляем!У вас комбо из двух чисел, сумма ставки умножается на два")
            x += s11
        elif (ver == 2) and (sh == 2):
            list = [s1, s2, s2]
            random.shuffle(list)
            print("На барабане числа:", list)
            print("Поздравляем!У вас комбо из двух чисел, сумма ставки умножается на два")
            x += s11
        elif (ver == 3) and (sh == 1):
            list = [s1, s1, s2]
            random.shuffle(list)
            print("На барабане числа:", list)
            print("Поздравляем!У вас комбо из двух чисел, сумма ставки умножается на два")
            x += s11
        elif (ver == 3) and (sh == 2):
            list = [s1, s2, s2]
            random.shuffle(list)
            print("На барабане числа:", list)
            print("Поздравляем!У вас комбо из двух чисел, сумма ставки умножается на два")
            x += s11
        elif (ver == 4) and (sh == 1):
            list = [s1, s1, s2]
            random.shuffle(list)
            print("На барабане числа:", list)
            print("Поздравляем!У вас комбо из двух чисел, сумма ставки умножается на два")
            x += s11
        elif (ver == 4) and (sh == 2):
            list = [s1, s2, s2]
            random.shuffle(list)
            print("На барабане числа:", list)
            print("Поздравляем!У вас комбо из двух чисел, сумма ставки умножается на два")
            x += s11
        else:
            list = [s, ss, sss]
            random.shuffle(list)
            print("На барабане числа:", list)
            print("Как жаль, вы ничего не выйграли")
            x -= s11
    else:
        print("Не жульничай!")
print("У вас ничего не осталось, приходите когда будут деньги")
