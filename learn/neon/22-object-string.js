let  message = " Hello world";

console.log(typeof(message));

const another = new String("hello");
console.log(typeof(another));

console.log(message.length);
console.log(message[1]);
console.log(message.includes('w'));
console.log(message.includes('h'));
console.log(message.includes('H'));
console.log(message.startsWith('He'));
console.log(message.endsWith('lo'));
console.log(message.indexOf('l'));
console.log(message.indexOf('world'));
console.log(message.indexOf('z'));
console.log(message.replace('world', 'mohsen'));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());

message = " Hello \"Neshom";
console.log(message);

message = " Hello \n Neshom";
console.log(message);

message = "Hello Neshom";


console.log(message.split(' '));


// template literal

message = `
Hello ' "
mohsen`;

console.log(message);

let name = 'mohsen';
message = `hello ${name} !`;

console.log(message);