class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }

    static parse(str) { 
        // console.log('parse');
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const c = new Circle(1);

console.log(c);

// Circle.parse();
const cir = Circle.parse('{"radius" : 10}');
console.log(cir);