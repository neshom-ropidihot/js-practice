function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const another = new Circle(3);

console.log(another);

const circle1 = new Function('radius',
 `  this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
`
) ;

const circel = new circle1(10);

console.log(circel);
