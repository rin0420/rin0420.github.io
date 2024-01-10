//231206.js
var clicks =0;
function increment(){
    clicks = clicks + 1;
    counter.innerHTML = clicks;
}
function reset(){
    clicks = 0;
    counter.innerHTML = clicks
}
function autoClick() {
    var timer = setInterval(() => {
        increment();
    },1000 );
}