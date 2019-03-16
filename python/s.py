
def cn(text,char):
    count = 0
    for c in text:
        if c == char:
            count += 1
    return count
ti = input()
with open('ex.txt') as f:
    text = f.read()
print(cn(text,ti))
f.close()
