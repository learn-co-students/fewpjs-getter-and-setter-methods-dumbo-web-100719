class Circle {
    constructor(radius){
        this.radius = radius;
    }
    
    get diameter(){
        return this.radius * 2
    }
    
    get circumference(){
        let pi = Math.PI
        return pi * this.diameter
    }

    get area(){
        let pi = Math.PI
        return pi * this.radius** 2
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2;
    }
    set circumference(circumference){
        let pi = Math.PI
        this.radius = (circumference/pi)/2
    }
}