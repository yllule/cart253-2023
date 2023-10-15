/**
 * Fishing simulator
 * Catherine Zaloshnja
 * Originally I wanted the fishing game to be more complex and inspired by the fishing system in Final Fantasy XIV,
 * but finally I settled for something simpler, more similar to Stardew Valley/Animal Crossing like fishing since it was more simpler to make.
 */

"use strict";

//setting the variable for the button to cast the line
let buttonCast = {
  x: undefined,
  y: undefined,
  width: 250,
  height: 75,
  //text position
  textX: undefined,
  textY: undefined,
  isBeingPressed: false,
  widthChangeAmount: 245,
  heightChangeAmount: 70
};

//setting the variable for the button to hook the line
let buttonHook = {
  x: undefined,
  y: undefined,
  width: 250,
  height: 75,
  //text position
  textX: undefined,
  textY: undefined,
  isBeingPressed: false,
  widthChangeAmount: 245,
  heightChangeAmount: 70
};

let inventoryBox = {
  x: undefined,
  y: undefined,
  width: 500,
  height: 850
};

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
  createCanvas(1500, 1000);
  //setting up the position of the button + text, trying to center the text to the button by eye
  buttonCast.x = width/5;
  buttonCast.y = height-100;
  buttonCast.textX = buttonCast.x;
  buttonCast.textY = buttonCast.y+12;

  //setting up the position of the second button so that i will always show next to the first one
  buttonHook.x = buttonCast.x + 300;
  buttonHook.y = buttonCast.y;
  buttonHook.textX = buttonHook.x;
  buttonHook.textY = buttonHook.y+12;

  //setting up the position of the inventory box
  inventoryBox.x = width-300;
  inventoryBox.y = height/2;

}


/**
 * Description of draw()
*/
function draw() {
  background(0);
  drawButtonCast();
  drawButtonHook();
  drawInventoryBox();

}

function drawButtonCast() {

  //adding feedback to the button when it gets clicked
  if (mouseIsPressed && mouseInsideButtonCast()) {
    //display of cast button when clicked
    push();
    noStroke();
    rectMode(CENTER);
    rect(buttonCast.x, buttonCast.y, buttonCast.widthChangeAmount, buttonCast.heightChangeAmount, 25);
    pop();
    //you cast the line and the code will check which fish will bite
    chooseFish();
  } 
  else {
    //display of cast button when not clicked
    push();
    noStroke();
    rectMode(CENTER);
    rect(buttonCast.x, buttonCast.y, buttonCast.width, buttonCast.height, 25);
    pop();
  }

//cast button text
  push();
  noStroke();
  textSize(35);
  textAlign(CENTER);
  fill(255, 0, 0);
  text('Cast line', buttonCast.textX, buttonCast.textY);
  pop();
}

function drawButtonHook() {

//adding feedback to the button when it gets clicked

if (mouseIsPressed === true && mouseInsideButtonHook()) {
  //display of hook button when clicked
  push();
  noStroke();
  rectMode(CENTER);
  rect(buttonHook.x, buttonHook.y, buttonHook.widthChangeAmount, buttonHook.heightChangeAmount, 25);
  pop();
  //once you click the button you reel in the fish
  hookFish();
} else {
  //display of hook button when not clicked
  push();
  noStroke();
  rectMode(CENTER);
  rect(buttonHook.x, buttonHook.y, buttonHook.width, buttonHook.height, 25);
  pop();
}

//hook button text
  push();
  noStroke();
  textSize(35);
  textAlign(CENTER);
  fill(0);
  text('Hook', buttonHook.textX, buttonHook.textY);
  pop();
}

function drawInventoryBox(){
  push();
  noStroke();
  rectMode(CENTER);
  rect(inventoryBox.x, inventoryBox.y, inventoryBox.width, inventoryBox.height, 50);
  pop();
}

function mouseInsideButtonCast() {
  let d = dist(mouseX, mouseY, buttonCast.x, buttonCast.y);
  if (mouseX >= buttonCast.x - buttonCast.width/2 && mouseX <= buttonCast.x + buttonCast.width/2 && mouseY >= buttonCast.y - buttonCast.height/2 && mouseY <= buttonCast.y + buttonCast.height/2) { //check if mouse is inside the cast button
    return true;
  } 
  else {
    return false;
  }
}

function mouseInsideButtonHook() {
  let d2 = dist(mouseX, mouseY, buttonHook.x, buttonHook.y);
  if (mouseX >= buttonHook.x - buttonHook.width/2 && mouseX <= buttonHook.x + buttonHook.width/2 && mouseY >= buttonHook.y - buttonHook.height/2 && mouseY <= buttonHook.y + buttonHook.height/2) { //check if mouse is inside the hook button
    return true;
  } 
  else {
    return false;
  }
}

function mouseClicked() {

if(mouseInsideButtonCast===true) {
  chooseFish();
  }
}

function chooseFish() { //the code will decide which fish will bite, each fish/object has a drop rate % out of 100

  let i = random(0,100)

  if (i <= 11) {
		circle(100, 100, 50);
    //perch
	}
	if (i <= 22 && i > 11) {
		square(100, 100, 50);
    //bass
	}
  if (i <= 32 && i > 22) {
    circle(150, 150, 75);
    //frog
  }
  if (i <= 42 && i > 32){
    square(250, 250, 25);
    //loach
  }
  if(i <= 52 && i > 42){
    circle(250, 100, 75);
    //carp
  }
  if(i <= 61.5 && i > 52){
    square(200, 200, 25);
    //catfish
  }
  if(i <= 69.5 && i > 61.5){
    circle(500, 500, 50);
    //empty soda can
  }
  if(i <= 76.5 && i > 69.5){
    square(550, 550, 50);
    //soggy sock
  }
  if(i <= 82.5 && i > 76.5){
    circle(300, 300, 75);
    //salmon
  }
  if(i <= 88.5 && i > 82.5){
    square (300, 300, 100);
    //broken glasses
  }
  if(i <= 93.5 && i > 88.5){
    circle(700, 700, 100);
    //koi
  }
  if(i <= 97.5 && i > 93.5){
    square(750, 750, 50);
    //sturgeon
  }
  if(i <= 98.5 && i > 97.5){
    circle(750, 750, 50);
    //crystal
  }
  if(i <= 99.5 && i > 98.5){
    square(800, 800, 100);
    //treasure chest
  }
  if(i <= 100 && i > 99.5){
    square(1000, 1000, 50);
    //mutant carp
  }
}

function perch() {

}

function hookFish() {

}