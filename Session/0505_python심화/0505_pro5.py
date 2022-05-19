H = int(input("나무 막대의 높이 H를 입력해주세요: "))
X = int(input("낮 동안 올라가는 높이 X를 입력해주세요: "))
Y = int(input("밤 동안 올라가는 높이 Y를 입력해주세요: "))

#day*(x-y) >= h
#day >= h/(x-y)

location = 0
day = 0
while True:
    day += 1
    location += X
    if(location < H):
        location -= Y
    else:
        break

print("달팽이는",int(H/(X-Y)),"일 후에 정상에 도달할 수 있겠네요!")
