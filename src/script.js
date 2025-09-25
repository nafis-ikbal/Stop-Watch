const showHours = document.querySelector("#hour");
const showMinutes = document.querySelector("#minute");
const showSeconds = document.querySelector("#sec");
const showMlSec = document.querySelector("#ml-sec");
const pauseBtn = document.querySelector("#pause");
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");

let timer = null;  //for holding interval id

//for time counting
let [mlSecs, secs, mins, hours] = [0, 0, 0, 0];

function stopWatch() {
  mlSecs++;
  showMlSec.innerHTML = String(mlSecs).padStart(2, '0');  //fill before with 0 if length less than 2

  if(mlSecs === 99) {  //use 99 because of prevent 3 digits rendering problem
    mlSecs = 0;
    secs++;
    showSeconds.innerHTML = String(secs).padStart(2, '0');

    if(secs === 60) {
      secs = 0;
      mins++;
      showMinutes.innerHTML = String(mins).padStart(2, '0');

      if(mins === 60) {
        mins = 0;
        hours++;
        showHours.innerHTML = String(hours).padStart(2, '0');
      }
    }
  }
}

// start stop-watch
function startCounting() {
  if(timer !== null) {
    clearInterval(timer);  //clear previous interval before start new interval
  }

  timer = setInterval(stopWatch, 10); ///it runs 99 times every 10 mlsecs (99*10 = 990 mlsecs ~ 1000ms)
}

startBtn.addEventListener("click", startCounting);

//pause stop-watch
function pauseCounting() {
  clearInterval(timer);
}

pauseBtn.addEventListener("click", pauseCounting);

//reset stop-watch
function resetCounting() {
  clearInterval(timer);
  [mlSecs, secs, mins, hours] = [0, 0, 0, 0];
  showMlSec.innerHTML = '00';
  showSeconds.innerHTML = '00';
  showMinutes.innerHTML = '00';
  showHours.innerHTML = '00';
}

resetBtn.addEventListener("click", resetCounting);