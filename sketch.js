// Major project
// Calli Sperrer
// Due Jan 19 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lgStand;//setting up character movement and idle animations
let lgStandRight;
let lgRun;
let lgRunRight;
let hornetIdle;
let horentIdleRight;
let hornetRun;
let hornetRunRight;
let direction = "right";//is used to know which way character should face when movement stops

function preload() {//loading images and animations
  lilGuyImg = loadImage("images-folder/lil-guy.png");
  hornetImg = loadImage("images-folder/hornet.png");
  lgStand = loadImage("images-folder/ghost-standing.gif");
  lgStandRight = loadImage("images-folder/ghost-standing-right.gif");
  lgRun = loadImage("images-folder/hollow-knight-walk.gif");
  lgRunRight = loadImage("images-folder/hollow-knight-walk-right.gif");
  hornetRun = loadImage("images-folder/hornet-run.gif");
  hornetRunRight = loadImage("images-folder/hornet-run-right.gif");
  hornetIdle = loadImage("images-folder/hornet-idle.webp");
  hornetIdleRight = loadImage("images-folder/hornet-idle-right.webp");
  enemyBG = loadImage("images-folder/big-guy-walk.gif");
  enemyJ = loadImage("images-folder/jumper-walk.gif");
  enemyC = loadImage("images-folder/charger-walk.gif");
  enemyBGRight = loadImage("images-folder/big-guy-walk-right.gif");
  enemyJRight = loadImage("images-folder/jumper-walk-right.gif");
  enemyCRight = loadImage("images-folder/charger-walk-right.gif");
}

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

let lilGuy;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 100);
}
