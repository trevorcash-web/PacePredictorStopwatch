var currentReading;
var activeTimer;
var active;
var startTime;

const distance = 5000

const lapDist = 1609

var starting = 0;

//DOM selectors
button1 = document.querySelector('.button1');
button2 = document.querySelector('.button2');

const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');

let min;
let sec;
let mil;

//timing displays



button1.addEventListener('click', () =>{
    
    if(!(active)){
        active = true;
        startTime = new Date();
        //styling and button transistions
        button1.innerHTML = 'Stop';
        button1.style.backgroundColor = 'rgb(238, 54, 54)';
        button2.innerHTML = 'Lap';

        activeTimer = setInterval(startTimer, 50);

    }
    else{
        active = false;
        //styling and button transistions
        button1.innerHTML = 'Start';
        button1.style.backgroundColor = 'rgb(132, 207, 19)';
        button2.innerHTML = 'Reset';

        clearInterval(activeTimer);
        starting = time;


    }



});
button2.addEventListener('click', () =>{

    //reset button functionality
    if(!(active)){
        starting = 0;
        minutes.innerText = '00'
        seconds.innerText = '00'
        milliseconds.innerText = '00'
    }
    //lap button functionality
    else{
        
    }
});





function startTimer(){

    var currentTime = new Date();
    time = (currentTime - startTime)+starting;
    //get the time
    min = Math.floor(time/1000/60);
    sec = Math.floor((time/1000/60- min)*60 );
    mil = Math.floor(((time/1000)%1)*100);
    minutes.innerText = min.pad();
    seconds.innerText = sec.pad();
    milliseconds.innerText = mil.pad();




}


Number.prototype.pad = function() {
    var s = String(this);
    if(s.length == 1) {s = '0' + s}
    return s;
  }

