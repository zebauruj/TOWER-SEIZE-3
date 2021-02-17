class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.4,
        'friction':0.0
        //'density':1.0
    }
    this.Visiblity=255;
    this.width = 30;
    this.height = 40;
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.score=false;
    
    World.add(world, this.body);
  }
  display(){
    //console.log(this.Visiblity);
   
    if(this.body.speed <4){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    //strokeWeight(4);
    //stroke("green");
    fill(random(20,250),random(50,170),random(100,200));
    rect(0, 0, this.width, this.height);
    pop();
  }
  else{
    if(!score){
      score+=100;
     // score=true;
    }
    World.remove(world, this.body);
    push();
    this.visiblity = this.visiblity -5;
    //tint(255,this.Visiblity);
    pop();
  }
}
/*
score(){
  if (this.Visiblity < 0 && this.Visiblity > -50){
    score++;
    console.log(this.Visiblity);
  }
}*/

}
