class Stone{
    constructor(x,y,w,h){
        var options = {
			'restitution': 0.8,
			'friction': 0.9,
			'density': 12


		}
		
		this.body = Bodies.rectangle(x,y,w,h)
        World.add(world,this.body)
        this.w = w
        this.h = h

    }
    display(){
        push ();
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        angleMode(RADIANS)
        rectMode(CENTER);
		fill ("Black")
        rect(0,0,this.w,this.h)
        pop();
    }

    
}