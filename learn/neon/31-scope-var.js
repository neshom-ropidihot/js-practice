const message = 'hi';
console.log(message);

const color = 'red';

{const message1 = 'hi';}
// console.log(message1);  message1 is not defined

function start() {
    const message = 'hii';
    console.log(message);
    if(true) {
        const another = "hi2";
    }
    // console.log(another); another is not defined
    for(let i=0; i < 5 ; i++) {
        console.log(i);
    }
    // console.log(i); i is not defined
    console.log(color);
}

function stop() {
    const message = 'hi3';
    console.log(message);
    const color = 'blue';
    console.log(color);
}

start();
stop();

for(var i=0; i< 3; i++) {
    console.log(i);
}

console.log(i); // not error