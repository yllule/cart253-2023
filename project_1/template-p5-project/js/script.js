/**
 * Fishing simulator
 * Catherine Zaloshnja
 * Originally I wanted the fishing game to be more complex and inspired by the fishing system in Final Fantasy XIV,
 * but finally I settled for something simpler, more similar to Stardew Valley/Animal Crossing like fishing since it was more simpler to make.
 */

"use strict";

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
  createCanvas(2000, 1000);

  //setting up the position of the inventory box
  inventoryBox.x = width-300;
  inventoryBox.y = height/2;

}


/**
 * Description of draw()
*/
function draw() {
  background(0);
  drawInventoryBox();

}


function drawInventoryBox(){
  push();
  noStroke();
  rectMode(CENTER);
  rect(inventoryBox.x, inventoryBox.y, inventoryBox.width, inventoryBox.height, 50);
  pop();
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