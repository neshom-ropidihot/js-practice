let x = 20;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(x++);
console.log(x);
console.log(++x);
console.log(x--);
console.log(x);
console.log(--x);


x += 4; // x = x + 4;
console.log(x);

x -= 4;
console.log(x);

x *= 4;
console.log(x);

x /= 4;
console.log(x);


console.log(x > 1);
console.log(x < 1);
console.log(x >= 20);
console.log(x <= 20);
console.log(x == 20);
console.log(x != 20);
x = '20';
console.log(x === 20);


let auth = true;
// auth = false;
let buttonTxt = auth == true ? 'dashboard' : 'login';
console.log(buttonTxt);


console.log(true && true);
console.log(true && false);

console.log(true || true);
console.log(true || false);

console.log(true && true && true);
console.log(true && false && true);

console.log(true || true || true);
console.log(true || false || true);

let productCount = 3;
let productPrice = 1000;
let credit = 1200;
let buy = productCount > 0 && credit >= productPrice;
console.log(buy);
console.log(!buy);


// Falsy => false undefined null 0 "" '' NaN
// Truthy =>  true 1 -2 "asd" 'a'

