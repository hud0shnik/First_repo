import random
rub = int(input("Сколько ты хочешь поменять Рублей на фишки?"))
x = rub // 10
while x > 0:
    print("Окей, ты имеешь", x ,"Фишек")
    s1 =int(input("Твоя ставка?"))
    if s1 <= x:
        if s1 == 2:
            ss1 = "Фишка"
        elif s1 == 10:
            ss1 = "Фишек"
        else:
            ss1 = "Фишки"
        print("Твоя ставка:", s1 , ss1)
        x -= s1
        print("Крутим барабан....")
        slot1 = random.randint(1,9)
        slot2 = random.randint(1,9)
        slot3 = random.randint(1,9)
        print("На барабане числа:", slot1, slot2, slot3)
        if slot1 == slot2 == slot3:
            print("Поздравляем!У вас комбо из трёх чисел, сумма стаки умножается на три")
            x += s1 * 3
        elif ((slot1 == slot2) and (slot1 != slot3)) or ((slot3 == slot2) and (slot1 != slot3)) or ((slot1 == slot3) and (slot1 != slot2)):
            print("Поздравляем!У вас комбо из двух чисел, сумма ставки умножается на два")
            x += s1 * 2
        else:
            print("Как жаль, вы ничего не выйграли")
    else:
        print("Не жульничай!")
print("Как жаль, у вас ничего не осталось")
