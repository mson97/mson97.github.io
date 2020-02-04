function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    frameRate(15);
    background('#ffffff');
}

/*
var colors = ['#FE938C', '#E6B89C', '#EAD2AC', '#EAD2AC', '#9CAFB7', '#4281A4']

function randomInt(min, max){
    return (Math.random() * (max - min + 1) + min);
} */
  
function draw() {
    if(mouseIsPressed && (mouseButton == LEFT)) {
      noStroke();
      fill(random(255), random(255), random(255), random(255));
    } else {
      fill('#ffffff');
      stroke(random(255), random(255), random(255), random(255));
    }
    var triangleSize = random(50);
    var x2 = mouseX + triangleSize/2;
    var y2 = mouseY - triangleSize;
    var x3 = mouseX + triangleSize;
    triangle(mouseX, mouseY, x2, y2, x3, mouseY);
  }