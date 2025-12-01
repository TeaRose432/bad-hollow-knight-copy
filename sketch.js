// Major project
// Calli Sperrer
// Due Jan 19 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cords = {
  lgX: 100,
  lgY: 200,
  hX: 650,
  hY: 200,
  enemyX: 700,
  bgY: 744, //big guy Y cord
  cY: 725, //charger y cord
  jY: 714, //jumper y cord
  rectX: 350,
  rectY: 350,
  w: 200,
  h: 100,
};

let state = "startScreen";
let character;
let enemies = ["jumper", "big guy", "charger"];
let enemySPD = 4;
let enemyDirection = "left";
let enemyJ;
let enemyC;
let enemyBG;
let enemyJRight;
let enemyCRight;
let enemyBGRight;
let opponent;
let hornetImg;
let lilGuyImg;

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
  horentIdleRight = loadImage("images-folder/hornet-idle-right.webp");
  enemyBG = loadImage("images-folder/big-guy-walk.gif");
  enemyJ = loadImage("images-folder/jumper-walk.gif");
  enemyC = loadImage("images-folder/charger-walk.gif");
  enemyBGRight = loadImage("images-folder/big-guy-walk-right.gif");
  enemyJRight = loadImage("images-folder/jumper-walk-right.gif");
  enemyCRight = loadImage("images-folder/charger-walk-right.gif");
}

class Player {
  constructor(x, y, speed, damage) {
    this.pX = x;
    this.pY = y;
    this.damage = damage;
    this.speed = speed;
    //this.img = img;
    this.HP = 100;
  }

  attack() {

  }

  move() {
    
  }

  interact() {
    
  }
}

let lilGuy = new Player(lgX, lgY, 5, 25);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 100);
}
