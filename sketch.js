function setup() {
  createCanvas(800,400);
  base1 = new Base(400,380,50,10);
  
}

function draw() {
  background(0,0,0);  
  base1.display();

  drawSprites();
}