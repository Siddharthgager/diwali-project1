// fireworks.js

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A6'];

    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.position = 'absolute';
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.pointerEvents = 'none';
        document.body.appendChild(firework);

        // Create multiple sparks
        for (let i = 0; i < 30; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            spark.style.position = 'absolute';
            spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            spark.style.width = '10px'; // Increased spark size
            spark.style.height = '10px'; // Increased spark size
            spark.style.borderRadius = '50%';
            spark.style.opacity = '1';
            spark.style.boxShadow = `0 0 10px ${spark.style.backgroundColor}, 0 0 20px ${spark.style.backgroundColor}`; // Glow effect

            // Randomize angle and distance
            const angle = Math.random() * Math.PI * 2; // Random angle
            const distance = Math.random() * (100 + Math.random() * 100); // Random distance

            spark.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            firework.appendChild(spark);

            // Animate spark fade out
            setTimeout(() => {
                spark.style.transition = 'opacity 1s ease-out';
                spark.style.opacity = '0';
                setTimeout(() => { spark.remove(); }, 1000); // Remove after fade out
            }, Math.random() * 200);
        }

        // Remove firework after animation
        setTimeout(() => { firework.remove(); }, 2000);
    }

    // Trigger fireworks on click
    document.body.addEventListener('click', (e) => {
        createFirework(e.clientX, e.clientY);
    });

    // Start with a firework at a random position every second
    setInterval(() => {
        createFirework(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }, 1000);
});