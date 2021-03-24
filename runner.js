class Runner {
    constructor(x,y,width,height) {

        var opt = {
            isStatic:true,
            'friction':11.2,
            'restitution':3,
            'density':1.5
        }

        this.body = Bodies.rectangle(x,y,width,height,opt);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;

        rectMode(CENTER);
        fill("gold");

        rect(pos.x,pos.y,30,30);
    }
}