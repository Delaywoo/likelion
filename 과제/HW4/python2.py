a = {}

a['이름'] = '지연우'
a['나이'] = '22'
a['학번'] = '2020145062'
a['학과'] = '기계공학과'
a['생일'] = '20010115'

print(a)
print(len(a))
print()

del a['이름']
del a['나이']
del a['학번']
del a['학과']
del a['생일']

print(a)
print(len(a))
print()

a = dict(이름 = '지연우', 나이 = '22', 학번 = '2020145062', 학과 = '기계공학과', 생일 = '20010115')

print(a)
print(len(a))
print()

a.clear()
print(a)
print(len(a))
