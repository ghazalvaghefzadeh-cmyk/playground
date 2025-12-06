let img;
let imgtwo;
let boyX = 379;
let boyY = 156;
let a = 0;

function preload() {
  img = loadImage('lilguy.png');
  imgtwo = loadImage('redslide.png');
}

function setup() {
createCanvas (700, 350);
background (5,5,40);
}


function draw() {
background(5,5,40);
fill(255);
strokeWeight(1);
//text('mouseX'+mouseX, 50, 50);
//text('mouseY'+mouseY, 50, 100);
textSize(30);
  noFill();
  stroke(46, 117, 58);
  strokeWeight(1);
  text('Press Any Key :3', 20, 50);




img.resize(0,30);
image(img, boyX, boyY);

 if (keyIsPressed === true) {
    a = 1;
  }

  boyY += a;
  boyX -= a;

  if (boyY > 230) {
    a = 0;
    boyY = 156
    boyX = 379;
  }


imgtwo.resize(0,80);
image(imgtwo, 300, 182);

push();
translate(0,258);
stroke(46, 117, 58);
  // Set the spacing for points on the grid.
  let space = 10;

  // Increase the stroke weight.
  strokeWeight(3);

  // Loop from the left to the right.
  for (let x = space; x < 700; x += space) {
    // Loop from the top to the bottom.
    for (let y = space; y < 600; y += space) {
      point(x, y);
    }
  }
pop()
}


//function keyPressed() {
//  if (keyCode === ' ') {
//  function draw() {
//  boyX += 10;
//   }
//  } 
//}
