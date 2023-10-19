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

//each box inside the inventory box for each fish
let inventoryFishBox = {
  x: undefined,
  y: undefined,
  width: 410,
  height: 55
}

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

//variable for if each fish/object has been caught before or not + the counter for times it has been caught
let frog = {
  caught: false,
  counter: 0
}

let catfish = {
  caught: false,
  counter: 0
}

let loach = {
  caught: false,
  counter: 0
}

let perch = {
  caught: false,
  counter: 0
}

let salmon = {
  caught: false,
  counter: 0
}

let carp = {
  caught: false,
  counter: 0
}

let koi = {
  caught: false,
  counter: 0
}

let mutantCarp = {
  caught: false,
  counter: 0
}

let sturgeon = {
  caught: false,
  counter: 0
}

let bass = {
  caught: false,
  counter: 0
}

let crystal = {
  caught: false,
  counter: 0
}

let brokenGlasses = {
  caught: false,
  counter: 0
}

let soggySock = {
  caught: false,
  counter: 0
}

let sodaCan = {
  caught: false,
  counter: 0
}

let treasureChest = {
  caught: false,
  counter: 0
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
  fishCountBox.x = width-1200;
  fishCountBox.y = height-50;

  //setting the fish1 x position to be at the left edge of the fishing interface box
  fish1.x = 500;
  //when the fish position resets, the y will be random and inside the fishing interface box, but not too close to the top or bottom
  fish1.y = random(200, 900);
  fish1.vx = fish1.speed;

  //setting up the hook (user) position
  hook.x = width/2;
  hook.y = mouseY;

  //setting up the position of the inventory fish box
  inventoryFishBox.x = width-275;
  inventoryFishBox.y = 125;

}


/**
 * Description of draw()
*/
function draw() {
  background(100, 0, 220);
  display();
  fish();
  checkBite();

}


function display() {

  //main fishing box
  imageMode(CENTER);
  image(fishBgImg, width/2, height/2);

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
  rect(inventoryBox.x, inventoryBox.y, inventoryBox.width, inventoryBox.height, 0, 30, 30, 0); // the left edges are not rounded so the inventory doesn't poke through the fishing interface bg
  pop();

  //display of each fish box inside the inventory, named after the fish each box represents. each function decides whether the display of the fish box will be greyed out or not depending on if that fish has been caught before

  frogBox();
  catfishBox();
  loachBox();
  perchBox();
  salmonBox();
  carpBox();
  koiBox();
  mutantCarpBox();
  sturgeonBox();
  bassBox();
  crystalBox();
  brokenGlassesBox();
  soggySockBox();
  sodaCanBox();
  treasureChestBox();

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

  // fish will bounce off the edge of the fishing interface if it touches it
  if (fish1.x <= 500 || fish1.x >= 1500) {
    fish1.vx = -fish1.vx;
  }
  if (fish1.y <= 250 || fish1.y >= 800) {
    fish1.vy = -fish1.vy;
  }

  //fish1 will go offscreen a bit before resetting
  //let reset1 = 1700; //1500 = end of the fish interface + 200 to give it time to reset
  //let reset2 = 300; //500 (beginning of fish interface) - 200 to give it more time to reset

  //if (fish1.x > reset1) {
    //if the fish swims too much to the right, it will respawn on the left
  //  fish1.x = 500;
  //}

  //if(fish1.x < reset2) {
  //  fish1.x = 1600; //if the fish swims too much to the left, it will reset on the right

  //}

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


function chooseFish() { 
  
  //the code will decide which fish will bite, each fish/object has a drop rate % out of 100 and is worth a certain amount of score
  //when a fish/object is caught for the first time, it will reveal what it is in the inventory box + keep track of how many of them have been caught

  let i = random(0,100)

  if (i <= 11) {
    score = score+120;
    //perch
    perch.caught = true;
    perch.counter++;
	}
	else if (i <= 22 && i > 11) {
    score = score+200;
    bass.caught = true;
    bass.counter++;
    //bass
	}
  else if (i <= 32 && i > 22) {
    score = score+100;
    frog.caught = true;
    frog.counter++;
    //frog
  }
  else if (i <= 42 && i > 32) {
    score = score+150;
    loach.caught = true;
    loach.counter++;
    //loach
  }
  else if(i <= 52 && i > 42) {
    score = score+120;
    carp.caught = true;
    carp.counter++;
    //carp
  }
  else if(i <= 61.5 && i > 52) {
    score = score+200;;
    carp.caught = true;
    carp.counter++;
    //catfish
  }
  else if(i <= 69.5 && i > 61.5) {
    score = score+5;
    sodaCan.caught = true;
    sodaCan.counter++;
    //empty soda can
  }
  else if(i <= 76.5 && i > 69.5) {
    score = score+5;
    soggySock.caught = true;
    soggySock.counter++;
    //soggy sock
  }
  else if(i <= 82.5 && i > 76.5) {
    score = score+500;
    salmon.caught = true;
    salmon.counter++;
    //salmon
  }
  else if(i <= 88.5 && i > 82.5) {
    score = score+10;
    brokenGlasses.caught = true;
    brokenGlasses.counter++;
    //broken glasses
  }
  else if(i <= 93.5 && i > 88.5) {
    score = score+1000;
    koi.caught = true;
    koi.counter++;
    //koi
  }
  else if(i <= 97.5 && i > 93.5) {
    score = score+5000;
    sturgeon.caught = true;
    sturgeon.counter++;
    //sturgeon
  }
  else if(i <= 98.5 && i > 97.5) {
    score = score+10000;
    crystal.caught = true;
    crystal.counter++;
    //crystal
  }
  else if(i <= 99.5 && i > 98.5) {
    score = score+15000;
    treasureChest.caught = true;
    treasureChest.counter++;
    //treasure chest
  }
  else if(i <= 100 && i > 99.5) {
    score = score+30000;
    mutantCarp.caught = true;
    mutantCarp.counter++;
    //mutant carp
  }
}


function frogBox() {
//display of the frog box if it hasn't been caught yet
 if (frog.caught === false) {
  push();
  rectMode(CENTER);
  fill(100, 100, 100);
  rect(inventoryFishBox.x, inventoryFishBox.y, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+15);
  pop();
 }
  else if(frog.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Frog', inventoryFishBox.x-100, inventoryFishBox.y+15);
  text(frog.counter, inventoryFishBox.x, inventoryFishBox.y+15);
  pop();
  }

}

//adding +55 to the y position for every rect so that they are one on top of the other

function catfishBox() {
  
  if (catfish.caught === false) {
  push();
  rectMode(CENTER);
  fill(150, 150, 150);
  rect(inventoryFishBox.x, inventoryFishBox.y+55, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+70);
  pop();
  }
  else if(catfish.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+55, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Catfish', inventoryFishBox.x-100, inventoryFishBox.y+70); //15+55 (the +y position)
  ellipse(inventoryFishBox.x, inventoryFishBox.y+70)
  text(catfish.counter, inventoryFishBox.x, inventoryFishBox.y+70);
  pop();
  }
  
}

function loachBox() {
    
  if (loach.caught === false) {
  push();
  rectMode(CENTER);
  fill(100, 100, 100);
  rect(inventoryFishBox.x, inventoryFishBox.y+110, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+125); // 15+55( +y for the box)
  pop();
  }
  else if(loach.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+110, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Loach', inventoryFishBox.x-100, inventoryFishBox.y+125);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+125)
  text(loach.counter, inventoryFishBox.x, inventoryFishBox.y+125);
  pop();
  }
  
}

function perchBox() {

  if (perch.caught === false) {
  push();
  rectMode(CENTER);
  fill(150, 150, 150);
  rect(inventoryFishBox.x, inventoryFishBox.y+165, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+180);
  pop();
  }
  else if (perch.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+165, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop(); 
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Perch', inventoryFishBox.x-100, inventoryFishBox.y+180);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+180)
  text(perch.counter, inventoryFishBox.x, inventoryFishBox.y+180);
  pop();
  }
  
}

function salmonBox() {
    
  if (salmon.caught === false) {
  push();
  rectMode(CENTER);
  fill(100, 100, 100);
  rect(inventoryFishBox.x, inventoryFishBox.y+220, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+235);
  pop();
  }
  else if (salmon.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+220, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Salmon', inventoryFishBox.x-100, inventoryFishBox.y+235);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+235)
  text(salmon.counter, inventoryFishBox.x, inventoryFishBox.y+235);
  pop();
  }
  
}

function carpBox() {
    
  if (carp.caught === false) {
  push();
  rectMode(CENTER);
  fill(150, 150, 150);
  rect(inventoryFishBox.x, inventoryFishBox.y+275, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+290);
  pop();
  }
  else if (carp.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+275, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Carp', inventoryFishBox.x-100, inventoryFishBox.y+290);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+290)
  text(carp.counter, inventoryFishBox.x, inventoryFishBox.y+290);
  pop();
  }
  
}

function koiBox() {
    
  if (koi.caught === false) {
  push();
  rectMode(CENTER);
  fill(100, 100, 100);
  rect(inventoryFishBox.x, inventoryFishBox.y+330, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+345);
  pop();
  }
  else if (koi.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+330, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Koi', inventoryFishBox.x-100, inventoryFishBox.y+345);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+345)
  text(koi.counter, inventoryFishBox.x, inventoryFishBox.y+345);
  pop();
  }
  
}

function mutantCarpBox() {
      
  if (mutantCarp.caught === false) {
  push();
  rectMode(CENTER);
  fill(150, 150, 150);
  rect(inventoryFishBox.x, inventoryFishBox.y+385, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+400);
  pop();
  }
  else if (mutantCarp.caught === true) {
    push();
    rectMode(CENTER);
    fill(255);
    rect(inventoryFishBox.x, inventoryFishBox.y+385, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
    pop();
    //display text
    push();
    fill(0);
    textSize(45);
    textAlign(CENTER);
    text('Mutant Carp', inventoryFishBox.x-100, inventoryFishBox.y+400);
    ellipse(inventoryFishBox.x, inventoryFishBox.y+400)
    text(mutantCarp.counter, inventoryFishBox.x, inventoryFishBox.y+400);
    pop();
  }
  
}

function sturgeonBox() {
      
  if (sturgeon.caught === false) {
  push();
  rectMode(CENTER);
  fill(100, 100, 100);
  rect(inventoryFishBox.x, inventoryFishBox.y+440, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+455);
  pop();
  }
  else if (sturgeon.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+440, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Sturgeon', inventoryFishBox.x-100, inventoryFishBox.y+455);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+455)
  text(sturgeon.counter, inventoryFishBox.x, inventoryFishBox.y+455);
  pop();
  }
  
}

function bassBox() {
      
  if (bass.caught === false) {
  push();
  rectMode(CENTER);
  fill(150, 150, 150);
  rect(inventoryFishBox.x, inventoryFishBox.y+495, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+510);
  pop();
  }
  else if (bass.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+495, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Bass', inventoryFishBox.x-100, inventoryFishBox.y+510);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+510)
  text(bass.counter, inventoryFishBox.x, inventoryFishBox.y+510);
  pop();
  }
  
}

function crystalBox() {
      
  if (crystal.caught === false) {
  push();
  rectMode(CENTER);
  fill(100, 100, 100);
  rect(inventoryFishBox.x, inventoryFishBox.y+550, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+565);
  pop();
  }
  else if (crystal.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+550, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Crystal', inventoryFishBox.x-100, inventoryFishBox.y+565);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+565)
  text(crystal.counter, inventoryFishBox.x, inventoryFishBox.y+565);
  pop();
  }
  
}

function brokenGlassesBox() {
      
  if (brokenGlasses.caught === false) {
  push();
  rectMode(CENTER);
  fill(150, 150, 150);
  rect(inventoryFishBox.x, inventoryFishBox.y+605, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+620);
  pop();
  }
  else if (brokenGlasses.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+605, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Broken Glasses', inventoryFishBox.x-100, inventoryFishBox.y+620);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+620)
  text(brokenGlasses.counter, inventoryFishBox.x, inventoryFishBox.y+620);
  pop();
  }
  
}

function soggySockBox() {
      
  if (soggySock.caught === false) {
  push();
  rectMode(CENTER);
  fill(100, 100, 100);
  rect(inventoryFishBox.x, inventoryFishBox.y+660, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+675);
  pop();
  }
  else if (soggySock.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+660, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Soggy Sock', inventoryFishBox.x-100, inventoryFishBox.y+675);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+675)
  text(soggySock.counter, inventoryFishBox.x, inventoryFishBox.y+675);
  pop();
  }
  
}

function sodaCanBox() {
      
  if (sodaCan.caught === false) {
  push();
  rectMode(CENTER);
  fill(150, 150, 150);
  rect(inventoryFishBox.x, inventoryFishBox.y+715, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+730);
  pop();
  }
  else if (sodaCan.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+715, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Soda Can', inventoryFishBox.x-100, inventoryFishBox.y+730);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+730)
  text(sodaCan.counter, inventoryFishBox.x, inventoryFishBox.y+730);
  pop();
  }
  
}

function treasureChestBox() {
      
  if (treasureChest.caught === false) {
  push();
  rectMode(CENTER);
  fill(100, 100, 100);
  rect(inventoryFishBox.x, inventoryFishBox.y+770, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('???', inventoryFishBox.x, inventoryFishBox.y+785);
  pop();
  }
  else if(treasureChest.caught === true) {
  push();
  rectMode(CENTER);
  fill(255);
  rect(inventoryFishBox.x, inventoryFishBox.y+770, inventoryFishBox.width, inventoryFishBox.height, 0, 15, 15, 0);
  pop();
  //display text
  push();
  fill(0);
  textSize(45);
  textAlign(CENTER);
  text('Treasure Chest', inventoryFishBox.x-100, inventoryFishBox.y+785);
  ellipse(inventoryFishBox.x, inventoryFishBox.y+785)
  text(treasureChest.counter, inventoryFishBox.x, inventoryFishBox.y+785);
  pop();
  }
  
}