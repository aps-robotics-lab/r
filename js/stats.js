/* ====================================
   APS LBS ROBOKRITI 2026
   STATS COUNTER
==================================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting)
                return;

            const counter =
            entry.target;

            const target =
            parseInt(
                counter.dataset.target
            );

            let current = 0;

            const increment =
            Math.max(
                1,
                Math.ceil(target / 100)
            );

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.textContent =
                    current;

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                    target.toLocaleString();

                }

            }

            updateCounter();

            counterObserver.unobserve(
                counter
            );

        });

    },

    {
        threshold: 0.3
    }

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});
