let now = new Date();

let date1 = new Date("May 11 2018 09:01");
let date2 = new Date(2022,0,10,23,12);

console.log(now);
console.log(date1);
console.log(date2);

console.log(now.getDate());
console.log(now.getDay());
console.log(now.toDateString());
console.log(now.toISOString());


console.log(date1);
console.log(date1.setDate(20));
console.log(date1.toDateString());
console.log(date1.toISOString());

console.log(date1.setFullYear(1990));
console.log(date1.toISOString());
