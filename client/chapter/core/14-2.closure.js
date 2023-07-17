


function earth(){
    let water = true;
    let gravity = 9.8;

    return function tiger (value){
        gravity = value;
        console.log( gravity );
    }
}
const ufo = earth();
ufo(5);

