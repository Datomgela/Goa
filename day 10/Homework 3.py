your_age = int(input("Enter your age: "))

gender = input("Enter your gender(male or female): ")

if gender == ("male") or gender == ("female"):
    print("Great")
else :
    print("who the hell are you?")
if your_age >= 65:
    print("The pension belongs to you")
else:
    if your_age >= 60:
        print("The pension belongs to you")
    else:
        print("you aren't old enough to receive a pension")