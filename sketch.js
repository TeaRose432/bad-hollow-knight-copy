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
let enemyDirection = "left";
let enemyJ;
let enemyC;
let enemyBG;
let enemyJRight;
let enemyCRight;
let enemyBGRight;
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
  lilGuyImg = loadImage("theImageFolder/lil-guy.png");
  hornetImg = loadImage("theImageFolder/hornet.png");
  lgStand = loadImage("theImageFolder/ghost-standing.gif");
  lgStandRight = loadImage("theImageFolder/ghost-standing-right.gif");
  lgRun = loadImage("theImageFolder/hollow-knight-walk.gif");
  lgRunRight = loadImage("theImageFolder/hollow-knight-walk-right.gif");
  hornetRun = loadImage("theImageFolder/hornet-run.gif");
  hornetRunRight = loadImage("theImageFolder/hornet-run-right.gif");
  hornetIdle = loadImage("theImageFolder/hornet-idle.webp");
  horentIdleRight = loadImage("theImageFolder/hornet-idle-right.webp");
  enemyBG = loadImage("theImageFolder/big-guy-walk.gif");
  enemyJ = loadImage("theImageFolder/jumper-walk.gif");
  enemyC = loadImage("theImageFolder/charger-walk.gif");
  enemyBGRight = loadImage("theImageFolder/big-guy-walk-right.gif");
  enemyJRight = loadImage("theImageFolder/jumper-walk-right.gif");
  enemyCRight = loadImage("theImageFolder/charger-walk-right.gif");
}

class Player {
  constructor(x, y, speed, damage) {
    this.pX = x;
    this.pY = y;
    this.damage = damage;
    this.speed = speed;
    this.HP = 100;
  }

  attack() {

  }

  move() {
    if (keyIsDown(68)) {//pressed d
      this.pX += this.speed;
      image(lgRunRight, this.pX, this.pY, lgRunRight.width*0.4, lgRunRight.height*0.4);
      direction = "right";
    }
    else if (keyIsDown(65)) {//pressed a
      this.pX -= this.speed;
      image(lgRun, this.pX, this.pY, lgRun.width*0.4, lgRun.height*0.4);
      direction = "left";
    }
  }

  display() {
    if (direction === "left") {
      image(lgStand, this.pX, this.pY, lgStand.width*0.4, lgStand.height*0.4);
    }
    if (direction === "right") {
      image(lgStandRight, this.pX, this.pY, lgStandRight.width*0.4, lgStandRight.height*0.4);
    }
  }
}

let lilGuy = new Player(cords.lgX, cords.lgY, 5, 25);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  lilGuy.display();
  lilGuy.move();
}

function showButton() { //shows the begin button
  stroke("black");
  fill("gray");
  rect(cords.rectX, cords.rectY, cords.w, cords.h);
}

function Choices() {//lets player decide which character to play
  if (state === "characterChoice") {
    image(lilGuyImg, cords.lgX, cords.lgY, lilGuyImg.width*0.2, lilGuyImg.height*0.2);
    image(hornetImg, cords.hX, cords.hY, hornetImg.width*0.2, hornetImg.height*0.23);
  }
}

function interactable() {

}
