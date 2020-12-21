const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine
const Constraint = Matter.Constraint

function setup(){
    canvas=createCanvas(windowWidth/2,windowHeight/1.5)
    engine=Engine.create()
    world=engine.world

    ball1=new pend(200,400,100)
    ball2=new pend(255,400,100)
    ball3=new pend(310,400,100)
    ball4=new pend(365,400,100)
    ball5=new pend(420,400,100)

    sling1=new Sling(ball1.body,{x:200,y:200})
    sling2=new Sling(ball2.body,{x:255,y:200})
    sling3=new Sling(ball3.body,{x:310,y:200})
    sling4=new Sling(ball4.body,{x:365,y:200})
    sling5=new Sling(ball5.body,{x:420,y:200})
}

function draw(){
    Engine.update(engine)
    background("white")

    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()

    sling1.display()
    sling2.display()
    sling3.display()
    sling4.display()
    sling5.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x : mouseX, y : mouseY})
}