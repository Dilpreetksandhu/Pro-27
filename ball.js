  
class Ball{
    constructor(x,y){
    var options = {
        isStatic:true,
        restitution:0.8,
        friction:0.5,
        density:0.5
    }
    this.body = Bodies.circle(x,y,20,options);
    World.add(world,this.body)
    }
    display(){
        // var pos=this.body.position;
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,20)
    }
    
    
    
    
    
    
    
    
    }