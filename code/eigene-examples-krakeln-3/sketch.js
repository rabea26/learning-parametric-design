const sketchWidth = 800;
const sketchHeight = 800;
const margin = 50;
const pointCount = 15;
let points = [];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  background(255);
  noFill();
  strokeWeight(11);
  noLoop();
  generatePoints();
  background(255);
}

function generatePoints() {
  for (let p = 0; p < pointCount; p++) {
    const x = random(margin, sketchWidth - margin);
    const y = random(margin, sketchHeight - margin);
    points.push({ x, y });
  }
}

function draw() {
 background(255);
 for (let i = 0; i < points.length - 1; i++) {
   const c = color(random(255), random(255), random(255));
   c.setAlpha(190); // 0.75 * 255 = 191 für Transparenz
   stroke(c);
   line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
 }
}

function keyPressed() {
  generatePoints();
  redraw();
}