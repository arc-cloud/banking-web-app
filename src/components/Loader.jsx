import '../styles/Loader.css';

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    class Particle  {
        constructor(x, y, radius, color) {
            this.x = x + radius * 100;
            this.x2 = x;
            this.y = y;
            this.y2 = y;
            this.radius = radius;
            this.color = color;
            this.radians = 0;
            this.vel = 0.1;
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();

        }

        oscillate() {
            this.x = this.x2 + Math.cos(this.radians) * 20;
            this.y = this.y2 + Math.sin(this.radians) * 20;
            this.radians += this.vel
        }
    }

    let particle = new Particle(width / 2, height / 2, 3, 'red')
    
    const animate = () => {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.09)';
        ctx.fillRect(0, 0, width, height);
        
        particle.draw();
        particle.oscillate();
    }
    animate();

    /* Hide the loader after a few seconds */
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 3000);
})


const Loader = () => {
    return (
        <div className="loader" id='loader'>
            <canvas id='canvas'></canvas>
        </div>
    )
}

export default Loader;