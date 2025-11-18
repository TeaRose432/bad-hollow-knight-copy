// Major project
// Calli Sperrer
// Due Jan 19 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Player {
  constructor(x, y) {
    this.pX = x;
    this.pY = y;
    this.damage;
    this.speed;
    this.img;
    this.HP = 100;
  }

  attack() {

  }

  move() {

  }

  interact() {
    
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 100);
}
