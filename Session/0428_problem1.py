#1.모든 별 왼쪽 정렬

number = int(input('자연수를 입력하세요: '))

for a in range(1,number+1):
    print('*'*a)

print('----------------------------------')

#2. 모든 별 오른쪽 정렬

for b in range(1,number+1):
    print(" "*(number-b) + "*"*b)

print('----------------------------------')

#3. 모든 별 가운데 정렬, 피라미드형

for c in range(1,number+1):
    print(" "*(number-c)+"*"*(2*c-1)+" "*(number-c))

print('----------------------------------')

#4. 모든 별 가운데 정렬, 역피라미드형

for d in range(number,0,-1):
    print(" "*(number-d)+"*"*(2*d-1)+" "*(number-d))