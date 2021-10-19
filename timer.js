class Timer {
    constructor(root, initial_mins) {
        this.el = {
            minutes: document.querySelector(".timer__part--minutes"),
            seconds: document.querySelector(".timer__part--seconds"),
            control: document.querySelector(".timer__btn--control"),
            reset: document.querySelector(".timer__btn--reset")
        };
        //console.log(this.el);
        this.interval = null;
        this.remainingSeconds = 0;
        var inputMinutes;

        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            if (document.querySelector(".timer__input").value != "") {
                inputMinutes = document.querySelector(".timer__input").value;
            } else {
                inputMinutes = saved_default_mins;
            }
            
            if (inputMinutes < 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        });
    }

    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.remove("timer__btn--stop");
        } else {
            this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.remove("timer__btn--start");
        }
    }

    start() {
        if (this.remainingSeconds === 0) return;
        player.setVolume(saved_tasting_vol);

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds <= 0) {
                this.stop();
                this.alarm();
            }
        }, 1000);
        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.updateInterfaceControls();
        player.setVolume(saved_speaking_vol);
    }

    alarm() {
        var audio = new Audio("./alarm.wav");
        audio.play();
        player.setVolume(saved_speaking_vol);
    }
}