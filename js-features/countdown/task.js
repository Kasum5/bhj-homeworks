const timer = document.getElementById("timer");

function countdown() {
  let c = parseInt(timer.textContent--);

  if (c == 0){
    alert("Вы победили в конкурсе!");
    setInterval(id)
  }
}

 let id = setInterval(countdown,1000)
