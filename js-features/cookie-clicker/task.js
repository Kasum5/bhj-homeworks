const image = document.getElementById("cookie");
image.onclick = function() {
  const clicker = document.getElementById("clicker__counter");
  let a = parseInt(clicker.textContent++);

  if (a % 2 == 0) {
     image.width = 250;
  } else {
     image.width = 190;
  }
    
}