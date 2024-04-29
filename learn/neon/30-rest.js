function sum(...arguments) {
    // let total = 0;
    // for(arg of arguments) {
    //     total += arg;
    // }
    // return total;
    console.log(arguments);
    return arguments.reduce((total, value) => total + value)
}

console.log(sum(4, 2, 3));



function calc(discount, ...args) {
    const total =  args.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(calc(0.5,15, 5));