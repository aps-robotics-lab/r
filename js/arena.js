/* ==========================
   ARENA CARD ANIMATION
========================== */

const cards =
document.querySelectorAll(".arena-card");

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateY =
            (x / rect.width - 0.5) * 12;

            const rotateX =
            (0.5 - y / rect.height) * 12;

            card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "translateY(0)";

        }
    );

});
