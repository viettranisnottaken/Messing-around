print('hello world')
print('\n')

'''
#ex1
name = input('Your name is: ')
age = int(input('How old are you: '))
age100 = age + 100
print ('You will be {} in 100 years'.format(age100))
'''

'''
#ex2:
num = int(input('Place your number here: '))
check = int(input('Place another one here: '))
if num % 2 == 0:
    print('This is an even number')
if num % 2 == 1:
    print('This is an odd number')
if num % 4 == 0:
    print('And u are in luck, this is a multiple of 4')
if check % num == 0:
    print ('Evidently the 2nd one divides evenly into its predecessor')
'''

'''
#ex3:
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
print([aa for aa in a if aa < 5])
'''

#ex9
import random
a = random.randint (1,15)
guess = 0
count = 0
print ('Guess which number I chose from 1 to 15?')
while guess != a and guess != 'exit' and guess != 'Exit':
    guess = input('Make a wild guess: ')
    count += 1
    if guess == 'exit' or guess == 'Exit':
        print('Loser')
        if count > 4:
            print('And after trying so hard too, you incompetent')
        if count <= 4:
            print('Giving up so soon?')
        break
    guess = int(guess)
    if abs(guess - a) >= 3 and guess >a:
        print('Too high, boi')
    if abs(guess - a) <3 and guess > a:
        print('Close, guess lower')
    if abs(a - guess) >= 3 and guess < a:
        print('Too low, boi')
    if abs(a - guess) < 3 and guess < a:
        print('Close, guess higher')
    if guess == a:
        print('Noice, ')
        if count > 4:
            print('But it took you like {:d} times, dimweed'.format(count))
        else:
            print('And you did it in only {:d} tries :D'.format(count))


