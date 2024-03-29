const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score;

function randomTime(min,max){
  return Math.round(Math.random() * (max-min) + min);
}

function randomHole(holes){
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  //console.log(holes)
  if(hole === lastHole){
    return randomHole(holes);
  }
  lasthole = hole;
  return hole;
}

function peep(){
  const time = randomTime(1000,2000);
  const hole = randomHole(holes);
  //console.log(time,hole)
  hole.classList.add('up');
  setTimeout(() =>{
    hole.classList.remove('up');
    if(!timeUp) peep();
  },time);
}

function startGame(){
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true ,10000)
}

function bonk(e){
  if(!e.isTrusted) return //cheater
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}


moles.forEach(mole => mole.addEventListener('click', bonk));