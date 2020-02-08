const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if(secondsDegrees === 90 ){
    secondHand.style.transition = `none`;
  }else{
    secondHand.style.transition = `all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)`;
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegress = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegress}deg)`;

  const hour = now.getHours();
  const hourDegress = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegress}deg)`;

}

setInterval(setDate, 1000);