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
  mouseInsideButtonCast();
  mouseInsideButtonHook();

}



function drawButtonCast() {

  //adding feedback to the button when it gets clicked
  if (mouseIsPressed === true && mouseInsideButtonCast()) {
    //display of cast button when clicked
    push();
    noStroke();
    rectMode(CENTER);
    rect(buttonCast.x, buttonCast.y, buttonCast.widthChangeAmount, buttonCast.heightChangeAmount, 25);
    pop();
    //you cast the line and the code will check which fish will bite
    chooseFish();
  } else {
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



function chooseFish() { //the code will decide which fish will bite, each fish/object has a drop rate % out of 100

  if (random(0,100) <= 11) {
    fill(255);
		circle(100,100, 50);
	}
	else {
    fill(255);
		square(100,100, 50);
	}
}

function hookFish() {

}