user_age = int(input ("Enter your age: "))

age_18 = 18

age_user_age = user_age < age_18

Dad_age = int(input("Enter your father's age: "))

age_60 = 60

age_60_Dad_age_user_age = user_age + Dad_age > age_60

print(age_user_age)
print(age_60_Dad_age_user_age)