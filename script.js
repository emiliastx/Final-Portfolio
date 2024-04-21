const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate random stars
const stars = [];
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 1,
    vx: Math.random() * 0.5 - 0.25,
    vy: Math.random() * 0.5 - 0.25,
  });
}

// Function to resize canvas and stars based on screen size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Adjust star size based on screen width
  const screenWidth = window.innerWidth;
  for (const star of stars) {
    star.radius = Math.random() * (screenWidth > 1200 ? 3 : 1.5) + 1;
  }
}

// Draw function
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw stars
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Move stars
  for (const star of stars) {
    star.x += star.vx;
    star.y += star.vy;

    if (star.x < 0 || star.x > canvas.width) {
      star.vx *= -1;
    }
    if (star.y < 0 || star.y > canvas.height) {
      star.vy *= -1;
    }
  }

  requestAnimationFrame(draw);
}

// Start animation
draw();

// Resize canvas and stars when the window is resized
window.addEventListener("resize", resizeCanvas);
