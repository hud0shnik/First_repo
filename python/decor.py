def decor(f):
    def wrap():
        print('//////////////////////')
        f()
        print('//////////////////////')
    return wrap

def qwe(f):
    def wr():
        print("222222222222222222222")
        f()
        print("222222222222222222222")
    return wr


def pip(a):
    print('rererere' + " " + str(a))


decor(pip(5))
