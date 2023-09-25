from turtle import *
#we want to paint a house
def saxli():
    speed(7)
    width(7)
    color("blue")
    for i in range(4):

        forward(200)
        left(90)
#step1: draw a square 

saxli()
#end of square

#drawing a door
forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

#drawing roof
penup()
goto(200,200)
pendown()
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#left
color("blue")
left(30)
forward(80)
left(90)
forward(50)
right(90)
forward(70)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(20)
left(90)
forward(25)
left(90)
forward(70)

#right
penup()
goto(150,120)
pendown()
color("blue")
left(90)
forward(50)
right(90)
forward(70)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(20)
left(90)
forward(25)
left(90)
forward(70)
penup()
goto(150,120)
pendown()
forward(20)
#end house

exitonclick()