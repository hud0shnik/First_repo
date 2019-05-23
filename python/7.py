import sys
from PyQt4 import QtGui, QtCore

class TestGui(QtGui.QDialog):
    def __init__(self):
        QtGui.QDialog.__init__(self)

        self.setGeometry(600, 300, 500, 150)
        self.setWindowTitle("РЈСЂСЏ")
        lTitle = QtGui.QLabel("Р“С‹", self)
        lTitle.setAlignment(QtCore.Qt.AlignHCenter)
        lTitle.setGeometry(100,10,300,20)
        fntMyFont = QtGui.QFont(self)
        fntMyFont.setBold(1)
        fntMyFont.setPixelSize(18)
        lTitle.setFont(fntMyFont)
        lDescription = QtGui.QLabel("Р", self)
        lDescription.setAlignment(QtCore.Qt.AlignHCenter)
        lDescription.setGeometry(100, 35, 300, 40)
        fntMyFont2 = QtGui.QFont(self)
        fntMyFont2.setItalic(True)
        fntMyFont2.setPixelSize(14)
        lDescription.setFont(fntMyFont2)

        btnQuit = QtGui.QPushButton("Р’С‹Р№С‚Рё", self)
        btnQuit.setGeometry(150, 75, 200, 30)
        self.connect(btnQuit, QtCore.SIGNAL('clicked()'), quit)

app = QtGui.QApplication(sys.argv)
tg = TestGui()
tg.show()
app.exec()