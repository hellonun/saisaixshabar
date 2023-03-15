let cols = 3;
let rows = 8;
let w, h;
let rects = [];
let n = 2; // number of rects in 1 cell

let kcols = 8;
let krows = 24;
let ksize = 35;
let d = 0;
let angles = [180, 270];
let rangles = [90, 180, 270, 45, 135, 225];

function setup() {
  createCanvas(540, 870);
  // background(74, 47, 23);
  angleMode(DEGREES);

  w = width / cols;
  h = height / rows;
  kw = width / kcols;
  kh = height / krows;

  for (y = 0; y < rows; y++) {
    for (x = 0; x < cols; x++) {
      for (i = 0; i < n; i++) {
        let p1 = 10;
        let p2 = 20;
        tl = [x * w + i * random(p1, p2), y * h + i * random(p1, p2)];
        tr = [x * w + w - i * random(p1, p2), y * h + i * random(p1, p2)];
        br = [x * w + w - i * random(p1, p2), y * h + h - i * random(p1, p2)];
        bl = [x * w + i * random(p1, p2), y * h + h - i * random(p1, p2)];

        newRect = new Rectangle(tl, tr, br, bl);
        rects.push(newRect);
      }
    }
  }

  for (i = 0; i < rects.length; i++) {
    if (random(1) > 0.3) {
      // sometimes draw brown
      stroke(36, 24, 14);
      if (i % n == 0) {
        fill(74, 47, 23);
        rects[i].displayRect();
        fill(99, 65, 34);
        i++;
        rects[i].displayRect();

        // draw lines
        line(
          rects[i].tl.x,
          rects[i].tl.y,
          rects[i - 1].tl.x,
          rects[i - 1].tl.y
        );
        line(
          rects[i].tr.x,
          rects[i].tr.y,
          rects[i - 1].tr.x,
          rects[i - 1].tr.y
        );
        line(
          rects[i].br.x,
          rects[i].br.y,
          rects[i - 1].br.x,
          rects[i - 1].br.y
        );
        line(
          rects[i].bl.x,
          rects[i].bl.y,
          rects[i - 1].bl.x,
          rects[i - 1].bl.y
        );
      }
    } else {
      if (i % n == 0) {
        noFill();
        rects[i].displayRect();
        i++;
        rects[i].displayRect();

        // draw lines
        line(
          rects[i].tl.x,
          rects[i].tl.y,
          rects[i - 1].tl.x,
          rects[i - 1].tl.y
        );
        line(
          rects[i].tr.x,
          rects[i].tr.y,
          rects[i - 1].tr.x,
          rects[i - 1].tr.y
        );
        line(
          rects[i].br.x,
          rects[i].br.y,
          rects[i - 1].br.x,
          rects[i - 1].br.y
        );
        line(
          rects[i].bl.x,
          rects[i].bl.y,
          rects[i - 1].bl.x,
          rects[i - 1].bl.y
        );
      }
    }
  }
  generate();
}

function generate() {
  noStroke();
  // generate krills
  for (let y = 0; y < krows; y++) {
    for (let x = 0; x < kcols; x++) {
      push();
      translate(
        x * kw + kw / 2 + random(-5, 5),
        y * kh + kh / 2 + random(-5, 5)
      );
      let rn = random(1);
      if (rn > 0.85) {
        // only draw krill for half the grid
        rotate(random(rangles)); // start at random position
        let r = random(angles); // randomize between half krill and 3 quarters krill
        fill(232, 100, 100);
        arc(0, 0, ksize, ksize, 0, r);

        if (random(1) > 0.2) {
          // flipping
          arc(0.5 * ksize, 0, ksize, ksize, 180, 270);
          fill(0);
          ellipse(0.5 * ksize, 0, 5, 5);
        } else {
          fill(0);
          ellipse(0.35 * ksize, 0.35 * ksize, 5, 5);
        }
      } else if (rn > 0.45) {
        // draw green stuff
        fill(40, random(100, 200), 7);
        rotate(random(180));
        rect(0, 0, random(4, 6), random(15, 22));
      }
      pop();
    }
  }
}

class Rectangle {
  constructor(tl, tr, br, bl) {
    // top left, top right, bottom right, bottom left
    this.tl = createVector(tl[0], tl[1]);
    this.tr = createVector(tr[0], tr[1]);
    this.br = createVector(br[0], br[1]);
    this.bl = createVector(bl[0], bl[1]);
  }

  displayRect() {
    beginShape();
    vertex(this.tl.x, this.tl.y);
    vertex(this.tr.x, this.tr.y);
    vertex(this.br.x, this.br.y);
    vertex(this.bl.x, this.bl.y);
    endShape(CLOSE);
  }
}
