/**
 * ENGL255 Final project
 * Catherine Zaloshnja
 * 
 * If anyone from CART is reading this, I'm just lazy and using my CART253 repo for my ENGL final project which is an interactive scrolling illustration.
 */

"use strict";

let state = 'title'; //can be : title, simulation

//img position
let imgPos = {
    yStart : -250,
    yEnd: 1000,
    speed: 5
}

//img asset variable
let illuImg;

/**
 * Description of preload
*/
function preload() {

    illuImg = loadImage("assets/images/eng_illu.png");

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(1000, 750);
}


/**
 * Description of draw()
*/
function draw() {
    background(32, 51, 103);

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
}

function title() {
    //title screen
    push();
    textSize(30);
    fill(173, 184, 214);
    textAlign(CENTER, CENTER);
    textFont('Georgia');
    text(`ENGL255 Final Project (illustration is still a work in progress)`, width/2, height/2);
    textSize(35);
    text(`Use up and down arrow keys to scroll through the image.`, width/2, height/2+75);
    textSize(25);
    text(`I hope you enjoy! :)`, width/2, height/2+125);
    pop();
}

function mousePressed() {
    //press the mouse to start the game
    if (state === `title`) {
        state = `simulation`;
    }
}

function simulation() {

    //constrain the scroll so that it stops when you reach the end/beginning of the illu
    imgPos.yStart = constrain(imgPos.yStart, -250, 1000);

    //start position
    imageMode(CENTER);
    image(illuImg, width/2, imgPos.yStart);

    // scrolling movement
    if (keyIsDown(UP_ARROW)) {
        imgPos.yStart = imgPos.yStart + imgPos.speed;
      }
      else if (keyIsDown(DOWN_ARROW)) {
        imgPos.yStart = imgPos.yStart - imgPos.speed;
      }

}