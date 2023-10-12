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
  width: 225,
  height: 75,
  //text position
  textX: undefined,
  textY: undefined,
  offsetX: 0,
  offsetY: 0,
  sizeChangeAmount: 5
};

//setting the variable for the button to hook the line
let buttonHook = {
  x: undefined,
  y: undefined,
  width: 225,
  height: 75,
  //text position
  textX: undefined,
  textY: undefined,
  offsetX: 0,
  offsetY: 0,
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