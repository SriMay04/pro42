class Drops{

    constructor(x,y){
        var options={
            friction:0.1
        }
        
    
    this.r=5
    this.drop = Bodies.circle(x,y,5,options)

    World.add(world,this.drop);

    }
       
    

update(){
    if (this.drop.position.y>height){
        Matter.Body.setPosition(this.drop,{x:random(0,400),y: random(0,400)})
    }
}

display(){

    fill("#8EA0A4")
    ellipseMode(CENTER);
    ellipse(this.drop.position.x, this.drop.position.y, this.r, this.r)
}

}