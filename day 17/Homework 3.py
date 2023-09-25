#3) ვისი სახელიც "ი"-ზე მთავრდება, დაუპრინტეთ გვერდით "cool"
import random

members = ["Alexandre Katsarava","Dato Jachvadze","Dato Mgeladze","Davit Janashia","Gabriel Gogadze","Gabrieli Molodini","Giorgi Gelashvili","Ilia Wiklauri","Muhammedali Mamedov","Nini Nozadze","Sandro Bochorishvili","Sandro Oqropiridze","Vano Motiashvili","Erekle Gochitashvili","Lasha Wamalaidze","Nika Chochia"]

Random = random.choice(members)
Random2 = random.choice(members)
Random3 = random.choice(members)

if Random == Random2 or Random == Random3 or Random2 == Random3:
    print()