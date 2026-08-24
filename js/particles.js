/* ====================================
   APS LBS ROBOKRITI 2026
   PARTICLE ENGINE
==================================== */

const hero = document.querySelector(".hero");

if(hero){

    const canvas = document.createElement("canvas");

    canvas.id = "particleCanvas";

    hero.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function resizeCanvas(){

    canvas.width = hero.clientWidth;
    canvas.height = hero.clientHeight;

}

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const particleCount =
    window.innerWidth < 768 ? 40 : 100;

    const particles = [];

    class Particle{

        constructor(){

            this.x =
            Math.random() * canvas.width;

            this.y =
            Math.random() * canvas.height;

            this.radius =
            Math.random() * 2 + 1;

            this.speedX =
            (Math.random() - 0.5) * 0.5;

            this.speedY =
            (Math.random() - 0.5) * 0.5;

        }

        update(){

            this.x += this.speedX;
            this.y += this.speedY;

            if(this.x < 0 || this.x > canvas.width){

                this.speedX *= -1;

            }

            if(this.y < 0 || this.y > canvas.height){

                this.speedY *= -1;

            }

        }

        draw(){

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
            "#D4AF37";

            ctx.fill();

        }

    }

    for(let i=0;i<particleCount;i++){

        particles.push(new Particle());

    }

    function connectParticles(){

        for(let a=0;a<particles.length;a++){

            for(let b=a;b<particles.length;b++){

                const dx =
                particles[a].x -
                particles[b].x;

                const dy =
                particles[a].y -
                particles[b].y;

                const distance =
                Math.sqrt(dx*dx + dy*dy);

                if(distance < 120){

                    ctx.beginPath();

                    ctx.strokeStyle =
                    `rgba(212,175,55,${
                        1 - distance/120
                    })`;

                    ctx.lineWidth = 0.5;

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.stroke();

                }

            }

        }

    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(p => {

            p.update();
            p.draw();

        });

        connectParticles();

        requestAnimationFrame(
            animate
        );

    }

    animate();

}
