class Sling{
    constructor(body1,pointB){
       var options={
           bodyA:body1,
           pointB:pointB,
           stiffness:1,
           length:200
       }
      this.sling=Matter.Constraint.create(options)
      World.add(world,this.sling)
    }
    display(){
        var posA=this.sling.bodyA.position
        var posB=this.sling.pointB
        strokeWeight(3)
      line(posA.x,posA.y,posB.x,posB.y)
    }
}