#3) თქვენი რაზმელების სიიდან, ტოპ 2 ყველაზე გრძელგვარიანი შეაგდეთ ახალ სიაში და დაპრინტეთ
squad = ["Dato Jachvadze", "Dato Mgeladze", "Davit Janashia", "Gabrieli Molodini", "Giorgi Gelashvili", "Ilia Wiklauri", "Muhammedali Mamedov", "Nini Nozadze", "Sandro Bochorishvili", "Sandro Oqropiridze", "Vano Motiashvili", "Erekle Gochitashvili", "Lasha Tsamalaidze", "Nika Chochia"]

Top_2 = []
max_len = 0
for element in squad:
    if len(element) > max_len:
        max_len = len(element)
        top = element
Top_2.append(top)
squad.remove(top)

max_len = 0
for element in squad:
    if len(element) > max_len:
        max_len = len(element)
        top = element
Top_2.append(top)
squad.remove(top)

print(Top_2)