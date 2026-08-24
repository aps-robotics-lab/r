/* ======================
   COUNTER ANIMATION
====================== */

const counters =
document.querySelectorAll(".counter");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            +counter.dataset.target;

            let count = 0;

            const increment =
            target / 100;

            const update = () => {

                count += increment;

                if(count < target){

                    counter.innerText =
                    Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText =
                    target;

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    observer.observe(counter);

});
