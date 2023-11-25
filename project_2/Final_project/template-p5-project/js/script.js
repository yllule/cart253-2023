/**
 * Grow a Pet!
 * Catherine Zaloshnja
 * Project 2
 * 
 */

"use strict";

//variables for the image assets
let toyImg;
let screenImg;
let feedImg;
let drinkImg;
let washImg;
let playImg;
let medecineImg;
let talkImg;
let infoImg;
let offImg;

//variables for the toy in its entirety, without the buttons or the main screen
let toy = {
    x: 0,
    y: 0
};

//variables for the buttons on the toy
let buttonLeft = {
    x: 0,
    y: 0,
    size: 55
};

let buttonCenter = {
    x: 0,
    y: 0,
    size: 55
}

let buttonRight = {
    x: 0,
    y: 0,
    size: 55
}

//the options of actions the player could take
let options = [
    "feed",
    "drink",
    "wash",
    "play",
    "medecine",
    "talk",
    "info",
    "off"
];
//the action option that is currently targetted
let currentIndex = 0;

// let clickSFX = 'G2'; //clicking on button SFX
// let synth = new p5.PolySynth();

/**
 * Description of preload
*/
function preload() {
    
    toyImg = loadImage("assets/images/toy.png");
    screenImg = loadImage("assets/images/toy_screen.png");

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

    //setting up the position of the buttons on the toy, i have centered it to the button "hole" from the toy asset img
    buttonLeft.x = toy.x - 94;
    buttonLeft.y = toy.y + 184;
    buttonCenter.x = toy.x;
    buttonCenter.y = toy.y + 227;
    buttonRight.x = toy.x + 96;
    buttonRight.y = toy.y + 184;
}


/**
 * Description of draw()
*/
function draw() {
    background(255);
    //all the elements will be drawn with no stroke, so i'm including it outside push/pop
    noStroke();

    //display of the toy
    push();
    imageMode(CENTER);
    image(toyImg, toy.x, toy.y);
    pop();

    //display of the game screen
    push();
    imageMode(CENTER);
    image(screenImg, toy.x, toy.y);
    pop();

    //display of the buttons
    leftButtonDisplay();
    centerButtonDisplay();
    rightButtonDisplay();

    //display of the options (temporary)
    push();
    fill(0);
    ellipse(toy.x-65, toy.y-75, 25);
    ellipse(toy.x-25, toy.y-75, 25);
    ellipse(toy.x+15, toy.y-75, 25);
    ellipse(toy.x+55, toy.y-75, 25);
    ellipse(toy.x-65, toy.y+25, 25);
    ellipse(toy.x-25, toy.y+25, 25);
    ellipse(toy.x+15, toy.y+25, 25);
    ellipse(toy.x+55, toy.y+25, 25);
    pop();

    text(options[currentIndex], width/2, height/2);
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
        buttonLeft.size = 50; //button feedback (gets smaller)
        // buttonClickSFX();
        //clicking on the button will make you switch to the next option in the array
        currentIndex = currentIndex+1;
        if(currentIndex === options.length) {
        currentIndex = 0;
        }
    }
    if(mouseInsideCenterButton()){
        //select button for on screen options
        buttonCenter.size = 50;
        // buttonClickSFX();

        //if currentIndex = 0 -> feed() (make feed function)
        //if currentIndex = 1 -> water() (make water function)
        //etc...
    }
    if(mouseInsideRightButton()){
        //move to select right options on screen
        buttonRight.size = 50;
        // buttonClickSFX();
        currentIndex = currentIndex-1;
        if(currentIndex < 0) {
        currentIndex = 7;
        }
    }
}

// function buttonClickSFX() {
//     //audio for button click
//     synth.play(clickSFX, 0.2, 0, 0.1);
// }


function mouseReleased() {
    buttonLeft.size = 55;
    buttonCenter.size = 55;
    buttonRight.size = 55;
}

//my next steps are gonna be something like :
//1- make an array of the options on the screen (feeding,cleaning,etc)
//2- make clicking the buttons functional with the screen options (clicking left button will move to the left option on screen)
//the assets for the options are always visible, i'll place them on the screen
//when an option is "shown" in the array, it will flash, then when its selected it will start a function related to that part of the array
//3- make sketches of the assets i need and add them to the project

//4- add what actions happen when screen options are selected (ex: feeding makes food appear + pet eats it)
//5- make pet evolve as you take care of it
//6- polish and add the narrative + tutorial state and ending state

//i'll need to plan more as in, what actions does the player need to take to make the pet evolve to the next stage?
//and a list + sketches of all the pet evolution stages

//another note to self (for the narrative)
//once it becomes clear to the player that the pet you're raising is a monster, would be nice if its like a jumpscare reveal with scary sound. maybe up until that point the game is silent or has calming music that gets interrupted
//also once the player reaches the "final" stages of the pet's evolution, maybe the toy gets cracked
//eventually (once the pet reaches final evolution) you can't choose any more options other than the off button since the screen is so cracked
//once that's done, monster comes out of toy and end:)

//i'm not sure if all this is too ambitious, if it is i may just make this a normal cute tamagotchi simulator and skip the horror narrative haha