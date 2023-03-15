// chocolate bar
let cols = 3;
let rows = 8;
// krill
let kcols = 6;
let krows = 16;
let ksize = 50;
let w, h;
let d = 0;
let angles = [180, 270];
let rangles = [90, 180, 270, 45, 135, 225];

function setup() {
  createCanvas(540, 870);
  background(255);
  rectMode(CENTER);
  angleMode(DEGREES);
  w = width / cols;
  h = height / rows;
  kw = width / kcols;
  kh = height / krows;
  noStroke();
  generate(); 
}

function generate() {
  // generate grid
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      push();
      translate(x * w + w / 2, y * h + h / 2);
      fill(220);
      d = random(-4, 4);
      rotate(d);
      rect(0, 0, w * 0.8, h * 0.8);
      pop();
    }
  }
// generate krills
  for (let y = 0; y < krows; y++) {
    for (let x = 0; x < kcols; x++) {
      push();
      translate(
        x * kw + kw / 2 + random(-5, 5),
        y * kh + kh / 2 + random(-5, 5)
      );
      let rn = random(1);
      if (rn > 0.7) {
        // only draw krill for half the grid
        rotate(random(rangles)); // start at random position
        let r = random(angles); // randomize between half krill and 3 quarters krill
        fill(232, 100, 100);
        arc(0, 0, 50, 50, 0, r);

        if (random(1) > 0.7) {
          // flipping
          arc(0.5 * ksize, 0, ksize, ksize, 180, 270);
          fill(0);
          ellipse(0.5 * ksize, 0, 8, 8);
        } else {
          fill(0);
          ellipse(0.35 * ksize, 0.35 * ksize, 8, 8);
        }
      } else if (rn > 0.5) {
        // draw green stuff
        fill(40, random(100, 200), 7);
        rotate(random(180));
        rect(0, 0, random(8, 12), random(15, 22));
      }
      pop();
    }
  }
}
function mousePressed() {
  background(255); 
  generate();
}
