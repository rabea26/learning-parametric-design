let g = 0;
let b = 0;
let r = 0;


function setup() {
  createCanvas(400, 400);
  // Optional: einmaliger Aufruf, damit zu Beginn Rot aufleuchtet
  background(0, 0, 0);
}

function draw() {
  // Zeichne den Hintergrund mit den aktuellen Farbwerten
  background(r, g, b);
  
  // Erhöhe die Farbwerte schrittweise
  g += 1;
  b += 1;
  r += 2;

  
  // Sorge dafür, dass g und b nicht über 255 hinausgehen
  if (g > 255) {
    g = 255;
  }
  if (b > 255) {
    b = 255;
  }
  if (r > 200) {
    r = 200;
  }
}
