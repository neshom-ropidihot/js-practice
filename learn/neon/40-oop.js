function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate Shape');
}

function Circle(radius, color) {
    this.radius = radius;
    Shape.call(this, color)

}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw');
}

Circle.prototype.duplicate = function() {
    console.log('duplicate');
}


const s = new Shape();
const c = new Circle(1, "red");

console.log(c);
