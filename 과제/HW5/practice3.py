from googletrans import Translator

translator=Translator()
sentence=input("책을 읽으며 인상 깊었던 구절을 적어주세요: ")
detected=translator.detect(sentence)
result1=translator.translate(sentence,"en","ko")
result2=translator.translate(sentence,"vi","ko") #베트남

print("========== 번역 결과 ==========")
print(f"입력어 - ko : {sentence}")
print(f"번역어1 - en : {result1.text} ")
print(f"번역어2 - vi : {result2.text}  ")