class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
    }
  
    marckup(selector) {
      const template = `
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
         `;
      document.querySelector(selector).insertAdjacentHTML('beforeend', template);
    }
  
    start() {
      this.marckup(this.selector);
      const intervalId = setInterval(() => {
        const delta = this.targetDate - Date.now();
        this.updateTimer(delta, intervalId);
      }, 1000);
    }
  
    updateTimer(time, intervalId) {
      if (time <= 0) {
        clearInterval(intervalId);
        return;
      }
  
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
      document.querySelector('[data-value="days"]').textContent = days;
      document.querySelector('[data-value="hours"]').textContent = hours;
      document.querySelector('[data-value="mins"]').textContent = mins;
      document.querySelector('[data-value="secs"]').textContent = secs;
    }
  
    pad(value) {
      return String(value).padStart(2, '0');
    }
  }
  
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Oct 11 2023 18:20:55'),
  });
  
  timer.start();