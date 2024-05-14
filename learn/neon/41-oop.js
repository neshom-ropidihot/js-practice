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

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw');
}

Circle.prototype.duplicate = function() {
    console.log('duplicate');
}


function Squre(size) {
    this.size = size;
}
// Squre.prototype = Object.create(Shape.prototype);
// Squre.prototype.constructor = Squre;


function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Circle, Shape);
extend(Squre, Shape);

const s = new Shape();
const c = new Circle(1, "red");
const sq = new Squre(10);

console.log(sq);
