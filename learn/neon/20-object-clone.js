let circle = {
    radius : 1,
    draw() {
        console.log("draw");
    }
}

console.log(circle);


let another = {};

for(let key in circle) {
    another[key] = circle[key];
}

console.log(another);


circle.radius = 2;

console.log(circle);



let another1 = Object.assign(circle);
console.log(another1);



let another2 = Object.assign({color:'red'}, circle);
console.log(another2);



let another3 = {...circle};
console.log(another3);



let another4 = {color: 'red', ...circle, active: true};
console.log(another4);