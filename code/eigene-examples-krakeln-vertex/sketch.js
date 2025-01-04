const sketchWidth = 800;
const sketchHeight = 800;
const margin = 50;
let pointCount;
let points = [];

function setup() {
  createCanvas(sketchWidth, sketchHeight, SVG);
  pointCount = floor(random(5, 26)); // Anzahlrange Punkte
  noFill();
  strokeWeight(22);
  noLoop();
  generatePoints();
  //background(255);
}

function generatePoints() {
  points = [];
  for (let p = 0; p < pointCount; p++) {
    const x = random(margin, sketchWidth - margin);// x-raum Punkte 
    const y = random(margin, sketchHeight - margin);//y-raum Punkte
    points.push({ x, y });//ins array pushen
  }
}

function draw() {
 
  
  beginShape();
  for (let i = 0; i < points.length; i++) {
    const c = color(random(255), random(255), random(255));
    c.setAlpha(255);//Kontrolle von Transparenz
    stroke(c);
    curveVertex(points[i].x, points[i].y);//vertex Funktion linie
    
    if (i === 0 || i === points.length-1) {
      curveVertex(points[i].x, points[i].y);
    }
  }
  endShape();
}

// function keyPressed() { //auslösevent
//   pointCount = floor(random(5, 15));
//   generatePoints();
//   redraw();
//   noLoop(); // we just want to export 
// }

function keyPressed() { //auslösevent für druck
  if (key === "p") {
    save("output.svg");
  } else {  
    pointCount = floor(random(5, 15));
    generatePoints();
    redraw();
    noLoop(); // we just want to export 
  }
  
}