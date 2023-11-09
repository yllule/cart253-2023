/**
 * Grow a Pet!
 * Catherine Zaloshnja
 * Project 2
 * 
 */

"use strict";

//variables for the toy in its entirety, without the buttons or the main screen
//in the final, this will be replaced by an image
let toy = {
    x: 0,
    y: 0,
    w: 300, //width
    h: 350 //height
};

//variables for the screen of the toy
let screen = {
    x: 0,
    y: 0,
    w: 200, //width
    h: 150 //height
};

//variables for the buttons on the toy. in the final, i may make a class for these buttons instead
let buttonLeft = {
    x: 0,
    y: 0,
    size: 50
};

let buttonCenter = {
    x: 0,
    y: 0,
    size: 50
}

let buttonRight = {
    x: 0,
    y: 0,
    size: 50
}

//in the final, images will be associated to all of these elements that are going to be in the array
// feed
// drink
// wash
// play
// medecine
// talk
// info
// off
let options = [];
//number of options in the array
let numOptions = 8;

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    //setting up the position of the toy on the screen
    toy.x = width/2;
    toy.y = height/2;

    //setting up the position of the screen on the toy
    screen.x = toy.x;
    screen.y = toy.y-25; //not completely centered so there's space for the buttons

    //setting up the position of the buttons on the toy
    buttonLeft.x = toy.x - 75;
    buttonLeft.y = toy.y + 100;
    buttonCenter.x = toy.x;
    buttonCenter.y = toy.y + 125; //center button is a bit lower than the others
    buttonRight.x = toy.x + 75;
    buttonRight.y = toy.y + 100;
}


/**
 * Description of draw()
*/
function draw() {
    //note to self: the background color will be white/blank in the final
    background(255, 200, 200);
    //all the elements will be drawn with no stroke, so i'm including it outside push/pop
    noStroke();

    //display of the toy
    push();
    fill(255, 100, 100);
    ellipse(toy.x, toy.y, toy.w, toy.h);
    pop();

    //display of the game screen
    push();
    rectMode(CENTER);
    rect(screen.x, screen.y, screen.w, screen.h, 20, 20, 20, 20); //values for the roundness of the corners
    pop();

    //display of the buttons
    leftButtonDisplay();
    centerButtonDisplay();
    rightButtonDisplay();
}

function leftButtonDisplay() {
    push();
    fill(200, 50, 100);
    ellipse(buttonLeft.x, buttonLeft.y, buttonLeft.size);
    pop();
}

function centerButtonDisplay() {
    push();
    fill(200, 50, 100);
    ellipse(buttonCenter.x, buttonCenter.y, buttonCenter.size);
    pop();
}

function rightButtonDisplay() {
    push();
    fill(200, 50, 100);
    ellipse(buttonRight.x, buttonRight.y, buttonRight.size);
    pop();
}

function mouseInsideLeftButton() {
    //checks if the mouse is inside the left button
    if (mouseX >= buttonLeft.x - buttonLeft.size/2 && mouseX <= buttonLeft.x + buttonLeft.size/2 && mouseY >= buttonLeft.y - buttonLeft.size/2 && mouseY <= buttonLeft.y + buttonLeft.size/2) {
        return true;
    }
}

//doing the same thing for the other buttons
function mouseInsideCenterButton() {
    if(mouseX >= buttonCenter.x - buttonCenter.size/2 && mouseX <= buttonCenter.x + buttonCenter.size/2 && mouseY >= buttonCenter.y - buttonCenter.size/2 && mouseY <= buttonCenter.y + buttonCenter.size/2) {
        return true;
    }
}

function mouseInsideRightButton() {
    if(mouseX >= buttonRight.x - buttonRight.size/2 && mouseX <= buttonRight.x + buttonRight.size/2 && mouseY >= buttonRight.y - buttonRight.size/2 && mouseY <= buttonRight.y + buttonRight.size/2) {
        return true;
    }
}

function mousePressed() {
    if(mouseInsideLeftButton()){
        //move to select left options on screen
        buttonLeft.size = 45; //button feedback (gets smaller)
        ellipse(100, 100, 100); //these shapes show up when the button is clicked, it is here just to make sure the button works, which weirdly enough it doesn't (it was working earlier??)
    }
    if(mouseInsideCenterButton()){
        //select button for on screen options
        buttonCenter.size = 45;
        rect(150, 150, 100);
    }
    if(mouseInsideRightButton()){
        //move to select right options on screen
        buttonRight.size = 45;
        ellipse(200, 200, 200);
    }
}

function mouseReleased() {
    buttonLeft.size = 50;
    buttonCenter.size = 50;
    buttonRight.size = 50;
}