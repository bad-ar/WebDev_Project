//select DOM elements
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopbtn'); 
let startBtn = document.getElementById('startbtn');
let resetBtn = document.getElementById('resetbtn'); 

//Variables to track time
let msec = 0;
let secs = 0;
let mins = 0;

//Variable to store setInterval reference
let timerId = null;

//Start Button click Event
startBtn.addEventListener('click' , function(){
    //If already running .clear previous interval to avoid multiple timer
    if(timerId !== null){
        clearInterval(timerId);
    }
    //start a new interval timer that runs every 10 milliseconds
    timerId = setInterval(startTimer,10);
});

//Stop Button click Event
stopBtn.addEventListener('click' , function(){
    clearInterval(timerId);
}
);

//Reset Button click Event
resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = '00 : 00 : 00';

    //reset all time varible to 0
    msec = secs = mins = 0;
})


//timer logic function
function startTimer(){
    msec++;
    if(msec === 100){
        msec = 0;
        secs++;
        if(secs === 60){
            secs = 0;
            mins++;

        }   
    }
    let msecString = msec < 10?'0'+msec :msec;
    let secsString = secs < 10?'0'+secs :secs;
    let minString = mins < 10?'0'+mins :mins;
    timerDisplay.innerHTML =  minString + " : " + secsString + " : " + msecString 
}