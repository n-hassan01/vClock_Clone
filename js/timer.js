function edit(){
  document.querySelector('.edit-timer').style.display = 'flex';
}

let cancel = () => document.querySelector('.edit-timer').style.display = 'none';

let start = document.querySelector(".edit-start");
let reset = document.querySelector(".reset");

let hour = document.getElementById("hour-input");
let min = document.getElementById("minute-input");
let sec = document.getElementById("second-input");

let displayHr = document.getElementById("hour-value");
let displayMin = document.getElementById("minute-value");
let displaySec = document.getElementById("second-value");

// store a reference into the variable
let startTimer = null;

function clearTimer(){
  clearInterval(startTimer);
}

function timer(){
  if(hour.value == 0 && min.value == 0 && sec.value == 0){
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
  }
  else if(sec.value != 0){
    
    sec.value--;

    displayHr.innerHTML = hour.value < 10 ? '0' + hour.value : hour.value;
    displayMin.innerHTML = min.value < 10 ? '0' + min.value : min.value;
    displaySec.innerHTML = sec.value < 10 ? '0' + sec.value : sec.value;
    // displaySec.innerHTML = sec.value;
    // displayMin.innerHTML = min.value;
    // displayHr.innerHTML = hour.value;

  }
  else if(min.value != 0 && sec.value == 0){
    sec.value = 59;
    min.value--;

    displayHr.innerHTML = hour.value < 10 ? '0' + hour.value : hour.value;
    displayMin.innerHTML = min.value < 10 ? '0' + min.value : min.value;
    displaySec.innerHTML = sec.value < 10 ? '0' + sec.value : sec.value;
    // displaySec.innerHTML = sec.value;
    // displayMin.innerHTML = min.value;
    // displayHr.innerHTML = hour.value;
  }
  else if(hour.value != 0 && min.value == 0){

    min.value = 60;
    hour.value--;

    displayHr.innerHTML = hour.value < 10 ? '0' + hour.value : hour.value;
    displayMin.innerHTML = min.value < 10 ? '0' + min.value : min.value;
    displaySec.innerHTML = sec.value < 10 ? '0' + sec.value : sec.value;
    // displaySec.innerHTML = sec.value;
    // displayMin.innerHTML = min.value;
    // displayHr.innerHTML = hour.value;

  }
  return;
}


start.addEventListener('click', function(){
  function startInterval(){
    // countStart.disabled = true;
    startTimer = setInterval(function(){
      timer();
    }, 1000)
  }
  startInterval();
  document.querySelector('.edit-timer').style.display = 'none';
})

reset.addEventListener('click', function(){
  hour.value = 0;
  min.value = 0;
  sec.value = 0;

  displaySec.innerHTML = '0' + sec.value;
  displayMin.innerHTML = '0' + min.value;
  displayHr.innerHTML = '0' + hour.value;

  clearTimer();
})