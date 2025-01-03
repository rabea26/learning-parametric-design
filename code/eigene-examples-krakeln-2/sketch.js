const sketchWidth = 800;
const sketchHeight = 800;
const margin = 50;
const pointCount = 5;

// Ein Array für die zufälligen Punkte
let points = [];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  background(255);
  noFill();
  strokeWeight(1);
  noLoop();

  
}

function draw() {
 // Punkte erzeugen und speichern
 for (let p = 0; p < pointCount; p++) {
  const x = random(margin, sketchWidth - margin);
  const y = random(margin, sketchHeight - margin);
  points.push({ x, y });
}

// Jetzt zeichnen wir anstelle eines einzigen Shapes
// jede Verbindung von point[i] zu point[i+1] einzeln,
// damit wir für jedes Segment eine andere Farbe wählen können
for (let i = 0; i < points.length - 1; i++) {
  // Prozentsatz, wie weit wir auf der Linie sind
  let t = i / (points.length - 1);
  
  // Hier definieren wir unseren Farbverlauf, z.B. von rot nach blau
  // Du kannst natürlich auch andere Farben oder mehrere Farbwerte verwenden
  let c = lerpColor(color(0, 255, 0), color(0, 0, 255), t);

  stroke(c);
  line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
}
}

//kepressed funktionalität
function keyPressed(){
  
  redraw();
}
