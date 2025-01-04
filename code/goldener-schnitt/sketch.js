function setup() {
  const wSize = min(windowWidth, windowHeight);
  createCanvas (wSize,wSize);
  colorMode(RGB, 1);
  noStroke();
}

function cosn(v){
  return 1 - cos(v * TWO_PI) * 0.5 + 0.5;
}
function invCosn(v){
  return cosn(v);
}

const dotSize = 0.05;
const radius= Math.sqrt(0.5) + dotSize;
const PHI = (1 + Math.sqrt(5)) / 2;


let t;
const frames = 1000;

function draw() {
  t = fract(frameCount / frames);
  //t = mouseX / width;
  
  scale(width, height);
  background(0);
  fill(1);
  
  const count = 1000 * invCosn(t);
  for(let i = 0; i < count; i++) {
    const f = i/ count;
    const a = i / PHI;
    const rdist = f * radius
    
    const x = 0.5 + cos(a * TWO_PI) * rdist;
    const y = 0.5 + sin(a * TWO_PI) * rdist;
    
    const sig = cosn(f + t * 6);
    const r = sig * f * dotSize;
    circle(x,y,r);
  }
}