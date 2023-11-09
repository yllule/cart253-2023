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

//variables for the buttons on the toy. in the final, i make a class for these buttons instead
let buttonLeft = {
    x: 0,
    y: 0,
    size: 50,
    pressed : false
};

let buttonCenter = {
    x: 0,
    y: 0,
    size: 50,
    pressed : false
}

let buttonRight = {
    x: 0,
    y: 0,
    size: 50,
    pressed : false
}

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
    buttonCenter.y = toy.y + 125;
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
    //left button
    push();
    fill(200, 50, 100);
    ellipse(buttonLeft.x, buttonLeft.y, buttonLeft.size);
    pop();

    push();
    fill(200, 50, 100);
    ellipse(buttonCenter.x, buttonCenter.y, buttonCenter.size);
    pop();

    push();
    fill(200, 50, 100);
    ellipse(buttonRight.x, buttonRight.y, buttonRight.size);
    pop();

}