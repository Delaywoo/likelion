def mysum(n):
    sum = 0
    for i in range(n+1):
        sum += i
    print(sum)

n = int(input('자연수를 입력해주세요.: '))
mysum(n)