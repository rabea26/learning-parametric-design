function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 200);
  const canvas = document.getElementById('defaultCanvas0');
  console.log(`Canvas-Größe: ${canvas.width} x ${canvas.height}`);}

function draw() {
  background(20,20,100);
}
console.log(window.devicePixelRatio);
