/**
 * Fishing simulator
 * Catherine Zaloshnja
 * Originally I wanted the fishing game to be more complex and inspired by the fishing system in Final Fantasy XIV,
 * but I simplified it to be more similar to Stardew Valley/Animal Crossing like fishing, and THEN I simplified it again
 * cause I couldn't figure out how to make that work.
 */

"use strict";

let state = 'title' //can be 'title', 'simulation', 'allFishCaught'

//setting up the variables for all the image assets
let borderImg;
let fishBgImg;
let hookImg;
let fishShadowImg;
let smallFishImg;

//a box showing what fish the user has or has not yet caught
let inventoryBox = {
  x: undefined,
  y: undefined,
  width: 450,
  height: 900
};

//each different type of fish caught is worth a certain amount, this will keep track of the user's score
let scoreBox = {
  x: undefined,
  y: undefined,
  width: 300,
  height: 75,
  roundness: 20
}

//this box will keep count of how many fish the user has caught
let fishCountBox = {
  x: undefined,
  y: undefined,
  width: 400,
  height: 75,
  roundness: 20
}

let hook = {
  x: 0,
  y: 0,
  size: 25
}

let fish1 = {
  x: 0,
  y: 0,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 1.5
}

//current score
let score = 0;

//number of fish caught
let numFish = 0;


/**
 * Description of preload
*/
function preload() {

  borderImg = loadImage("assets/images/border.png");
  fishBgImg = loadImage("assets/images/bg-fish.png");
  hookImg = loadImage("assets/images/hook.png");
  fishShadowImg = loadImage("assets/images/fish.png");
  smallFishImg = loadImage("assets/images/smallfish.png");

}


/**
 * Description of setup
*/
function setup() {
  createCanvas(2000, 1000);

  //setting up the position of the inventory box
  inventoryBox.x = width-275;
  inventoryBox.y = height/2;

  //setting up the position of the score box
  scoreBox.x = width-750;
  scoreBox.y = height-50;

  //setting up the position of the fish count box
  fishCountBox.x = width-1200;
  fishCountBox.y = height-50;

  //setting the fish1 x position to be at the left edge of the fishing interface box
  fish1.x = 500;
  //when the fish position resets, the y will be random and inside the fishing interface box, but not too close to the top or bottom
  fish1.y = random(200, 900);
  fish1.vx = fish1.speed;

  hook.x = width/2;
  hook.y = mouseY;

}


/**
 * Description of draw()
*/
function draw() {
  background(100, 0, 220);
  bgElements();
  display();
  fish();
  checkBite();

}

function bgElements() { // i made this function just to help with the layering of certain visual elements
//these ones will be all the way in the back of the screen

//main fishing box
imageMode(CENTER);
image(fishBgImg, width/2, height/2);

}


function display() {

  //fish1 display
  push();
  imageMode(CENTER);
  //constraining the fish y position so that it does not go too high or low
  let fishy = constrain (fish1.y, 250, 800);
  image(fishShadowImg, fish1.x, fishy, fish1.size, fish1.size);
  pop();

  //fish inventory box
  push();
  noStroke();
  rectMode(CENTER);
  rect(inventoryBox.x, inventoryBox.y, inventoryBox.width, inventoryBox.height, 0, 50, 50, 0);
  pop();

  //user display, it is just the tip of the hook
  imageMode(CENTER);
  //constrain user y movement to the fishing box
  hook.y = constrain(mouseY, 50, 950);
  ellipse(hook.x, hook.y, hook.size, hook.size);
  //hook string, i want it to follow the mouse X position
  push();
  noStroke();
  rectMode(CORNER);
  //rect(mouseX, mouseY, 5, 1000);
  pop();

  //border of the main fishing box
  imageMode(CENTER);
  image(borderImg, width/2, height/2);

  //score box
  push();
  rectMode(CENTER);
  noStroke();
  rect(scoreBox.x, scoreBox.y, scoreBox.width, scoreBox.height, scoreBox.roundness);
  pop();


  //display score text
  push();
  fill(0);
  textSize(45);
  text('Score:', scoreBox.x-120, scoreBox.y+15);
  textAlign(LEFT);
  //number of the score
  text(score, scoreBox.x+15, scoreBox.y+16);
  pop();

  //fish count box
  push();
  rectMode(CENTER);
  noStroke();
  rect(fishCountBox.x, fishCountBox.y, fishCountBox.width, fishCountBox.height, fishCountBox.roundness);
  pop();
  
  push();
  fill(0);
  textSize(45);
  text('Fish caught:', fishCountBox.x-175, fishCountBox.y+15);
  textAlign(LEFT);
  text(numFish, fishCountBox.x+75, fishCountBox.y+16);
  pop();

}

function fish() {

  //fish1 movement
  fish1.x = fish1.x + fish1.vx;
  fish1.y = fish1.y + fish1.vy;

  //how often the fish will turn left or right
  let swimX = random();
  if(swimX < 0.001) {
    fish1.vx = random(-fish1.speed, fish1.speed);
  }

  //fish img will flip depending on what way its swimming

  //Y movement of the fish1
  let swimY = random();
  //how often the fish will swim up or down
  if (swimY < 0.03) {
    fish1.vy = random(-fish1.speed, fish1.speed);
  }

  //fish1 will go offscreen a bit before resetting
  let reset1 = 1700; //1500 = end of the fish interface + 200 to give it time to reset
  let reset2 = 300; //500 (beginning of fish interface) - 200 to give it more time to reset

  if (fish1.x > reset1) {
    //if the fish swims too much to the right, it will respawn on the left
    fish1.x = 500;
  }

  if(fish1.x < reset2) {
    fish1.x = 1600; //if the fish swims too much to the left, it will reset on the right

  }

}

function checkBite() {

//check if the fish bit the hook, if it does, it will follow the hook
let d1 = dist(hook.x, hook.y, fish1.x, fish1.y);
if (d1 < hook.size + fish1.size/2) {
  fish1.y = hook.y;
  fish1.x = hook.x;
  caughtCheck();
}
}

function caughtCheck() {
  //check if the fish got caught once it got reeled in (dragged to the top)
  if (fish1.y < 250) {
    fish1.x = 500;
    fish1.vy = random(-fish1.speed, fish1.speed)
    fish1.y = random(250, 800);
    chooseFish();
    numFish++
  }
}


function chooseFish() { //the code will decide which fish will bite, each fish/object has a drop rate % out of 100

  let i = random(0,100)

  if (i <= 11) {
    score = score+120;
    //perch
	}
	else if (i <= 22 && i > 11) {
    score = score+200;
    //bass
	}
  else if (i <= 32 && i > 22) {
    score = score+100;
    //frog
  }
  else if (i <= 42 && i > 32) {
    score = score+150;
    //loach
  }
  else if(i <= 52 && i > 42) {
    score = score+120;
    //carp
  }
  else if(i <= 61.5 && i > 52) {
    score = score+200;;
    //catfish
  }
  else if(i <= 69.5 && i > 61.5) {
    score = score+5;
    //empty soda can
  }
  else if(i <= 76.5 && i > 69.5) {
    score = score+5;
    //soggy sock
  }
  else if(i <= 82.5 && i > 76.5) {
    score = score+500;
    //salmon
  }
  else if(i <= 88.5 && i > 82.5) {
    score = score+10;
    //broken glasses
  }
  else if(i <= 93.5 && i > 88.5) {
    score = score+1000;
    //koi
  }
  else if(i <= 97.5 && i > 93.5) {
    score = score+5000;
    //sturgeon
  }
  else if(i <= 98.5 && i > 97.5) {
    score = score+10000;
    //crystal
  }
  else if(i <= 99.5 && i > 98.5) {
    score = score+15000;
    //treasure chest
  }
  else if(i <= 100 && i > 99.5) {
    score = score+30000;
    //mutant carp
  }
}