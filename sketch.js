// Major project
// Calli Sperrer
// Due Jan 19 2026
//
//I used ps.j5 refernece website to learn parameters and what functions need/do.
//I also used to to help decide what to use between choices like mousePressed or mouseClicked.
//used for functions such as:
//triangle, keyIsDown, mousePressed, keyPressed, image
//https://github.com/bmoren/p5.collide2D --- I used this to figure out how to use p5.collide properly

let cords = {
  lgX: 100,
  lgY: 200,
  hX: 650,
  hY: 200,
  enemyX: 700,
  enemyY: 200,
  rectX: 300,
  rectY: 150,
  w: 200,
  h: 100,
  rectX2: 700,
  rectY2: 400,
  w2: 100,
  h2: 50,
};

const CANVASWIDTH = 800;
const CANVASHEIGHT = 450;
const INVULNERABILITY = 10;
const R = 0;
const G = 0;
const B = 0;
const ALPHA = 0;
let state = "startScreen";
let character = "";
let enemyDirection = "left";
let hasEnemy = false;
let enemyKilled = false;
let opponent = "";
let enemyJ;
let enemyC;
let enemyBG;
let enemyJRight;
let enemyCRight;
let enemyBGRight;
let hornetImg;
let lilGuyImg;
let LilGuy;
let Hornet;
let Charger;
let Jumper;
let BigGuy;

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
let dmgCooldownCounter = 0;
let isPlayerHit = false;
let isEnemyHit = false;
let gotHit = false;
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
  constructor(x, y, speed) {
    this.pX = x;
    this.pY = y;
    this.playerSpeed = speed;
    this.playerHP = 3;
  }

  backGroundChange() {
    image(theBackGrounds[currentBG], 1, 1);

    if (currentBG === 0) {
      this.pY = 305;

      if (hasEnemy === false && enemyKilled === false) {
        hasEnemy = true;
        Jumper = new Enemy(cords.enemyX-250, cords.enemyY+90, 2);
      }
      else if (hasEnemy === true) {
        opponent = "jumper";
        Jumper.enemyUpdate();
      }

      if (enemyKilled === true) {
        if (this.pX < 60) {
          enemyKilled = false;
          currentBG = 3;
          this.pX = 110;
        }
        if (this.pX > 795) {
          enemyKilled = false;
          currentBG = 1;
          this.pX = 15;
        }
      }
      else {
        if (this.pX < 85) {
          this.pX = 90;
        }
        if (this.pX > 795) {
          this.pX = 790;
        }
      }
    }

    if (currentBG === 1) {
      this.pY = 375;
      hasEnemy = false;

      if (this.pX < 5) {
        enemyKilled = false;
        currentBG = 0;
        this.pX = 840;
      }
      if (this.pX > 855) {
        enemyKilled = false;
        currentBG = 2;
        this.pX = 15;
      }
    }

    if (currentBG === 2) {
      this.pY = 355;
      hasEnemy = false;

      if (this.pX < 5) {
        enemyKilled = false;
        currentBG = 1;
        this.pX = 840;
      }
      if (this.pX > 680) {
        enemyKilled = false;
        currentBG = 5;
        this.pX = 690;
      }
    }

    if (currentBG === 3) {
      showText();
      this.pY = 355;
      hasEnemy = false;

      if (this.pX > 855) {
        enemyKilled = false;
        currentBG = 4;
        this.pX = 15;
      }
      if (this.pX < 100) {
        this.pX = 105;
      }
    }

    if (currentBG === 4) {
      this.pY = 355;

      if (hasEnemy === false && enemyKilled === false) {
        BigGuy = new Enemy(cords.enemyX-200, cords.enemyY+170, 1);
        hasEnemy = true;
      }
      else if (hasEnemy === true) {
        opponent = "big guy";
        BigGuy.enemyUpdate();
      }

      if (enemyKilled === true) {
        if (this.pX < 5) {
          enemyKilled = false;
          currentBG = 3;
          this.pX = 840;
        }
        if (this.pX > 855) {
          enemyKilled = false;
          currentBG = 5;
          this.pX = 15;
        }
      }
      else {
        if (this.pX < 5) {
          this.pX = 10;
        }
        if (this.pX > 795) {
          this.pX = 790;
        }
      }
    }

    if (currentBG === 5) {
      this.pY = 325;
      showText();

      if (hasEnemy === false && enemyKilled === false) {
        Charger = new Enemy(cords.enemyX-120, cords.enemyY+120, 2);
        hasEnemy = true;
      }
      else if (hasEnemy === true) {
        opponent = "charger";
        Charger.enemyUpdate();
      }
    
      if (enemyKilled === true) {
        if (this.pX < 5) {
          enemyKilled = false;
          currentBG = 4;
          this.pX = 840;
        }
        if (this.pX > 785) {
          this.pX = 780;
        }
      }
      else {
        if (this.pX < 5) {
          this.pX = 10;
        }
        if (this.pX > 785) {
          this.pX = 780;
        }
      }
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
    noStroke();
    fill(R, G, B, ALPHA);

    if (keyIsDown(70) === false) {
      if (character === "LilGuy") {
        circle(this.pX+25, this.pY+30, 20);
        rect(this.pX+20, this.pY+40, 10, 15);
      }
      if (character === "Hornet") {
        circle(this.pX+25, this.pY+35, 20);
      }
    }

    if (keyIsDown(70) === true) {
      if (character === "LilGuy") {
        if (direction === "left") {
          circle(this.pX+25, this.pY+30, 20);
          rect(this.pX+20, this.pY+40, 10, 15);
          line(this.pX+10, this.pY+30, this.pX-40, this.pY+30);
        }
        if (direction === "right") {
          circle(this.pX+25, this.pY+30, 20);
          rect(this.pX+20, this.pY+40, 10, 15);
          line(this.pX+35, this.pY+30, this.pX+80, this.pY+30);
        }
      }
      if (character === "Hornet") {
        if (direction === "left") {
          circle(this.pX+25, this.pY+35, 20);
          line(this.pX+15, this.pY+30, this.pX-25, this.pY+30);
        }
        if (direction === "right") {
          circle(this.pX+25, this.pY+35, 20);
          line(this.pX+35, this.pY+30, this.pX+85, this.pY+30);
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
          direction = "left";
        }
        else {
          if (direction === "left") {
            image(hornetIdle, this.pX-20, this.pY, hornetIdle.width*0.4, hornetIdle.height*0.4);
          }
          if (direction === "right") {
            image(horentIdleRight, this.pX-10, this.pY, horentIdleRight.width*0.4, horentIdleRight.height*0.4);
          }
        }
      }
    }
  }

  playerDamageTaken() {
    if (isPlayerHit === true) {
      this.playerHP -= 1;
      gotHit = true;
      isPlayerHit = false;
    }
    if (this.playerHP < 1) {
      state = "startScreen";
    }
    if (gotHit === true) {
      dmgCooldownCounter += 0.5;
    }
    if (dmgCooldownCounter >= INVULNERABILITY) {
      dmgCooldownCounter = 0;
      gotHit = false;
    }
  }

  playerUpdate() {
    this.playerDamageTaken();
    this.playerMove();
    this.playerAttack();
    this.playerHitBoxes();
  }
}

class Enemy {
  constructor(x, y, speed) {
    this.eX = x;
    this.eY = y;
    this.enemySpeed = speed;
    this.enemyHP = 3;
  }

  enemyMove() {
    if (this.eX <= 70) {
      enemyDirection = "right";
    }
    if (this.eX >= 795) {
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
    noStroke();
    fill(R, G, B, ALPHA);

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

  enemyDamageTaken() {
    if (isEnemyHit === true) {
      this.enemyHP -= 0.5;
      gotHit = true;
      isEnemyHit = false;
    }
    if (this.enemyHP < 1) {
      enemyKilled = true;
    }
    if (gotHit === true) {
      dmgCooldownCounter + 0.5;
    }
    if (dmgCooldownCounter >= INVULNERABILITY) {
      dmgCooldownCounter = 0;
      gotHit = false;
    }
  }

  enemyAttack() {
    if (character === LilGuy) {
      if (opponent === "jumper") {
        if (LilGuy.pX < this.eX) {
          enemyDirection = "left";
        }
        if (LilGuy.pX > this.eX) {
          enemyDirection = "right";
        }
      }
    }
  }

  isDead() {
    if (enemyKilled === true) {
      hasEnemy = false;
      opponent = " ";
    }
  }

  enemyUpdate() {
    this.isDead();
    this.enemyAttack();
    this.enemyDamageTaken();
    this.enemyMove();
    this.enemyHitBoxes();
  }
}

function setup() {
  createCanvas(CANVASWIDTH, CANVASHEIGHT);
  theBackGrounds = [eggRoomBG , startingRoomBG, greeneryRoomBG,
                    statueRoomBG, gloomyRoomBG, graveYardRoomBG];
}

function draw() {
  if (state === "startScreen") {
    background(220);
    showText();
    showButton();
  }

  if (state === "characterChoice") {
    background(220);
    showText();
    Choices();
  }

  if (state === "play") {
    if (character === "LilGuy") {
      hitBoxCheck();
      LilGuy.backGroundChange();
      LilGuy.playerUpdate();
    }
    if (character === "Hornet") {
      hitBoxCheck();
      Hornet.backGroundChange();
      Hornet.playerUpdate();
    }
  }
}

function showButton() { //shows the begin button
  stroke("black");
  fill("gray");
  rect(cords.rectX, cords.rectY, cords.w, cords.h);
  rect(cords.rectX2, cords.rectY2, cords.w2, cords.h2);
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
    if (mouseX >= cords.rectX2 && mouseX <= cords.rectX2 + cords.w2 && mouseY >= cords.rectY2 && mouseY <= cords.rectY2 + cords.h2) {
      state = "enemyIndex";
      showEnemyIndex();
    }
  }
  if (state === "characterChoice") {//checks which character is chosen
    if (mouseX >= cords.lgX && mouseX <= cords.lgX + lilGuyImg.width*0.2 && mouseY >= cords.lgY && mouseY <= cords.lgY + lilGuyImg.height*0.2) {
      LilGuy = new Player(cords.lgX, cords.lgY, 5);
      character = "LilGuy";
      state = "play";
    }
    if (mouseX >= cords.hX && mouseX <= cords.hX + hornetImg.width*0.2 && mouseY >= cords.hY && mouseY <= cords.hY + hornetImg.height*0.23) {
      Hornet = new Player(cords.hX, cords.hY, 9);
      character = "Hornet";
      state = "play";
    }
  }
}

function hitBoxCheck() {
  if (dmgCooldownCounter === 0) {
    if (keyIsDown(70) === false) {
      if (character === "LilGuy") {
        if (opponent === "jumper") {
          isPlayerHit = collideCircleCircle(Jumper.eX+20, Jumper.eY+40, 25, LilGuy.pX+20, LilGuy.pY+30, 20);
        }
        if (opponent === "charger") {
          isPlayerHit = collideCircleCircle(Charger.eX+30, Charger.eY+40, 35, LilGuy.pX+20, LilGuy.pY+30, 20);
        }
        if (opponent === "big guy") {
          isPlayerHit = collideCircleCircle(BigGuy.eX, BigGuy.eY, 35, LilGuy.pX+20, LilGuy.pY+30, 20);
        }
      }
      if (character === "Hornet") {
        if (opponent === "jumper") {
          isPlayerHit = collideCircleCircle(Jumper.eX+20, Jumper.eY+40, 25, Hornet.pX+25, Hornet.pY+35, 20);
        }
        if (opponent === "charger") {
          isPlayerHit = collideCircleCircle(Charger.eX+30, Charger.eY+40, 35, Hornet.pX+25, Hornet.pY+35, 20);
        }
        if (opponent === "big guy") {
          isPlayerHit = collideCircleCircle(BigGuy.eX+20, BigGuy.eY+25, 35, Hornet.pX+25, Hornet.pY+35, 20);
        }
      }
    }
  
    if (keyIsDown(70) === true) {
      if (character === "LilGuy") {
        if (direction === "left") {
          if (opponent === "jumper") {
            isEnemyHit = collideLineCircle(LilGuy.pX+10, LilGuy.pY+30, LilGuy.pX-40, LilGuy.pY+30, Jumper.eX+20, Jumper.eY+40, 25);
          }
          if (opponent === "charger") {
            isEnemyHit = collideLineCircle(LilGuy.pX+10, LilGuy.pY+30, LilGuy.pX-40, LilGuy.pY+30, Charger.eX+30, Charger.eY+40, 35);
          }
          if (opponent === "big guy") {
            isEnemyHit = collideLineCircle(LilGuy.pX+10, LilGuy.pY+30, LilGuy.pX-40, LilGuy.pY+30, BigGuy.eX+20, BigGuy.eY+25, 35);
          }
        }
        if (direction === "right") {
          if (opponent === "jumper") {
            isEnemyHit = collideLineCircle(LilGuy.pX+30, LilGuy.pY+35, LilGuy.pX+80, LilGuy.pY+30, Jumper.eX+20, Jumper.eY+40, 25);
          }
          if (opponent === "charger") {
            isEnemyHit = collideLineCircle(LilGuy.pX+30, LilGuy.pY+35, LilGuy.pX+80, LilGuy.pY+30, Charger.eX+30, Charger.eY+40, 35);
          }
          if (opponent === "big guy") {
            isEnemyHit = collideLineCircle(LilGuy.pX+30, LilGuy.pY+35, LilGuy.pX+80, LilGuy.pY+30, BigGuy.eX+20, BigGuy.eY+25, 35);
          }
        }
      }
      if (character === "Hornet") {
        if (direction === "left") {
          if (opponent === "jumper") {
            isEnemyHit = collideLineCircle(Hornet.pX+15, Hornet.pY+30, Hornet.pX-25, Hornet.pY+30, Jumper.eX+20, Jumper.eY+40, 25);
          }
          if (opponent === "charger") {
            isEnemyHit = collideLineCircle(Hornet.pX+15, Hornet.pY+30, Hornet.pX-25, Hornet.pY+30, Charger.eX+30, Charger.eY+40, 35);
          }
          if (opponent === "big guy") {
            isEnemyHit = collideLineCircle(Hornet.pX+15, Hornet.pY+30, Hornet.pX-25, Hornet.pY+30, BigGuy.eX+20, BigGuy.eY+25, 35);
          }
        }
        if (direction === "right") {
          if (opponent === "jumper") {
            isEnemyHit = collideLineCircle(Hornet.pX+35, Hornet.pY+30, Hornet.pX+85, Hornet.pY+30, Jumper.eX+20, Jumper.eY+40, 25);
          }
          if (opponent === "charger") {
            isEnemyHit = collideLineCircle(Hornet.pX+35, Hornet.pY+30, Hornet.pX+85, Hornet.pY+30, Charger.eX+30, Charger.eY+40, 35);
          }
          if (opponent === "big guy") {
            isEnemyHit = collideLineCircle(Hornet.pX+35, Hornet.pY+30, Hornet.pX+85, Hornet.pY+30, BigGuy.eX+20, BigGuy.eY+25, 35);
          }
        }
      }
    }
  }
}

function showText() {
  if (state === "startScreen") {
    textSize(25);
    text("Welcome to my horrible copy of the game Hollow Knight", 80, 30);
    text("Use A and D to move, F to attack. Press the large button to begin", 50, 80);
    textSize(18);
    text("Explore the rooms, be careful of falling, there are no ladders to get back up.", 70, 300);
    text("Fight off enemies, don't touch them, they bite! You need to defeat your foe before moving on.", 30, 330);
    text("and be careful.... they come back.", 50, 390 );
    text ("click this to see the enemy index.", 530, 390);
    text("---->", 650, 420);
  }

  if (state === "enemyIndex") {
    background(200);
    fill("white");
    // titles/names of enemies
    text("The Jumper", 55, 40);
    text("The Charger", 320, 40);
    text("Big Guy...?", 620, 40);

    //descriptions and lore of enemies
    text("It is said that at one point", 5, 300);
    text("the 'jumper' was able to jump", 5, 320);
    text("but time has worn it down, weakened it.", 5, 340);

  }

  if (state === "play") {
    if (currentBG === 3 || currentBG === 5) {
      textSize(24);
      fill("white");
      text("oops... looks like you fell.", 30, 50);
    }
  }
}

function showEnemyIndex() {
  showText();
  image(enemyJ, 50, 50);
  image(enemyC, 300, 50);
  image(enemyBG, 600, 50);
}