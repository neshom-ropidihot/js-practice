function Circle(radius) {
    this.radius = radius;
    this.move = function() {
        console.log("draw");
    }
}

Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);

console.log(c1);

// return  instance member 
console.log(Object.keys(c1));

// return all member (instance(own) and prototype)
for(let key in c1) {
    console.log(key);
}

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('move'));
console.log(c1.hasOwnProperty('draw'));
console.log(c1.hasOwnProperty('aaaaaaa'));