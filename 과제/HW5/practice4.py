import smtplib
from email.message import EmailMessage

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

message = EmailMessage()
message.set_content("지연우 입니다.")

message["Subject"] = "지연우입니다."
message["From"] = "jyw0115@yonsei.ac.kr"
message["To"] = "ksjoon28@naver.com"

smtp = smtplib.SMTP_SSL(SMTP_SERVER,SMTP_PORT)
smtp.login("jyw0115@yonsei.ac.kr", "비밀입니다") #비밀입니다에 비밀번호 작성
smtp.send_message(message)
smtp.quit()