from tkinter import *
def b():
    print ("РљР»РёРє!")
    tr = "1234"
r=Tk()
tr = "143"
r.title('РџСЂРёРјРµСЂ РїСЂРёР»РѕР¶РµРЅРёСЏ')
r.geometry('500x400+300+200')
r.resizable(True, 1)
tx = Label(r,text = tr)
tx.configure(r, text = tr)
button2 = Button(r, bg="white", text=tr, command=b)
tx.pack()
button2.pack()
r.mainloop()
