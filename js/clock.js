const Nyclock = document.querySelector("h1#NyClock")
const clock = document.querySelector("h2#Clock")

function getClock() {
    const date =  new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const KrDate = new Date().toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', weekday: "long", hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' });
    const NyDate = new Date(date.getTime() - date.getTimezoneOffset() * -33303).toISOString().split("T")[0];
    const NyDate1 = new Date(date.getTime() - date.getTimezoneOffset() * -33303).toISOString().split("T")[1];
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `한국 ${KrDate}`;
    Nyclock.innerText =  `NewYork  ${NyDate}  ⏰   ${NyDate1} (EST)`;
}

getClock();
setInterval(getClock, 1000);