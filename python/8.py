# Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

# For example (Input -> Output):

# 2 -> 3 (1 + 2)
# 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

# def summation(num):
#   return sum(range(1, num+1))

# Функція range створює послідовність чисел

# =================================================
# Clock shows h hours, m minutes and s seconds after midnight.

# Your task is to write a function which returns the time since midnight in milliseconds.

# from datetime import datetime, timedelta


# def past(h, m, s):
#     if not (0 <= h <= 23 and 0 <= m <= 59 and 0 <= s <= 59):
#         raise ValueError(
#             "Invalid input: Hours (0-23), Minutes (0-59), Seconds (0-59)")

#     today_midnight = datetime.combine(
#         datetime.now().date(), datetime.min.time())
#     current_time = datetime(today_midnight.year,
#                             today_midnight.month, today_midnight.day, h, m, s)

#     time_delta = current_time - today_midnight
#     return int(time_delta.total_seconds() * 1000)


"""
1. Перевіряємо чи всі вхідні параметри знаходяться в допустимому діапазоні. Якщо будь-який з них виходить за межі діапазону, функція генерує виняток ValueError

2. Створення об'єктів datetime:
 Створюється об'єкт datetime, який представляє північ поточного дня.
 Створюється об'єкт datetime, який представляє поточний час з заданими годинами, хвилинами та секундами.

3. Розрахунок різниці часу:
 Розраховується різниця між поточним часом і північчю за допомогою datetime.timedelta.

4. Перетворення в мілісекунди:
    Загальний час у секундах (з timedelta) множиться на 1000, щоб отримати результат у мілісекундах.
    
5.Повернення рез-ту

"""
