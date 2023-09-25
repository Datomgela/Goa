import random 

crew_leaders = ['kruashvili', 'amiranashvili', 'tyeshelashvili', 'janezashvili', 'molodini', 'kereselidze', 'kurtanidze']

Random = random.choice(crew_leaders)
Random2 = random.choice(crew_leaders)
Random3 = random.choice(crew_leaders)

while Random == Random2 or Random == Random3 or Random2 ==  Random3:
    Random = random.choice(crew_leaders)
    Random2 = random.choice(crew_leaders)
    Random3 = random.choice(crew_leaders)

print(Random)
print(Random2)
print(Random3)