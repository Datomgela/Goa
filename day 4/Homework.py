user_name = input("What's your name: ")

surname = input ("What's your surname: ")

age = input ("How old are you: ")

travel = input ("How many years do you want to time travel: ")

travel_time = (int(age) + int(travel))

print("He/She said his/her name is " + user_name + ". He/She said his/her surname is " + surname + ". He/She said his age is " + age + ". " + "He/She said he/she wants to travel through " + travel + " years" + ". He/She will be " + str(travel_time) + " years old." )