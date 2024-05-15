// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log("draw");
//     }
// }

//  constructor function convert to class

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.log('move');
        }
    }
    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);

console.log(c);