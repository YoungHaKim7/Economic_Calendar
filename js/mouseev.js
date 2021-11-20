const title = document.querySelector(".month__1");

title.addEventListener("mouseenter", function (event) {
    event.target.style.color = "purple";
    event.target.style.background = "white";
    setTimeout(function () {
        event.target.style.color = "";
        event.target.style.background = "";
    }, 1000);
}, false);

