function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw");
        }
    }
}

let circle1  = createCircle(1);
let circle2  = createCircle(2);

console.log(circle1);
console.log(circle2);
console.log(circle2.radius);
