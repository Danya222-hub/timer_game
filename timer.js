const timer = document.getElementById("timer");
let min = 0;
let sec = 5;
// function tick() {
//     sec--
//     if (sec == 0) {

//         if (min > 0) {
//             min--
//             sec = 59
//         }
//     }
// }

function tick() {
    sec--
    if (sec == 0) {
        if (min == 0) {
            stop()
        }
        if (min > 0) {
            min--
            sec = 59
        }
    }
}
function stop() {
    clearInterval(interval)
    input.style.display = `none`
    hint.style.display = `none`
    ul.style.display = `none`
    question.style.display = `none`
    timer.style.display = `none`
    questionImg.src = `img/sad.svg`
    btnRetry.style.display = `block`

}
function render() {
    let s = sec;
    let m = min;
    if (s < 10) {
        s = "0" + s
    }
    if (m < 10) {
        m = "0" + m
    }
    timer.innerHTML = `${m}:${s}`
}
const interval = setInterval(() => {
    tick()
    render()
}, 1000);
