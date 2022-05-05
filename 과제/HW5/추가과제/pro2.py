sentence = input('Enter a sentence: ')
mysentence = sentence.lower()
vowel = 'aeiou'
result = 0

for i in vowel:
    result += mysentence.count(i)

if(result==1):
    print("Your sentence contains",result,"vowel.")
else:
    print("Your sentence contains",result,"vowels.")