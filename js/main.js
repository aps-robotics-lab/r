/* ====================================
   APS LBS ROBOKRITI 2026
   MAIN INTERACTIVITY
==================================== */

/* ==========================
   HAMBURGER MENU
========================== */

const menuBtn =
document.getElementById("menuBtn");

const menuOverlay =
document.getElementById("menuOverlay");

if (menuBtn && menuOverlay) {

    menuBtn.addEventListener("click", () => {

        menuOverlay.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

/* ==========================
   CLOSE MENU ON LINK CLICK
========================== */

const menuLinks =
document.querySelectorAll("#menuOverlay a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuOverlay.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

/* ==========================
   SCROLL PROGRESS BAR
========================== */

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    if (progressBar) {

        progressBar.style.width =
        progress + "%";

    }

});

/* ==========================
   BACK TO TOP BUTTON
========================== */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "active"
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});

/* ==========================
   NAVBAR BACKGROUND
========================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
        "rgba(0,0,0,0.85)";

    } else {

        navbar.style.background =
        "rgba(0,0,0,0.6)";

    }

});

/* ==========================
   EASTER EGG
========================== */

const logo =
document.querySelector(".brand img");

if (logo) {

    let clicks = 0;

    logo.addEventListener("click", () => {

        clicks++;

        if (clicks === 5) {

            alert(
                "🚀 ROBOKRITI SECRET MODE ACTIVATED!"
            );

            document.body.style.filter =
            "hue-rotate(25deg)";

            setTimeout(() => {

                document.body.style.filter =
                "none";

            }, 4000);

            clicks = 0;

        }

    });

}
