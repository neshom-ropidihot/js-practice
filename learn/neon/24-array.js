let numbers = [1,4,2,12];

console.log(numbers);

numbers.push(20);
console.log(numbers);

numbers.unshift(9,6);
console.log(numbers);

numbers.splice(1,0,-1,-6);
console.log(numbers);





console.log("----- part2 -----");


let numbers1 = [1,2,3,1,4];
console.log(numbers1);

console.log(numbers1.indexOf(3));
console.log(numbers1.indexOf(20));
console.log(numbers1.indexOf(1));
console.log(numbers1.indexOf(1,2));

console.log(numbers1.lastIndexOf(1));

if(numbers1.lastIndexOf(1) != -1) {
    console.log('find');
}
if(numbers1.lastIndexOf(100) != -1) {
    console.log('find');
}

if(numbers1.includes(3)) {
    console.log('includes');
}


let numbers2 = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];
console.log(numbers2);

let result = numbers2.find(function(item) {
    return item.id == 1;
});

console.log(result);





console.log("----- part3 -----");


let obj = [
    {id: 11, name: 'c'},
    {id: 22, name: 'd'},
];
console.log(obj);

result = obj.find(item => item.id == 1);
console.log(result);
result = obj.find(item => item.id == 22);
console.log(result);





console.log("----- part4 -----");

let numbers3 = [1,2,3,4];

console.log(numbers3);
last = numbers3.pop();
console.log(numbers3);
console.log(last);

numbers3 = [1,2,3,4];
console.log(numbers3);
first = numbers3.shift();
console.log(numbers3);
console.log(first);

numbers3 = [1,2,3,4];
console.log(numbers3);
result = numbers3.splice(2,1);
console.log(numbers3);
console.log(result);

numbers3 = [1,2,3,4];
console.log(numbers3);
result = numbers3.splice(2,2);
console.log(numbers3);
console.log(result);




console.log("----- part5 -----");

let numbers4 = [1,2,3,4];
let another = numbers4;

console.log(numbers4);
console.log(another);
numbers4 = [];
console.log(numbers4);
console.log(another);

numbers4 = [1,2,3,4];
another = numbers4;
numbers4.length = 0;
console.log(numbers4);
console.log(another);

numbers4 = [1,2,3,4];
console.log(numbers4);
another = numbers4;
console.log(another);
numbers4.splice(0, numbers4.length);
console.log(numbers4);
console.log(another);




console.log("----- part6 -----");

first = [1, 2, 3];
second = [4, 5, 6];

console.log(first);
console.log(second);

let concat = first.concat(second);

console.log(concat);

result = first.slice(0,2);
console.log(result);

result = first.slice(1,1);
console.log(result);


result = concat.slice(2,4);
console.log(result);


result = concat.slice(2);
console.log(result);

result = concat.slice();
console.log(result);



first = [{id: 1}];
second = [4, 5, 6];

concat = first.concat(second);
console.log(concat);

first[0].id = 10;
console.log(first);
console.log(concat);





console.log("----- part7 -----");

first = [1, 2, 3];
second = [4, 5, 6];

console.log(first);
console.log(second);

concat = [...first, ...second]; 

console.log(concat);

concat = [0, ...first, 0, ...second, 0]; 

console.log(concat);





console.log("----- part8 -----");

numbers = [1, 2, 3];

console.log(numbers);

for(number of numbers) {
    console.log(number);
}

console.log(numbers);

numbers.forEach(function(item) {
    console.log(item);
});

console.log(numbers);

numbers.forEach(item => console.log(item));

console.log(numbers);

numbers.forEach((item, index) => console.log('index => ',index , 'item', item));




console.log("----- part9 -----");

numbers = [1, 2, 3];

let join = numbers.join();
console.log(join);

join = numbers.join('');
console.log(join);

join = numbers.join('-');
console.log(join);
console.log(typeof(join));

let message  = "Hello World";
console.log(message);

result = message.split();
console.log(result);

result = message.split(' ');
console.log(result);

result = result.join('-');
console.log(result);




console.log("----- part10 -----");


numbers = [5,1, 0, 2, 3];
console.log(numbers);

numbers.sort();
console.log(numbers);


numbers.reverse();
console.log(numbers);

let person = [
    {id: 1, name:"Html"},
    {id: 2, name:"css"},
];

console.log(person);

person.sort(function(a, b) {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    console.log(nameA);
    console.log(nameB);
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

console.log(person);




console.log("----- part11 -----");

numbers = [5,1, 0, 2, 3];
console.log(numbers);

allPositive = numbers.every(function(item) {
    return item >= 0;
});

console.log(allPositive);


numbers = [5,1, -4, 2, 3];
console.log(numbers);

allPositive = numbers.every(function(item) {
    return item >= 0;
});

console.log(allPositive);

console.log(numbers);

listPositive = numbers.some(function(item) {
    return item >= 0;
});

console.log(listPositive);


numbers = [-1, -4, -2, -3];

listPositive = numbers.some(function(item) {
    return item >= 0;
});

console.log(listPositive);



console.log("----- part12 -----");

numbers = [1, -4, 2, -3];
console.log(numbers);


result = numbers.filter(item => item >= 0);

console.log(result);

let users =[
    {id: 1, name: 'mohsen', age: 35},
    {id: 2, name: 'farzaneh', age: 31},
    {id: 3, name: 'ali', age: 26},
    {id: 4, name: 'bahar', age: 29},
];

console.log(users);

result = users.filter( item => item.age > 29);

console.log(result);




console.log("----- part13 -----");

numbers = [1, 8, 2, 7];
console.log(numbers);

// result = numbers.map( function(item) {
//     return item * 2;
// });

result = numbers.map( item => item * 2);
console.log(result);


let products = ['html', 'css', 'js'];

result = products.map( item => `<li>${item}</li>`);

console.log(result);

result = result.join('');
// result = products.map( item => `<li>${item}</li>`).join('');
console.log(result);

result = `<ul>${result}</ul>`;
console.log(result);