def Triangle(side_1,side_2,side_3):
    perimeter = side_1 + side_2 + side_3
    print("Perimeter of a triangle: " , perimeter)

page1 = float(input("Write the length of the triangle's first side: "))
page2 = float(input("Write the length of the triangle's second side: "))
page3 = float(input("Write the length of the triangle's third side: "))
Triangle(page1, page2, page3)