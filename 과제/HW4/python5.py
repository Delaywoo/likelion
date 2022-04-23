import random
import time

print('5개의 메뉴를 추가해주세요! 5개가 입력되면 오늘의 메뉴를 추천해드려요.')
print('동일한 메뉴는 안돼요!')

menulist = []

while True:
    if len(menulist)  == 5:
        break
    else:
        menu = input('메뉴 추가: ')
        # set_menulist = set(menulist) | set([menu])
        # menulist = list(set_menulist)
        if menu in menulist:
            print('이미 있는 메뉴에요! 다른 메뉴를 입력해주세요.')
            delete_index = menulist.index(menu)
            del menulist[delete_index]
        menulist.append(menu)
        print('현재 메뉴 수 = ' + str(len(menulist)))


print("")

for x in range(3, 0, -1):
    print(x)
    time.sleep(1)

print("")

print(menulist)
print('과연 오늘의 메뉴는?')

print("")

for x in range(3, 0, -1):
    print(x)
    time.sleep(1)

print("")

today_menu = random.choice(menulist)
print('오늘의 메뉴는 ' + str(menulist.index(today_menu)+1) + '번째 메뉴, ' + today_menu + ' 입니다.')