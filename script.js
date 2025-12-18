const input = document.getElementById("number")
const ul = document.getElementById("attempts")
const rand = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const lastAttempts = []

function getStatus() {
  const diff = Math.abs(rand - input.value);
  console.log(diff);
  if (diff == 0) {
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
  if (event.key === "Enter") {
    lastAttempts.push(
      { attempt: input.value, status: getStatus() }
    )
    render()
  }
})
console.log(rand)
function render(params) {
  ul.innerHTML = ""
  for (const  item of lastAttempts ) {
    const li = document.createElement("li")
    li.innerText = item.attempt + item.status
    ul.append(li)
  console.log(item)  
  }
}