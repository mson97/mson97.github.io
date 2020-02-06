function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    frameRate(6);
    background('#ffffff');
}
  
function draw() {
    if(mouseIsPressed && (mouseButton == LEFT)) {
      fill('#ffffff');
      stroke(random(100,255), random(0,50), random(0,100), random(255)); 
    } else {
      noStroke();
      fill(random(100,255),random(0,50),random(0,100), random(255));
    }
    var triangleSize = random(100);
    var x2 = mouseX + triangleSize/2;
    var y2 = mouseY - triangleSize;
    var x3 = mouseX + triangleSize;
    triangle(mouseX, mouseY, x2, y2, x3, mouseY);
  }