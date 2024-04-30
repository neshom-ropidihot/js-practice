const video = {
    title: 'a',
    tags: ['aa', 'bb', 'cc'],
    showTags() {
        self = this;
        this.tags.forEach(function(item) {
            console.log(self.title, item)
        });
 
    }
}

video.showTags();



function playVideo() {
    console.log(this);
}

playVideo();
console.log("---------- 1 ----------");
playVideo.call({name: 'mohsen'});
console.log("---------- 2 ----------");
playVideo.apply({name: 'mohsen'});
console.log("---------- 3 ----------");
const fn = playVideo.bind({name: 'mohsen'});
fn();

console.log("---------- 4 ----------");

const video2 = {
    title: 'b',
    tags: ['aa', 'bb', 'cc'],
    showTags() {
        this.tags.forEach((item) => console.log(this ,item));
    }
}

video2.showTags();
