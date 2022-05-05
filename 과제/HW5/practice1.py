from bs4 import BeautifulSoup
import requests
from datetime import datetime

url = "https://music.bugs.co.kr/chart"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
rank = 1

results = soup.findAll("p","title")

file = open("practice1.txt", "w")
file.write(datetime.today().strftime("20%y-%m-%d의 벅스 실시간 차트 순위입니다."))
file.write("\n")
for result in results:
    file.write(str(rank)+ "위 : "+ result.get_text()+ "\n")
    rank +=1
file.close()