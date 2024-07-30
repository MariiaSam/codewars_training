# 2
# n = int(input())

# if n % 2 == 0 and range(2, 5):
#     print("Not Weird")
# elif n % 2 == 0 and range(6, 20):
#     print("Weird")
# elif n % 2 == 0 and n > 20:
#     print("Not Weird")
# elif n % 2 == 1:
#     print('Weird')
# else:
#     print("Weird")


# ===================================
# 2
# n = int(input())


# if n % 2 != 0:
#     print("Weird")
# elif 2 <= n <= 5:
#     print("Not Weird")
# elif 6 <= n <= 20:
#     print("Weird")
# else:
#     print("Not Weird")

# ===================================
# 3
# if __name__ == '__main__':
#     a = int(input())
#     b = int(input())
# print(a + b)
# print(a - b)
# print(a * b)

# ===================================
# 4
# if __name__ == '__main__':
#     a = int(input())
#     b = int(input())
# print(a//b)
# print(a/b)
# ===================================
# 5
# if __name__ == '__main__':
#     n = int(input())
# for i in range(0, n):
#     print(i**2)

# ===================================
# An extra day is added to the calendar almost every four years as February 29, and the day is called a leap day. It corrects the calendar for the fact that our planet takes approximately 365.25 days to orbit the sun. A leap year contains a leap day.

'''In the Gregorian calendar, three conditions are used to identify leap years:

The year can be evenly divided by 4, is a leap year, unless:
The year can be evenly divided by 100, it is NOT a leap year, unless:
The year is also evenly divisible by 400. Then it is a leap year.
This means that in the Gregorian calendar, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300 and 2500 are NOT leap years. Source

Task

Given a year, determine whether it is a leap year. If it is a leap year, return the Boolean True, otherwise return False.

Note that the code stub provided reads from STDIN and passes arguments to the is_leap function. It is only necessary to complete the is_leap function.

Input Format

Read , the year to test.

Constraints


Output Format

The function must return a Boolean value (True/False). Output is handled by the provided code stub.

Sample Input 0

1990
Sample Output 0

False
Explanation 0

1990 is not a multiple of 4 hence it's not a leap year.'''

# def is_leap(year):
#     leap = False

#     if not year % 4 and (year % 100 or not year % 400):
#         leap = True

#     return leap

# year = int(input())
# print(is_leap(year))

# ======================================================

'''
The included code stub will read an integer, , from STDIN.

Without using any string methods, try to print the following:


Note that "" represents the consecutive values in between.

Example

Print the string .

Input Format

The first line contains an integer .

Constraints


Output Format

Print the list of integers from  through  as a string, without spaces.

Sample Input 0

3
Sample Output 0

123
'''

# if __name__ == '__main__':
#     n = int(input())
#     for i in range(n+1):
#         if i > 0:
#             print(i, end="")
