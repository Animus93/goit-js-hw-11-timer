const body = document.querySelector('body');

class CountdownTimer {
    constructor(selector, targetData){
        this.selector = selector;
        this.targetData = Number(new Date (targetData));
    }

    get residue() {
        return this._residue = Number(new Date (this.targetData)) - Number(new Date())
    }

    days(){
        return Math.floor(this.residue / (1000 * 60 * 60 * 24));
    }
    hours(){
        return Math.floor((this.residue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }
    mins(){
        return Math.floor((this.residue % (1000 * 60 * 60)) / (1000 * 60));
    }
    secs(){
        return Math.floor((this.residue % (1000 * 60)) / 1000);
    }
    start(){
        let timerID = null;
        if(timerID){
            return;
        };
        body.insertAdjacentHTML('afterbegin', `
                    <div class="timer" id="timer-1">
            <div class="field">
                <span class="value" data-value="days">00</span>
                <span class="label">Days</span>
            </div>

            <div class="field">
                <span class="value" data-value="hours">00</span>
                <span class="label">Hours</span>
            </div>

            <div class="field">
                <span class="value" data-value="mins">00</span>
                <span class="label">Minutes</span>
            </div>

            <div class="field">
                <span class="value" data-value="secs">00</span>
                <span class="label">Seconds</span>
            </div>
            </div>`
        );
        const values = {
        days: document.querySelector('[data-value="days"]'),
        hours: document.querySelector('[data-value="hours"]'),
        mins: document.querySelector('[data-value="mins"]'),
        secs: document.querySelector('[data-value="secs"]'),
        }
        timerID = setInterval(() => {
            values.days.textContent =  String(this.days()).padStart(2,'0');
            values.hours.textContent = String(this.hours()).padStart(2,'0');
            values.mins.textContent = String(this.mins()).padStart(2,'0');
            values.secs.textContent = String(this.secs()).padStart(2,'0');
        }, 1000);
    }


};

const newTimer = new CountdownTimer('#timer-1', 'Aug 11, 2023');

newTimer.start();


