class Timer {
    constructor(duration, startBtn, pauseBtn, callbacks, circle){
        this.duration = duration;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.circle = circle;
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    onDurationChange = () => {

    }

    tick = () => {
        if(this.timeRemaining <= 0){
            if(this.onComplete){
                this.onComplete();
            }
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 0.02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    }

    get timeRemaining () {
        return parseFloat(this.duration.value);
    }

    set timeRemaining (newValue) {
        this.duration.value = newValue.toFixed(2); 
    }
}