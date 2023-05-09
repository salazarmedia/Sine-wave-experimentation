const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wave = {
  y: canvas.height / 2,
  x: -100,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01,
};

const strokeColor = {
  h: 0,
  s: 50,
  l: 50,
}

let increment = wave.frequency;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'rgba(0, 0, 0, 0.05)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.beginPath();


  for (let i = wave.x; i < canvas.width; i++) {
    c.lineTo(
      i,
      wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment)
    );
  }

  c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.l}%, ${strokeColor.s}%)`;
  c.stroke();
  increment += wave.frequency;
}

animate();
