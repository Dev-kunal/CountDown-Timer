console.log("This is Script");
const newYr = "1 jan 2021";

const daysEl = document.getElementById("daysEl");
const hrsEl = document.getElementById("hrsEl");
const minEl = document.getElementById("minEl");
const secEl = document.getElementById("secEl");


function countDown() {
    const newYrDate = new Date(newYr);
    const currentDate = new Date();
    const totalSec = (newYrDate - currentDate) / 1000;
    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const mins = Math.floor(totalSec / 60) % 24;
    const seconds = Math.floor(totalSec) % 60;

    daysEl.innerHTML = setFormat(days);
    hrsEl.innerHTML = setFormat(hours);
    minEl.innerHTML = setFormat(mins);
    secEl.innerHTML = setFormat(seconds);

}
setInterval(countDown, 1000);

function setFormat(time) {
    return time < 10 ? `0${time}` : time;
}