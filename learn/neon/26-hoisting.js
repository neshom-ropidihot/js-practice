walk();
function walk() {
    console.log('run');
}
walk();




// run();  Cannot access 'run' before initialization

let run = function() {
    console.log('run run');
};

run();