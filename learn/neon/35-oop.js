function Circle(radius) {
    this.radius = radius;
    // this.defaultLocation = {
    //     x:0,
    //     y:0
    // };
    let defaultLocation = {
        x:0,
        y:0
    };
    
    // this.compute = function() {
    //     // ...
    // }
    let compute = function() {
        // ...
    }
    this.draw = function() {
        compute();
        console.log('draw');
    }
}

const circle = new Circle(10);
console.log(circle);
