const durationInput = document.querySelector('#duration')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const circle = document.querySelector('#circle')
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)
const offsetVal = perimeter / 2

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter)
    },
    onComplete(){
        console.log('Timer Finished')
    }
}, circle);