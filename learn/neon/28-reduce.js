const numbers = [1, -1, 2, 3];
sum = 0;

for(n of numbers) {
    sum += n;
}

console.log(sum);

sum = 0;

for(n in numbers) {
    sum += numbers[n];
}

console.log(sum);

sum = 0;
numbers.forEach(function(v) {
    sum += v;
})
console.log(sum); 


sum = numbers.reduce(function(total, value) {
    return total + value;
}, 0);

console.log(sum);