const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

function drawShapes() {
  background(255);
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;
  
  for (let x = 0; x < columns; x += 1) {
    for (let y = 0; y < rows; y += 1) {
      const shapeNum = random(0,3);
      if (shapeNum < 1) {
        noStroke();
        fill(random(255), random(255), random(255));
        circle(x * size + size / 2 - 2, y * size + size / 2 - 2, size-5);
      } else if (shapeNum < 3) {
        noStroke();
        fill(random(255), random(255), random(255));
        rect(x * size, y * size, size-3, size-3);
      } else {
        stroke(255,0,0);
        strokeWeight(3);
        line((x * size)+5, (y * size)+5, (x * size) + 15, (y * size) + 15);
      }
    }
  }
}

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  drawShapes();
}

function keyPressed() {
  drawShapes();
}

function draw() {
}