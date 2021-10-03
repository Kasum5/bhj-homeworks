const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

holesArray = [];

(function addHolles(holesArray) {
  const holes = document.getElementsByClassName('hole-name');
  for (let i = 1; i <= holes[0].childElementCount; ++) {
    const hole = document.getElementById(getHole(i));
    holesArray.push(hole.addEventListener('click', () => {
      hole.className.incudes('hole_has_mole') ?
        dead.textContent++;
      lost.textContent++;
    }))
  }
});

function isWinner() {
  const winner = 10;
  const loser = 5;

  if (Number(dead.textContent) == winner) {
    alert('Победа!');
    dead.textContent = 0;
    lost.textContent = 0;
  } else (Number(lost.textContent) == loser){
    alert('Вы проиграли!');
    dead.textContent = 0;
    lost.textContent = 0;
  };
};

let id = setInterval(() => {
  isWinner(dead, lost)
}, 100);

function getHole(index) {
  return `hole${index}`
};