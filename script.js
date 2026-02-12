const attemptTemplate = document.getElementById("attempt")
const input = document.getElementById("number")
const ul = document.getElementById("attempts")
const hint = document.getElementById(`hint`)
const question = document.getElementById(`question`)
const questionImg = document.getElementById(`question_img`)
const btnRetry = document.getElementById(`btnRetry`)
const rand = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const lastAttempts = []
const question_big = document.getElementById(`question_big`)

function getStatus() {
  const diff = Math.abs(rand - input.value);
  console.log(diff);
  if (diff == 0) {
    win()
    
    return "correct"
  } else if (diff <= 3) {
    return "boiling"
  } else if (diff <= 4) {
    return "hot"
  } else if (diff <= 10) {
    return "warm"
  } else if (diff <= 25) {
    return "cool"
  } else if (diff <= 40) {
    return "cold"
  } else if (diff <= 60) {
    return "frozen"
  }
}
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && input.value != "") {
    const li = attemptTemplate.content.cloneNode(true);
    const attemptNumber = li.getElementById("attempt_number")
    attemptNumber.innerText = input.value
    
    const attemptStatus = li.getElementById("attempt_status")
    attemptStatus.classList.add(getStatus())
    attemptStatus.innerText = getStatus()
    ul.append(li);
  }
})

console.log(rand)
btnRetry.onclick = function() {
    window.location.reload()
}
function win() {
    clearInterval(interval)
    input.style.display = `none`
    hint.style.display = `none`
    ul.style.display = `none`
    question.style.display = `none`
    timer.style.display = `none`
    questionImg.src = `img/cup.svg`
    btnRetry.style.display = `block`
    btnRetry.classList.add(`bntRetry_tgl`)
    question_big.classList.add(`bntRetry_tgl`)
}