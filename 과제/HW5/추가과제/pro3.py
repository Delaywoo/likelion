sum = 0
list = []
while True:
    name = input("Enter a name (q to quit): ")
    if (name=='q'):
        break
    else:
        myname = name.split()
        for i in myname:
            list.append(i)
            sum += i.count('a')

print("Number of names and letter 'a':",len(list),",", sum )