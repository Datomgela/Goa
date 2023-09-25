name = "დათო მგელაძე"
consonants = 0

for i in range(0,len(name)):
    char = (name[i])
    if char == "ბ" or char == "გ" or char == "დ" or char == "ვ" or char == "ზ" or char == "თ" or char == "კ" or char == "ლ" or char == "მ" or char == "ნ" or char == "პ" or char == "ჟ" or char == "რ" == char == "ს" or char == "ტ" or char == "ფ" or char == "ქ" or char == "ღ" or char == "ყ" or char == "შ" or char == "ჩ" or char == "ც" or char == "ძ" or char == "წ" or char == "ჭ" or char == "ხ" or char == "ჯ" or char == "ჰ":
        consonants += 1
print(consonants)