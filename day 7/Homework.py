questions = "You will have small test in math try to get all questions correct: "

please = "Please don't use calculator (: "
print(questions)
print(please)

math_1 = int(input("6 * 5 = "))

math_2 = int(input("548 + 452 = "))

math_3 = int(input("100 / 5 = "))

math_4 = int(input("1546 - 547 = "))

answers = (math_1 == 30) and (math_2 == 1000) and (math_3 == 20) and (math_4 == 999)

print(answers)