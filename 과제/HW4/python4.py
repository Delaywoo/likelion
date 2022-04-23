mydict = {}

while True:
    fruit = input('Enter a fruit type (q to quite): ')
    if fruit == 'q':
        break
    else:
        weight = input('Enter the weight in kg: ')
        mydict[fruit] = weight

print(mydict)