/* ====================================
   APS LBS ROBOKRITI 2026
   LOADER
==================================== */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }, 3000);

});
