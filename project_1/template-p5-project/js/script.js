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
  width: 300,
  height: 75,
  roundness: 20
}

let fish1 = {
  x: 0,
  y: 0,
  //size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}



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
  fishCountBox.x = width-1250;
  fishCountBox.y = height-50;

  //setting the fish1 x position to be at the left edge of the fishing interface box
  fish1.x = 500;
  //when the fish position resets, the y will be random and inside the fishing interface box, but not too close to the top or bottom
  fish1.y = random(200, 900);
  fish1.vx = fish1.speed;

}


/**
 * Description of draw()
*/
function draw() {
  background(100, 0, 220);
  bgElements();
  display();
  fish();

}

function bgElements() { // i made this function just to help with the layering of certain visual elements
//these ones will be all the way in the back of the screen

//main fishing box
imageMode(CENTER);
image(fishBgImg, width/2, height/2);

}


function display() {

  //user display, it is just the tip of the hook
  imageMode(CENTER);
  ellipse(mouseX, mouseY, 25, 25);
  //hook string, i want it to follow the mouse X position
  push();
  noStroke();
  rectMode(CORNER);
  //rect(mouseX, mouseY, 5, 1000);
  pop();

  //fish1 display
  push();
  imageMode(CENTER);
  image(fishShadowImg, fish1.x, fish1.y);
  pop();

  //fish inventory box
  push();
  noStroke();
  rectMode(CENTER);
  rect(inventoryBox.x, inventoryBox.y, inventoryBox.width, inventoryBox.height, 0, 50, 50, 0);
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

  //fish count box
  push();
  rectMode(CENTER);
  noStroke();
  rect(fishCountBox.x, fishCountBox.y, fishCountBox.width, fishCountBox.height, fishCountBox.roundness);
  pop();

}

function fish() {

  //the min and max y position each fish is allowed to swim to
  let fishMinY = 200;
  let fishMaxY = 800;

  constrain (fish1.y, fishMinY, fishMaxY);

  //fish1 movement
  fish1.x = fish1.x + fish1.vx;
  fish1.y = fish1.y + fish1.vy;

  let swimX = random();
  if(swimX < 0.001) {
    fish1.vx = random(-fish1.speed, fish1.speed);
  }

  //Y movement of the fish1
  let swimY = random();
  //how often the fish will swim up or down
  if (swimY < 0.03) {
    fish1.vy = random(-fish1.speed, fish1.speed);
  }

  //the fish won't swim any higher or lower than this
  constrain (fish1.y, fishMinY, fishMaxY);
  constrain (fish1.x,)

  //fish1 will go offscreen a bit before resetting
  let reset1 = 1700; //1500 = end of the fish interface + 700 to give it time to reset
  let reset2 = 300;

  if (fish1.x > reset1) {
    //if the fish swims too much to the right, it will respawn on the left
    fish1.x = 500;
    //the fish won't spawn too close to the top
    fish1.y = random(fishMinY, fishMaxY);
  }

  if(fish1.x < reset2) {
    fish1.x = 1600; //if the fish swims too much to the left, it will reset on the right
    fish1.y = random(fishMinY, fishMaxY);
  }

}

function chooseFish() { //the code will decide which fish will bite, each fish/object has a drop rate % out of 100

  let i = random(0,100)

  if (i <= 11) {
		circle(100, 100, 50);
    //perch
	}
	else if (i <= 22 && i > 11) {
		square(100, 100, 50);
    //bass
	}
  else if (i <= 32 && i > 22) {
    circle(150, 150, 75);
    //frog
  }
  else if (i <= 42 && i > 32){
    square(250, 250, 25);
    //loach
  }
  else if(i <= 52 && i > 42){
    circle(250, 100, 75);
    //carp
  }
  else if(i <= 61.5 && i > 52){
    square(200, 200, 25);
    //catfish
  }
  else if(i <= 69.5 && i > 61.5){
    circle(500, 500, 50);
    //empty soda can
  }
  else if(i <= 76.5 && i > 69.5){
    square(550, 550, 50);
    //soggy sock
  }
  else if(i <= 82.5 && i > 76.5){
    circle(300, 300, 75);
    //salmon
  }
  else if(i <= 88.5 && i > 82.5){
    square (300, 300, 100);
    //broken glasses
  }
  else if(i <= 93.5 && i > 88.5){
    circle(700, 700, 100);
    //koi
  }
  else if(i <= 97.5 && i > 93.5){
    square(750, 750, 50);
    //sturgeon
  }
  else if(i <= 98.5 && i > 97.5){
    circle(750, 750, 50);
    //crystal
  }
  else if(i <= 99.5 && i > 98.5){
    square(800, 800, 100);
    //treasure chest
  }
  else if(i <= 100 && i > 99.5){
    square(1000, 1000, 50);
    //mutant carp
  }
}

function perch() {

}