list = []

while True:
    something = input('Enter anything: ')
    if something == 'q':
        break
    else:
        list.append(something)

print(list)