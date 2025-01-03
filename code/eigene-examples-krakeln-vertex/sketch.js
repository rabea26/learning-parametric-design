const sketchWidth = 800;
const sketchHeight = 800;
const margin = 50;
let pointCount;
let points = [];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  pointCount = floor(random(5, 15));
  background(255);
  noFill();
  strokeWeight(22);
  noLoop();
  generatePoints();
  background(255);
}

function generatePoints() {
  points = [];
  for (let p = 0; p < pointCount; p++) {
    const x = random(margin, sketchWidth - margin);
    const y = random(margin, sketchHeight - margin);
    points.push({ x, y });
  }
}

function draw() {
 
  
  beginShape();
  for (let i = 0; i < points.length; i++) {
    const c = color(random(255), random(255), random(255));
    c.setAlpha(255);
    stroke(c);
    curveVertex(points[i].x, points[i].y);
    
    if (i === 0 || i === points.length-1) {
      curveVertex(points[i].x, points[i].y);
    }
  }
  endShape();
}

function keyPressed() {
  pointCount = floor(random(5, 15));
  generatePoints();
  redraw();
}