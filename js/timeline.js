/* ====================================
   APS LBS ROBOKRITI 2026
   TIMELINE REVEAL
==================================== */

const timelineItems =
document.querySelectorAll(
    ".timeline-item"
);

const timelineObserver =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add(
                    "active"
                );

            }

        });

    },

    {
        threshold:0.2
    }

);

timelineItems.forEach(item => {

    timelineObserver.observe(item);

});
