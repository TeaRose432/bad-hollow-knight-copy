// Major project
// Calli Sperrer
// Due Jan 19 2026
//
//I used ps.j5 refernece website to learn parameters and what functions need/do.
//I also used to to help decide what to use between choices like mousePressed or mouseClicked.
//used for functions such as:
//triangle, keyIsDown, mousePressed, keyPressed, image

let cords = {
  lgX: 100,
  lgY: 200,
  hX: 650,
  hY: 200,
  enemyX: 700,
  enemyY: 300,
  rectX: 350,
  rectY: 350,
  w: 200,
  h: 100,
};

let state = "startScreen";
let character = "";
let enemyDirection = "left";
let opponent = "";
let enemyJ;
let enemyC;
let enemyBG;
let enemyJRight;
let enemyCRight;
let enemyBGRight;
let hornetImg;
let lilGuyImg;

let startingRoomBG;
let statueRoomBG;
let greeneryRoomBG;
let gloomyRoomBG;
let eggRoomBG;
let graveYardRoomBG;
let theBackGrounds = [];
let currentBG = 1;


let lgStand;//setting up character movement and idle animations
let lgStandRight;
let lgRun;
let lgRunRight;
let hornetIdle;
let horentIdleRight;
let hornetRun;
let hornetRunRight;
let isAttacking = false;
let hornetAttack;
let hornetAttackRight;
let lgAttack;
let lgAttackRight;
let direction = "right";//is used to know which way character should face when movement stops

function preload() {//loading images and animations
  lilGuyImg = loadImage("theImageFolder/lil-guy.png");
  hornetImg = loadImage("theImageFolder/hornet.png");
  lgStand = loadImage("theImageFolder/ghost-standing.gif");
  lgStandRight = loadImage("theImageFolder/ghost-standing-right.gif");
  lgRun = loadImage("theImageFolder/hollow-knight-walk.gif");
  lgRunRight = loadImage("theImageFolder/hollow-knight-walk-right.gif");
  lgAttack = loadImage("theImageFolder/lil-guy-attack.gif");
  lgAttackRight = loadImage("theImageFolder/lil-guy-attack-right.gif");
  hornetRun = loadImage("theImageFolder/hornet-run.gif");
  hornetRunRight = loadImage("theImageFolder/hornet-run-right.gif");
  hornetIdle = loadImage("theImageFolder/hornet-idle.webp");
  horentIdleRight = loadImage("theImageFolder/hornet-idle-right.webp");
  hornetAttack = loadImage("theImageFolder/hornet-attack.gif");
  hornetAttackRight = loadImage("theImageFolder/hornet-attack-right.gif");
  enemyBG = loadImage("theImageFolder/big-guy-walk.gif");
  enemyJ = loadImage("theImageFolder/jumper-walk.gif");
  enemyC = loadImage("theImageFolder/charger-walk.gif");
  enemyBGRight = loadImage("theImageFolder/big-guy-walk-right.gif");
  enemyJRight = loadImage("theImageFolder/jumper-walk-right.gif");
  enemyCRight = loadImage("theImageFolder/charger-walk-right.gif");
  eggRoomBG = loadImage("theImageFolder/egg-room-background.png");
  startingRoomBG = loadImage("theImageFolder/starting-background.jpg");
  greeneryRoomBG = loadImage("theImageFolder/greenery-room-background.png");
  statueRoomBG = loadImage("theImageFolder/statue-room-background.jpg");
  gloomyRoomBG = loadImage("theImageFolder/gloomy-room-background.png");
  graveYardRoomBG = loadImage("theImageFolder/graveyard-room-background.jpg");
}

class Player {
  constructor(x, y, speed, damage) {
    this.pX = x;
    this.pY = y;
    this.playerDamage = damage;
    this.playerSpeed = speed;
    this.playerHP = 100;
  }

  backGroundChange() {
  console.log(currentBG);
  //console.log(this.pX);
  image(theBackGrounds[currentBG], 1, 1);

  if (currentBG === 0) {
    if (this.pX < 5) {
      currentBG = 3;
      this.pX = 840;
    }
    if (this.pX > 855) {
      currentBG = 1;
      this.pX = 15;
    }
  }
  if (currentBG === 1) {
    if (this.pX < 5) {
      currentBG = 0;
      this.pX = 840;
    }
    if (this.pX > 855) {
      currentBG = 2;
      this.pX = 15;
    }
  }
  if (currentBG === 2) {
    if (this.pX < 5) {
      currentBG = 1;
      this.pX = 840;
    }
    if (this.pX > 855) {
      currentBG = 5;
      this.pX = 15;
    }
  }
  if (currentBG === 3) {
    // if (this.pX < 5) {
    //   currentBG = ;
    // }
    if (this.pX > 855) {
      currentBG = 4;
      this.pX = 15;
    }
  }
  if (currentBG === 4) {
    if (this.pX < 5) {
      currentBG = 3;
      this.pX = 840;
    }
    if (this.pX > 855) {
      currentBG = 5;
      this.pX = 15;
    }
  }
  if (currentBG === 5) {
    if (this.pX < 5) {
      currentBG = 4;
      this.pX = 840;
    }
    // if (this.pX > 855) {
    //   currentBG = ;
    // }
  }
  }

  playerAttack() {
    if (keyIsDown(70) === true) {
      if (character === "LilGuy") {
        if (direction === "left") {
          image(lgAttack, this.pX+5, this.pY+3, lgAttack.width*0.85, lgAttack.height*0.85);
        }
        if (direction === "right") {
          image(lgAttackRight, this.pX+5, this.pY+3, lgAttackRight.width*0.85, lgAttackRight.height*0.85);
        }
      }

      if (character === "Hornet") {
        if (direction === "left") {
          image(hornetAttack, this.pX-20, this.pY, hornetAttack.width*0.6, hornetAttack.height*0.6);
        }
        if (direction === "right") {
          image(hornetAttackRight, this.pX, this.pY, hornetAttackRight.width*0.6, hornetAttackRight.height*0.6);
        }
      }
    }
  }

  playerHitBoxes() {
    if (keyIsDown(70) === false) {
      if (character === "LilGuy") {
        circle(this.pX+25, this.pY+30, 20);
        rect(this.pX+20, this.pY+40, 10, 15);
      }
      if (character === "Hornet") {//fix rect hitbox :,) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        circle(this.pX+25, this.pY+35, 20);
        //rect(this.pX+30, this.pY+30, 15, 15);
      }
    }

    if (keyIsDown(70) === true) {
      if (character === "LilGuy") {
        if (direction === "left") {
          circle(this.pX+25, this.pY+30, 20);
          rect(this.pX+20, this.pY+40, 10, 15);
          triangle(this.pX+15, this.pY+30, this.pX+15, this.pY+50, this.pX-15, this.pY+40);
        }
        if (direction === "right") {
          circle(this.pX+25, this.pY+30, 20);
          rect(this.pX+20, this.pY+40, 10, 15);
          triangle(this.pX+35, this.pY+30, this.pX+35, this.pY+50, this.pX+65, this.pY+40);
        }
    }

      if (character === "Hornet") {
        if (direction === "left") {
          circle(this.pX+25, this.pY+35, 20);
          triangle(this.pX+15, this.pY+30, this.pX+15, this.pY+50, this.pX-20, this.pY+40);
        }
        if (direction === "right") {
          circle(this.pX+25, this.pY+35, 20);
          triangle(this.pX+35, this.pY+30, this.pX+35, this.pY+50, this.pX+75, this.pY+40);
        }
      }
    }
  }

  playerMove() {
    if (keyIsDown(70) === false) {
      if (character === "LilGuy") {
        if (keyIsDown(68)) {//pressed d
          this.pX += this.playerSpeed;
          image(lgRunRight, this.pX, this.pY, lgRunRight.width*0.4, lgRunRight.height*0.4);
          direction = "right";
        }
        else if (keyIsDown(65)) {//pressed a
          this.pX -= this.playerSpeed;
          image(lgRun, this.pX+5, this.pY, lgRun.width*0.4, lgRun.height*0.4);
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
          this.pX += this.playerSpeed;
          image(hornetRunRight, this.pX-70, this.pY);
          direction = "right";
        }
        else if (keyIsDown(65)) {//pressed a
          this.pX -= this.playerSpeed;
          image(hornetRun, this.pX-30, this.pY);
          currentGif = "hornetRunLeft";
          direction = "left";
        }
        else {
          if (direction === "left") {
            image(hornetIdle, this.pX-20, this.pY, hornetIdle.width*0.4, hornetIdle.height*0.4);
            currentGif = "hornetIdleLeft";
          }
          if (direction === "right") {
            image(horentIdleRight, this.pX-10, this.pY, horentIdleRight.width*0.4, horentIdleRight.height*0.4);
            currentGif = "hornetIdleRight";
          }
        }
      }
    }
  }

  update() {
    this.playerMove();
    this.playerAttack();
    this.playerHitBoxes();
  }
}

class Enemy {
  constructor(x, y, speed, damage) {
    this.eX = x;
    this.eY = y;
    this.enemySpeed = speed;
    this.enemyDamage = damage;
    this.enemyHP = 100;
  }

  enemyMove() {
    if (this.eX <= 5) {
      enemyDirection = "right";
    }
    if (this.eX >= 830) {
      enemyDirection = "left";
    }
    if (enemyDirection === "left") {
      if (opponent === "big guy") {
        this.eX -= this.enemySpeed;
        image(enemyBG, this.eX, this.eY, enemyBG.width*0.35, enemyBG.height*0.35);
      }
      if (opponent === "charger") {
        this.eX -= this.enemySpeed;
        image(enemyC, this.eX, this.eY, enemyC.width*0.35, enemyC.height*0.35);
      }
      if (opponent === "jumper") {
        this.eX -= this.enemySpeed;
        image(enemyJ, this.eX, this.eY, enemyJ.width*0.35, enemyJ.height*0.35);
      }
    }
    if (enemyDirection === "right") {
      if (opponent === "big guy") {
        this.eX += this.enemySpeed;
        image(enemyBGRight, this.eX, this.eY, enemyBGRight.width*0.35, enemyBGRight.height*0.35);
      }
      if (opponent === "charger") {
        this.eX += this.enemySpeed;
        image(enemyCRight, this.eX+10, this.eY, enemyCRight.width*0.35, enemyCRight.height*0.35);
      }
      if (opponent === "jumper") {
        this.eX += this.enemySpeed;
        image(enemyJRight, this.eX, this.eY, enemyJRight.width*0.35, enemyJRight.height*0.35);
      }
    }
  }

  enemyHitBoxes() {
    if (opponent === "charger") {
      circle(this.eX+30, this.eY+40, 35);
    }
    if (opponent === "big guy") {
      circle(this.eX+20, this.eY+25, 35);
    }
    if (opponent === "jumper") {
      circle(this.eX+20, this.eY+20, 20);
      circle(this.eX+20, this.eY+40, 25);
    }
  }

  enemyUpdate() {
    this.enemyMove();
    this.enemyHitBoxes();
  }
}

let LilGuy;
let Hornet;
let Charger;
let Jumper;
let BigGuy;


function setup() {
  createCanvas(800, 800);
  theBackGrounds = [eggRoomBG , startingRoomBG, greeneryRoomBG,
                    statueRoomBG, gloomyRoomBG, graveYardRoomBG];

  Charger = new Enemy(cords.enemyX, cords.enemyY, 3, 25);
  Jumper = new Enemy(cords.enemyX, cords.enemyY, 4, 20);
  BigGuy = new Enemy(cords.enemyX, cords.enemyY, 3, 15);
  opponent = "jumper";
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
      LilGuy.backGroundChange();
      LilGuy.update();
    }
    if (character === "Hornet") {
      Hornet.backGroundChange();
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
      currentGif = "lilGuyIdleRight";
      state = "play";
    }
    if (mouseX >= cords.hX && mouseX <= cords.hX + hornetImg.width*0.2 && mouseY >= cords.hY && mouseY <= cords.hY + hornetImg.height*0.23) {
      Hornet = new Player(cords.hX, cords.hY, 9, 15);
      character = "Hornet";
      currentGif = "hornetIdleRight";
      state = "play";
    }
  }
}
