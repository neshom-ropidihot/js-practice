const person = {name: 'mohsen', age: 35};
const colors = ['red', 'blue', 'black']

for(let key in person) {
    console.log(key);
    console.log(person[key]);
}

for(let index in colors) {
    console.log(index);
    console.log(colors[index]);
}

for(let color of colors) {
    console.log(color);
}
