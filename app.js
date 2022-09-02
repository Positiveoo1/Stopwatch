const CHANGE = document.querySelector('.main')
function one () {
    CHANGE.style.background = 'green'
}
function two () {
    CHANGE.style.background = 'black'
}
function three () {
    CHANGE.style.background = '#FEA600'
}

let sec = 00;
let hour = 00;
let OutputSec = document.querySelector('.sec')
let Outputhour = document.querySelector('.hour')
let btnSr = document.querySelector('.first')
let btnSt = document.querySelector('.second')
let btnR = document.querySelector('.third')
let Interval;
btnSr.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

btnSt.addEventListener('click', () => {
    clearInterval(Interval);
});

btnR.addEventListener('click', () => {
    clearInterval(Interval)
    hour = '00';
    sec = '00';
    OutputSec.innerHTML = sec;
    Outputhour.innerHTML = hour;
});
function startTime() {
    hour++;
    if(hour <= 9){
        Outputhour.innerHTML = '0' + hour;

    }

    if(hour > 9){
        Outputhour.innerHTML = hour;
    }

    if(hour > 99) {
        sec++;
        OutputSec.innerHTML = '0' + sec;
        hour = 0;
        Outputhour.innerHTML = '0' + hour;

    }

    if( sec > 9){
        OutputSec.innerHTML = sec
    }
}