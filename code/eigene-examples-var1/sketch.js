const sketchWidth = 800;
const sketchHeight = 800;
const margin = 50;
const pointCount = 75;

function setup() {
  createCanvas(sketchWidth, sketchHeight);

  background(255);
  stroke(0);
  strokeWeight(11);
  noFill();

  beginShape();
  for (let p = 0; p < pointCount; p += 1) {
    curveVertex(
      random(margin, sketchWidth - margin),
      random(margin, sketchHeight - margin)
    );
  }
  endShape();
}

function draw() {
}