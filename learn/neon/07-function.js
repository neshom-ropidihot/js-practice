function print() {
    console.log("hello");
}

function print2(name) {
    console.log('hello ' + name);
}

function print3(name, age) {
    console.log('hello ' + name + ' you are ' + age + " years old.");
}

function print4(name, age) {
    console.log('hello ' + name + ' you are ' + age + " years old.");
}

function calc(number1, number2) {

    return number1 +  number2;

}

console.log(print);
console.log(typeof(print));

print();
print();
print();

print2("mohsen");
print2("ali");

print3("mohsen", 35);
print3("ali", 25);


let result = print4("bahar", 28);
console.log(result);

let result2 = calc(10, 2);

console.log(result2);

console.log(calc(1,9));


