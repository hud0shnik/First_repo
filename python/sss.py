class sp:
    def __inut__(self,cont):
        self.cont = cont

def __truediv__(self,other):
    line = "="*len(other.cont)
    return "\n".join([self.cont,line,other.cont])
spam = sp("spam")
hello = sp("Hello world!")
print(spam/hello)