const day_1_box = document.getElementById('day-1-box');
const day_2_box = document.getElementById('day-2-box');

const hour_1_box = document.getElementById('hour-1-box');
const hour_2_box = document.getElementById('hour-2-box');

const minute_1_box = document.getElementById('minute-1-box');
const minute_2_box = document.getElementById('minute-2-box');

const sec_1_box = document.getElementById('sec-1-box');
const sec_2_box = document.getElementById('sec-2-box');

const dday = new Date(2024, 6, 21, 14, 30, 0);


function timer(){
    const now = new Date();
    const timeGap = dday - now

    if (timeGap <= 0) {

        clearInterval(countdownInterval);
        const d_day_box = document.getElementById("d-day");
        d_day_box.style.display = 'none';
    }

    const remainDay = Math.floor(timeGap / (1000 * 60 * 60 * 24));

    const remainHours   = Math.floor(timeGap / (1000 * 60 * 60) % 24);
    const remainMinutes = Math.floor(timeGap / (1000 * 60) % 60);
    const remainSeconds = Math.floor(timeGap / (1000) % 60);

    // console.log(remainDay)

    day_1_box.innerText = String(Math.floor(remainDay / 10))
    day_2_box.innerText = String(remainDay % 10)

    hour_1_box.innerText = String(Math.floor(remainHours / 10))
    hour_2_box.innerText = String(remainHours % 10)

    minute_1_box.innerText = String(Math.floor(remainMinutes / 10))
    minute_2_box.innerText = String(remainMinutes % 10)

    sec_1_box.innerText = String(Math.floor(remainSeconds / 10))
    sec_2_box.innerText = String(remainSeconds % 10)
}

let countdownInterval = setInterval(timer, 1000)