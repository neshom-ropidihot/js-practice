const person = {
    fname: 'neshom',
    lname: 'ropidihot',
    get fullName() {
        return `${person2.fname} ${person2.lname}`;
    },
    set fullName(value) {
        // if(typeof(value) !== "string") {
        //     return;
        // }
        
        if(typeof(value) !== "string") {
            throw new Error('value is not a string');
        }
        
        const parts = value.split(" ");

        if(parts.length != 2) {
            throw new Error('enter a fname and lname');
        }
        this.fname = parts[0];
        this.lname = parts[1];
    }
}

try {
    // person.fullName = true;
    person.fullName = 'rezaAhmadi';
} catch(e) {
    console.log(e);
}
