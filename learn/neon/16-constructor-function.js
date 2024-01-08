function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}


let circle1 = new Circle(3);
let circle2 = new Circle(30);

console.log(circle1);
console.log(circle2);