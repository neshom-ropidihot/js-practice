function Shape() {

}

Shape.prototype.duplicate = function() {
    console.log('duplicate Shape');
}

function Circle(radius) {
    this.radius = radius;

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
const c = new Circle(1);

console.log(s);
console.log(c);

// console.log(Shape.prototype);
// console.log(Circle.prototype);

// console.log(s.__proto__);
// console.log(c.__proto__);


