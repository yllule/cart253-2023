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
  sizeChangeAmount: 5
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
  sizeChangeAmount: 5
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
  buttonCast.x = width/4;
  buttonCast.y = height-100;
  buttonCast.textX = buttonCast.x;
  buttonCast.textY = buttonCast.y+12;

  //setting up the position of the second button so that i will always show next to the first one
  buttonHook.x = buttonCast.x + 300;
  buttonHook.y = buttonCast.y;
  buttonHook.textX = buttonHook.x;
  buttonHook.textY = buttonHook.y+12;

}


/**
 * Description of draw()
*/
function draw() {
  background(0);
  drawButtonCast();
  drawButtonHook();

  //if(mouseX >= buttonCast.x - buttonCast.width/2 && mouseX <= buttonCast.x + buttonCast.width/2 && mouseY >= buttonCast.y - buttonCast.height/2 && mouseY <= buttonCast.y + buttonCast.height/2 && mouseClicked == true) { //check if mouse is inside the cast button + if mouse is pressed
  //  buttonCast.isBeingPressed = true;
  //  buttonCast.width = buttonCast.width -= buttonCast.sizeChangeAmount;
  //  buttonCast.height = buttonCast.height -= buttonCast.sizeChangeAmount;
  //  chooseFish();
  //}
  //else {
  //  buttonCast.isBeingPressed = false;
    //buttonCast.width = 250;
    //buttonCast.height = 75;
  //}

  //if(mouseX >= buttonHook.x - buttonHook.width/2 && mouseX <= buttonHook.x + buttonHook.width/2 && mouseY >= buttonHook.y - buttonHook.height/2 && mouseY <= buttonHook.y + buttonHook.height/2 && mouseClicked == true) { //check if mouse is inside the hook button + if mouse is pressed
  //  buttonHook.isBeingPressed = true;
  //  buttonHook.width = buttonHook.width -= buttonHook.sizeChangeAmount;
  //  buttonHook.height = buttonHook.height -= buttonHook.sizeChangeAmount;
  //  hookFish();
  //}

  //if(mouseX >= buttonCast.x - buttonCast.width/2 && mouseX <= buttonCast.x + buttonCast.width/2 && mouseY >= buttonCast.y - buttonCast.height/2 && mouseY <= buttonCast.y + buttonCast.height/2 && mouseReleased == true) {
  //  buttonCast.width = buttonCast.width += buttonCast.sizeChangeAmount;
  //  buttonCast.height = buttonCast.height += buttonCast.sizeChangeAmount;
  //}
}



function drawButtonCast() {
//display of cast button
  push();
  noStroke();
  rectMode(CENTER);
  rect(buttonCast.x, buttonCast.y, buttonCast.width, buttonCast.height, 25);
  pop();

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
//display of hook button
  push();
  noStroke();
  rectMode(CENTER);
  rect(buttonHook.x, buttonHook.y, buttonHook.width, buttonHook.height, 25);
  pop();

//hook button text
  push();
  noStroke();
  textSize(35);
  textAlign(CENTER);
  fill(0);
  text('Hook', buttonHook.textX, buttonHook.textY);
  pop();
}

function mouseInsideButtonCast() {
  //let d = dist(mouseX, mouseY, buttonCast.x, buttonCast.y);
  if (mouseX >= buttonCast.x - buttonCast.width/2 && mouseX <= buttonCast.x + buttonCast.width/2 && mouseY >= buttonCast.y - buttonCast.height/2 && mouseY <= buttonCast.y + buttonCast.height/2) { //check if mouse is inside the cast button
    return true;
  } 
  else {
    return false;
  }
}

function mousePressed() {
  // Only respond to the mouse click if the shape is active
  // and the mouse is in the shape
  if (mouseInsideButtonCast()) {
    buttonCast.isBeingPressed = true;
    // Remember the offset of the shape's centre relative to the mouse
    // Make the shape a bit smaller for feedback
    buttonCast.width -= buttonCast.sizeChangeAmount;
    buttonCast.height -= buttonCast.sizeChangeAmount;
    chooseFish();
  }
  else {
    buttonCast.isBeingPress = false;
    mouseReleased();
  }
}

function mouseReleased() {
  // If the shape is currently being dragged
  // and they've "dropped it" on the right side of the line
  if (mouseInsideButtonCast() && buttonCast.isBeingPressed == false) {
    buttonCast.width += buttonCast.sizeChangeAmount;
    buttonCast.height += buttonCast.sizeChangeAmount;
  }
}

function chooseFish() {

}

function hookFish() {

}