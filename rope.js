class Rope{
constructor(bodyA,bodyB,pin){
var op={
bodyA: bodyA,
bodyB: bodyB,
length:50,
stiffness:0.05
}
this.body=Matter.Constraint.create(op)
this.pin=pin
World.add(world,this.body)

}
display(){
var a=this.body.bodyA.position
var b=this.body.bodyB.position

line(a.x,a.y,b.x+this.pin,b.y)

}





}