#1)შეიქმნას რაზმის წევრების სია, ვისს სახელ და გვარში 2-ზე მეტი "ი" არის,გაუდიდდეს პირველი ასო და შევიდეს ახალ სიაში "supersia"
detachments=["dato mgeladze","vano motiashvili","davit janashia","aleqsandre katsarava","lasha wamalaidze","ilia wiklauri","nini nozadze","nika chochia","gabriel gogadze","sandro bochorishvili","dato jachvadze","giorgi gelashvili","muhammedali mamedov","sandro oqropiridze","erekle gochitashvili"]
superlist = []
i_count = 0
for element in detachments:
    i_count = 0
    for char in element:
        if char == "i":
            i_count += 1
    if i_count > 2:
        superlist.append(element.capitalize())
print(superlist)