let circle = {
    radius : 1,
    draw() {
        console.log("draw");
    }
}

console.log(circle);



for(let key in circle) {
    console.log(key);
    console.log(circle[key]);
}

// TypeError: circle is not iterable

// for(let key of circle) {
//     console.log(key);
// }



let circelKeys = Object.keys(circle);

for(key of circelKeys) {
    console.log(key);
    // console.log(circelKeys[key]); undefined
}



let circelValue = Object.values(circle);

for(let value of circelValue) {
    console.log(value);
}



let circelArray = Object.entries(circle);

console.log(circelArray);

if( 'radius' in circle) {
    console.log("true");
}
if( 'color' in circle) {
    console.log("true");
}