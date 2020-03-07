var x = new Array(20);
var y = new Array(20);
var segLength = 25;

console.log("logging");

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  strokeWeight(20);
  stroke('#fbd1b7');
  for (var i=0; i<x.length; i++) {         // initialize the array
    x[i]=0;
    y[i]=0;
  }
  background('#ffffff');
}
  
function draw() {
  background('#ffffff');
  dragSegment(0, mouseX, mouseY);
  for (var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

var canvas = document.getElementById('mySketch');

canvas.addEventListener('mousedown', e => {
  stroke('#fee9b2b0');
})

canvas.addEventListener('mouseup', e => {
  stroke('#fbd1b7');
})