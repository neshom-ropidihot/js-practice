function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const c1 = new Circle(2);
const c2 = new Circle(2);

console.log(Circle);
console.log(c1);
console.log(c2);

function Circle2(radius) {
    // instance member
    this.radius = radius;
}

// prototype member
Circle2.prototype.draw2 = function() {
    console.log('draw2');
}

// prototype member
Circle2.prototype.toString = function() {
    return 'circle with radius: ' +  this.radius;
}

const c21 = new Circle2(22);

function Circle3(radius) {
    this.radius = radius;
    this.move = function() {
        this.draw3();
        console.log('move');
    }
}

Circle3.prototype.draw3 = function() {
     console.log('draw33');
}

const c31 = new Circle3(30);



function Circle4(radius) {
    this.radius = radius;
    this.move = function() {
        console.log('move4');
    }
}

Circle4.prototype.draw4 = function() {
    this.move();
     console.log('draw44');
}

const c41 = new Circle4(40);