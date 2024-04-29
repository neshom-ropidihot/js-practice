const person = {
    fname: 'mohsen',
    lname: 'tohid',
}

console.log(`${person.fname} ${person.lname}`);



const person1 = {
    fname: 'mohsen',
    lname: 'tohid',
    // fullname: function() {
    fullname() {
        return `${person.fname} ${person.lname}`;
    }
}

console.log(person1.fullname());

const person2 = {
    fname: 'neshom',
    lname: 'ropidihot',
    get fullName() {
        return `${person2.fname} ${person2.lname}`;
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.fname = parts[0];
        this.lname = parts[1];
    }
}

console.log(person2);
console.log(person2.fullName);
person2.fullName = 'ali tavafi';
console.log(person2.fullName);