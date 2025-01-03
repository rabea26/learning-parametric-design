/* -- 4 Quadrate die mit zufälliger Farbe gefüllt werden 
 und bei keypressed neue zufällige Farben erhalten -- */

let color1;
let color2;
let color3;
let color4;

function setup() {
  
  createCanvas(400,400);
  console.log("setup completed");
  noStroke(); //generell keine Outline
  noLoop();//loop function für draw stoppen
  generateRandomColors();//zufällige Farben für die Quadrate zu Beginn
  //frameRate(5);Framerate auf best Wert setzen
}

function draw(){
  background(0);//canvas Hintergrundfarbe
  
  // Quadtrat links oben 
  fill(color1);
  rect(0, 0, 200, 200);
  
  // Quadtrat rechts oben 
  fill(color2);
  rect(200, 0, 200, 200);
  
  // Quadtrat links unten 
  fill(color3);
  rect(200, 200, 200, 200);
  
  // Quadtrat rechts unten 
  fill(color4);
  rect(0, 200, 200, 200);

  console.log("fill rect working");//check ob rect color korrekt gezeichnet wird
// Hol dir die aktuelle Framerate
  let fr = frameRate();

  // Ausgabe in der Konsole
  console.log("Aktuelle FPS: " + fr.toFixed(2));
}
  
 //kepressed funktionalität
function keyPressed(){
  generateRandomColors();
  redraw();
}

//random color generator
function generateRandomColors(){
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
  color3 = color(random(255), random(255), random(255));
  color4 = color(random(255), random(255), random(255));
}
  

 
   
  




  
    
  
