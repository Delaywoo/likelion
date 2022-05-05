list = []

while True:
    n = float(input("Enter a number: "))
    if(n>0):
        list.append(n)
    else:
        break

print(f"The largest number entered was {max(list):.2f}")