function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));



function sum2(a, b) {
    return a + b;
}

console.log(sum2(1, 2, 3, 4));


function sum3(a) {
    return a + b;
}

// console.log(sum3(1, 2, 3, 4));  b is not defined


function sum4() {
    console.log(arguments);
}
sum4(1, 2, 3, 4, 5);

function sum5() {
    let total = 0;
    for(let value of arguments) {
        total += value;
    }
    return total;
}
console.log(sum5(1, 2, 3, 4, 5));


function sum6(a, b = 0) {
    return a + b;
}

console.log(sum6(12));