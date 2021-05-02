class launch {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
        fly(){
            this.launch.bodyA=null
        }

        attach(bodyA){
            this.launch.bodyA=bodyA;
        }
    display(){
        if(this.launch.bodyA !== null){
        var pointA = this.launch.bodyA.position;
        var pointB = this.launch.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}