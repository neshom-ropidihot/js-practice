console.log("====== 1 ======");

let person = {
    name: "mohsen",
};

console.log(person);

console.log("====== 2 ======");

let objectBase = Object.getPrototypeOf(person);

console.log(objectBase);

console.log("====== 3 ======");

let att = Object.getOwnPropertyDescriptor(objectBase, "toString");

console.log(att);

console.log("====== 4 ======");


// person.name = "ali";

Object.defineProperty(person, "name", {
    writable: false, 
});

person.name = "ali";
console.log(person);

console.log("====== 5 ======");

Object.defineProperty(person, "name", {
    writable: false, 
    enumerable: false,
    
});

console.log(person);