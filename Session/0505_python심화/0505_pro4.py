from operator import indexOf


list = []

while True:
    num = input('숫자를 입력해주세요: ')
    if(num == 'q'):
        break
    else : list.append(num)

min = min(list)
max = max(list)
print(len(list),"개의 숫자 중 최솟값은",list.index(min)+1,"번째 수",min,"입니다.")
print(len(list),"개의 숫자 중 최댓값은",list.index(max)+1,"번째 수",max,"입니다.")