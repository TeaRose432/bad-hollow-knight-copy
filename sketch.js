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
let character = "";
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
let isAttacking = false;
let lgAttackRight;
let direction = "right";//is used to know which way character should face when movement stops

function preload() {//loading images and animations
  lilGuyImg = loadImage("theImageFolder/lil-guy.png");
  hornetImg = loadImage("theImageFolder/hornet.png");
  lgStand = loadImage("theImageFolder/ghost-standing.gif");
  lgStandRight = loadImage("theImageFolder/ghost-standing-right.gif");
  lgRun = loadImage("theImageFolder/hollow-knight-walk.gif");
  lgRunRight = loadImage("theImageFolder/hollow-knight-walk-right.gif");
  lgAttackRight = loadImage("theImageFolder/lil-guy-attack-right.gif");
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
    if (keyIsDown(70) === true) {
      if (character === "LilGuy") {
        // the plus 5 and plus 3 is to make the attack gif line up with the other gifs, so it isnt off to the side
        // the difference in gif size causes the attack to not line up with the others
        image(lgAttackRight, this.pX+5, this.pY+3, lgAttackRight.width*0.9, lgAttackRight.height*0.9);
      }
      if (character === "Hornet") {
        
      }
    }
  }

  move() {
    if (character === "LilGuy") {
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
      else {
        if (direction === "left") {
          image(lgStand, this.pX, this.pY, lgStand.width*0.4, lgStand.height*0.4);
        }
        if (direction === "right") {
          image(lgStandRight, this.pX, this.pY, lgStandRight.width*0.4, lgStandRight.height*0.4);
        }
      }
    }
    if (character === "Hornet") {
      if (keyIsDown(68)) {//pressed d
        this.pX += this.speed;
        image(hornetRunRight, this.pX, this.pY);
        direction = "right";
      }
      else if (keyIsDown(65)) {//pressed a
        this.pX -= this.speed;
        image(hornetRun, this.pX, this.pY);
        direction = "left";
      }
      else {
        if (direction === "left") {
          image(hornetIdle, this.pX, this.pY, hornetIdle.width*0.4, hornetIdle.height*0.4);
        }
        if (direction === "right") {
          image(horentIdleRight, this.pX, this.pY, horentIdleRight.width*0.4, horentIdleRight.height*0.4);
        }
      }
    }
  }

  update() {
    this.move();
    this.attack();
  }
}

let LilGuy;
let Hornet;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  if (state === "startScreen") {
    background(220);
    showButton();
  }
  if (state === "characterChoice") {
    background(220);
    Choices();
  }

  if (state === "play") {
    if (character === "LilGuy") {
      background(220);
      LilGuy.update();
      //LilGuy.attack();
    }
    if (character === "Hornet") {
      background(220);
      Hornet.update();
    }
  }
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

function mousePressed() {
  if (state === "startScreen") {//checks if start button is pressed
    if (mouseX >= cords.rectX && mouseX <= cords.rectX + cords.w && mouseY >= cords.rectY && mouseY <= cords.rectY + cords.h) {
      state = "characterChoice";
    }
  }
  if (state === "characterChoice") {//checks which character is chosen
    if (mouseX >= cords.lgX && mouseX <= cords.lgX + lilGuyImg.width*0.2 && mouseY >= cords.lgY && mouseY <= cords.lgY + lilGuyImg.height*0.2) {
      LilGuy = new Player(cords.lgX, cords.lgY, 5, 25);
      character = "LilGuy";
      state = "play";
    }
    if (mouseX >= cords.hX && mouseX <= cords.hX + hornetImg.width*0.2 && mouseY >= cords.hY && mouseY <= cords.hY + hornetImg.height*0.23) {
      Hornet = new Player(cords.hX, cords.hY, 9, 15);
      character = "Hornet";
      state = "play";
    }
  }
}


