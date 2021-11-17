const clock = document.querySelector("h2#clock")

function getClock() {
    const date =  new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const NyHours = String(date.getHours()-14).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `한국 ${hours}:${minutes}:${seconds} || NewYork(EST) ${NyHours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);