const canvas = document.getElementById("trail-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 3; i++) { // more = thicker trail
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 4 + 2,
            life: 1
        });
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        p.life -= 0.02;
        p.size *= 0.96;

        ctx.fillStyle = `rgba(255, 59, 59, ${p.life})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        if (p.life <= 0) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

animate();