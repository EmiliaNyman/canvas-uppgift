// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda därefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  const s = 150
  c.beginPath();
  c.linewidth = "8";
  c.strokeStyle = "pink";
  c.fillStyle = "pink";
  c.rect(midX - s - (s/2), midY + (s/2), s, s);
  c.stroke();
  c.rect(midX + (s/2), midY + (s/2), s, s);
  c.stroke();
  c.closePath();
  c.fill();

  c.beginPath();
  c.linewidth = "4";
  c.strokeStyle = "orange";
  c.fillStyle = "orange";
  c.moveTo(midX - s - (s/2), midY + (s/2));
  c.lineTo(midX - s - (s/2) +(s/2), midY);
  c.stroke();
  c.lineTo(midX - (s/2), midY + (s/2));
  c.stroke();
  c.moveTo(midX + (s/2), midY + (s/2));
  c.lineTo(midX + s, midY);
  c.stroke();
  c.lineTo(midX + (s/2) + s, midY + (s/2));
  c.stroke();
  c.closePath();
  c.fill();

  c.beginPath();
  c.fillStyle = "brown";
  c.fillRect(midX - (s/4), midY + (s/2), (s/2), s);
  c.beginPath();
  c.ellipse(midX, midY, s/2, s, 0, Math.PI/2 + Math.PI/8, 2*Math.PI + 3*(Math.PI/8));
  c.stroke();
  c.fillStyle = "green";
  c.closePath();
  c.fill();
  // Här skriver du funktionen som ritar bilden
}
drawPicture();
