/* ===========================
   APS LBS ROBOKRITI 2026
   LOADER SYSTEM
=========================== */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },4000);

});

/* TYPEWRITER EFFECT */

const typingText =
document.querySelector(".typing-text");

const text =
"INITIALIZING ROBOKRITI CORE...";

let index = 0;

if(typingText){

    typingText.innerHTML = "";

    const typingInterval =
    setInterval(() => {

        typingText.innerHTML +=
        text.charAt(index);

        index++;

        if(index >= text.length){

            clearInterval(typingInterval);

        }

    },60);

}
