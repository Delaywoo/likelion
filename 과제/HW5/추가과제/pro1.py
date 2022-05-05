from datetime import date, datetime

mymon = int(input("Enter month born (1-12): "))
myday = int(input("Enter day born (1-31): "))
myyear = int(input("Enter year born (4-digit): "))

today_mon = int(input("Enter month born (1-12): "))
today_day = int(input("Enter day born (1-31): "))
today_year = int(input("Enter year born (4-digit): "))

mydate = date(myyear,mymon,myday)
todaydate = date(today_year,today_mon,today_day)

result = todaydate - mydate
print("Number of days you lived:",result.days)