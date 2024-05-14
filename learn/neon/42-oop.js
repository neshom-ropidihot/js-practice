function Shape() {
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate Shape');
}

function Circle() {
}

extend(Circle, Shape);

const c = new Circle();

Circle.prototype.duplicate = function() {
    // Shape.prototype.duplicate();
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}

console.log(c);
