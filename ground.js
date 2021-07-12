class Ground {

    constructor(x,y){

this.body = Bodies.rectangle(x,y,1200,20,{isStatic:true})
World.add(world,this.body) 
    }

display(){

    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y, 1200,20)
}
}