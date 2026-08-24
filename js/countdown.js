/* ====================================
   APS LBS ROBOKRITI 2026
   COUNTDOWN TIMER
==================================== */

// Update this date when finalized
const eventDate = new Date(
    "September 2, 2026 09:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance =
    eventDate - now;

    const days =
    Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000 * 60)) / 1000
    );

    const dayEl =
    document.getElementById("days");

    const hourEl =
    document.getElementById("hours");

    const minuteEl =
    document.getElementById("minutes");

    const secondEl =
    document.getElementById("seconds");

    if (
        dayEl &&
        hourEl &&
        minuteEl &&
        secondEl
    ) {

        dayEl.textContent =
        String(days).padStart(2, "0");

        hourEl.textContent =
        String(hours).padStart(2, "0");

        minuteEl.textContent =
        String(minutes).padStart(2, "0");

        secondEl.textContent =
        String(seconds).padStart(2, "0");

    }

    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById(
            "countdown"
        ).innerHTML =
        "<h3>🚀 ROBOKRITI HAS BEGUN!</h3>";

    }

}

updateCountdown();

const timer =
setInterval(
    updateCountdown,
    1000
);
