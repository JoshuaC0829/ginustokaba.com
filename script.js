const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById('seconds');


const newYears = '29 august 2022';

function countdown () {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date ();

     const seconds = (newYearsDate - currentDate) / 1000;

     const days = Math.floor(seconds / 3600 / 24);
     const hours = Math.floor(seconds / 3600) % 24;
     const minutes = Math.floor(seconds / 60)  % 60;
     const second = Math.floor(seconds) % 60;

     daysEl.innerHTML =days
     hoursEl.innerHTML = hours;
     minsEl.innerHTML = minutes;
     secondsEl.innerHTML = second;


     console.log(days, hours, minutes, second);
     
     

    
}

// initial call
countdown();

setInterval(countdown, 1000);
