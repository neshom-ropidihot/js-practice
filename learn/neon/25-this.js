// console.log(window); // browser
// console.log(global); // node


const video = {
    title: 'a',
    paly() {
        console.log(this);
        console.log(this.title);
    }
}

video.paly();

console.log('-------- 1 ----------');

function videoFunction() {
    console.log(this);
}

videoFunction(); //global object

console.log('-------- 2 ----------');

function VideoConstructor() {
    this.title = 'abc',
    console.log(this);
    console.log(this.title);
    
}

const v = new VideoConstructor();

console.log('-------- 3 ----------');

const video2 = {
    title: 'b',
    tags: ['aa', 'bb', 'cc'],
    showTags() {
        // this.tags.forEach((item) => console.log(item));
        // this.tags.forEach((item) => console.log(this ,item));
        // this.tags.forEach(function(item) {
        //     console.log(this.title ,item)
        //     console.log(this ,item)
        // });
        // this.tags.forEach(function(item) {
        //     console.log(this.title ,item)
        //     console.log(this ,item)
        // }, this);
        this.tags.forEach(function(item) {
            console.log(this ,item)
            console.log(this.name ,item)
        }, {name:'ali'});
    }
}

video2.showTags();

console.log('-------- 4 ----------');