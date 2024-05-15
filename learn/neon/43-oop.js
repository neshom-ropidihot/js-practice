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

Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
}

function Square() {

}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

const c = new Circle();

const shapes = [
    new Circle(),
    new Square()
]

for(let s of shapes) {
    s.duplicate();
}