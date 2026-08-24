/* ===========================
   APS LBS ROBOKRITI 2026
   MAIN SCRIPT
=========================== */

/* MENU */

const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        menuOverlay.classList.toggle("active");

    });

}

/* COUNTDOWN */

const countdown = document.getElementById("countdown");

function updateCountdown(){

    const eventDate =
    new Date("September 2, 2026 00:00:00");

    const now = new Date();

    const gap = eventDate - now;

    if(gap <= 0){

        countdown.innerHTML =
        "EVENT IN PROGRESS";

        return;
    }

    const days =
    Math.floor(gap / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (gap % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (gap % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (gap % (1000 * 60))
        /
        1000
    );

    countdown.innerHTML = `
        ${days}D :
        ${hours}H :
        ${minutes}M :
        ${seconds}S
    `;
}

setInterval(updateCountdown,1000);

updateCountdown();

/* LOGO EASTER EGG */

const logo =
document.querySelector(".brand");

let clickCount = 0;

if(logo){

    logo.addEventListener("click",()=>{

        clickCount++;

        if(clickCount >= 5){

            window.location.href =
            "hidden/rk-core.html";

        }

        setTimeout(()=>{

            clickCount = 0;

        },3000);

    });

}

/* SCROLL PROGRESS */

const progressBar =
document.createElement("div");

progressBar.id = "progressBar";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight
    -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / height) * 100;

    progressBar.style.width =
    progress + "%";

});

/* BACK TO TOP BUTTON */

const topBtn =
document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* EVENT DAY MODE */

const today =
new Date();

const day =
today.getDate();

const month =
today.getMonth() + 1;

const year =
today.getFullYear();

if(
    day === 2 &&
    month === 9 &&
    year === 2026
){

    const heroTitle =
    document.querySelector(".hero h1");

    if(heroTitle){

        heroTitle.innerHTML =
        "APS LBS ROBOKRITI 2026 IS LIVE";

    }

}
