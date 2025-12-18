const timer = document.getElementById("timer");
let hour = 0;
let min = 3;
let sec = 1;



function tick() {
    sec--
    if (sec == 0) {

        if (min > 0) {
            min--
            sec = 59
        }
        if (min == 0) {
            hour--
            min = 59
        }
    }
}
function render() {
    let s = sec;
    let m = min;
    let h = hour;
    if (s < 10) {
        s = "0" + s
    }
    if (m < 10) {
        m = "0" + m
    }
    if (h < 10) {
        h = "0" + h
    }
    timer.innerHTML = `${h}:${m}:${s}`
}
setInterval(() => {
    tick()
    render()
}, 1000);