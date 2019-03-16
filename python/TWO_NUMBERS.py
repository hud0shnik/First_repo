#------------------------------------------------------------------------------#
# Name:        TWO_NUMBERS.py
#
#
  # Author:      Danila Egorov
#
# Created:     17.09.2017 14:50
# Copyright:   (c) awpaz 2017
#  \--------------\
    #--------------#\
        #----------------------------#\
#------------------------------------------#\
 #IF YOU SEE  IMMEDIATE LETTERS USE "ANSI" (Edit => File format => "Ansi")
#------------------------------------------#/
        #----------------------------#/
    #--------------#/
#  /--------------/
#------------------------------------------------------------------------------#

io = int(input('Enter the first number'));
op = int(input('Enter the second number'));
print("First num:", io);
print("Second num:", op);
if io > op:
    print("Num1 is greater than Num2");
elif io == op:
    print("Num1 equals Num2 ");
else:
    print("Num1 is less than Num2");
print("sum of numbers:", io + op);
print("difference of numbers:", io - op);
print("product of numbers:", io * op);
print("quotient of numbers:", int(float(io) / float(op)));
#-------------------------------------------------------------------------------
print("Num1 in the second degree:", io ** 2);
print("Num2 in the second degree:",  op ** 2);
io2 = io ** 2;
op2 = op ** 2;
if io2 > op2:
    print("Num1 in the second degree greater than Num2 in the second degree");
elif io2 == op2:
    print("Num1 in the second degree equals than Num2 in the second degree");
else:
    print("Num1 in the second degree less than Num2 in the second degree");
#-------------------------------------------------------------------------------
print("Num1 in the third degree:", io ** 3);
print("Num2 in the third degree:",  op ** 3);
io3 = io ** 3;
op3 = op ** 3;
if io3 > op3:
    print("Num1 in the third degree greater Num2 in the third degree");
elif io3 == op3:
    print("Num1 in the third degree equals than Num2 in the third degree");
else:
    print("Num1 in the third degree less than Num2 in the third degree");
print("thank you :D");
#------------------------------------------------------------------------------



