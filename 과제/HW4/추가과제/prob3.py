# https://ko.wikipedia.org/wiki/%EC%83%9D%EC%9D%BC_%EB%AC%B8%EC%A0%9C
import math

people = int(input('Enter the number of people : '))

fac_up = math.factorial(365)
fac_down = math.factorial(365-people)

result = (1-float(fac_up)/(float(fac_down)*365**float(people)))*100

print(str(people) + '명의 사람 중 생일이 같은 사람이 둘 이상 있을 확률은 ' + str(result) + '% 입니다')