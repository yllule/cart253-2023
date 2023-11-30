/**
 * Grow a Pet!
 * Catherine Zaloshnja
 * Project 2
 * 
 */

"use strict";

//variable to store the current active state. there will be different states for different parts of the narrative
//states include : title, intro?, sprout, flower, carnivore, death, monster, crash, crack, end
let currentState;

//variables for the image assets
let toyImg;
let screenImg;
let screenOffImg;
let feedImg;
let drinkImg;
let washImg;
let playImg;
let medecineImg;
let talkImg;
let infoImg;
let offImg;
let grainImg;
let grimeImg;
let noteImg;

let flowerImg;
let player2Img;
let carnivoreImg;
let playerFeedImg;
let playerWaterImg;

//variable for the font used (google font)
let font;

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
};

let buttonRight = {
    x: 0,
    y: 0,
    size: 55
};

//variables for the pet sprite
let sproutImg;
let pet = {
    x: 0,
    y: 0
}

//variables for the player sprite
let playerImg;
let player = {
    x: 0,
    y: 0
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

let clickSFX = 'C2'; //clicking on button sfx
let evolveSFX = 'E6'; //sound when pet evolves
let synth = new p5.PolySynth();

//variable for the background music
let bgm;

/**
 * Description of preload
*/
function preload() {
    
    //toy assets
    noteImg = loadImage('assets/images/intro_note.png');
    toyImg = loadImage("assets/images/toy.png");
    screenImg = loadImage("assets/images/toy_screen.png");
    screenOffImg = loadImage("assets/images/toy_screen_off.png");

    //option assets
    feedImg = loadImage("assets/images/n_feed.png");
    drinkImg = loadImage("assets/images/n_water.png");
    washImg = loadImage("assets/images/n_wash.png");
    playImg = loadImage("assets/images/n_play.png");
    medecineImg = loadImage("assets/images/n_medecine.png");
    talkImg = loadImage("assets/images/n_talk.png");
    infoImg = loadImage("assets/images/n_info.png");
    offImg = loadImage("assets/images/n_off.png");

    //texture assets
    grainImg = loadImage("assets/images/grain.png");
    grimeImg = loadImage('assets/images/grime.png');

    //player + pet assets
    playerImg = loadImage("assets/images/player1.gif");
    playerFeedImg = loadImage('assets/images/player_feed.png');
    playerWaterImg = loadImage('assets/images/player_water.png');
    sproutImg = loadImage("assets/images/pet_sprout.gif");
    player2Img = loadImage('assets/images/player2.gif');
    flowerImg = loadImage('assets/images/pet_flower.gif');
    carnivoreImg = loadImage('assets/images/pet_carnivore.gif');

    //font
    font = loadFont('assets/images/PixelifySans-Regular.ttf');

    //background music
    bgm = loadSound('assets/sounds/bgm.mp3');

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    currentState = new Title();
    textAlign(CENTER, CENTER);
    textFont(font);

    //setting up the position of the toy on the screen
    toy.x = width/2;
    toy.y = height/2;

    //setting up the position of the buttons on the toy, i have centered it to the button "hole" from the toy asset img
    buttonLeft.x = toy.x - 94;
    buttonLeft.y = toy.y + 184;
    buttonCenter.x = toy.x;
    buttonCenter.y = toy.y + 227;
    buttonRight.x = toy.x + 96;
    buttonRight.y = toy.y + 184;

    //setting up the position of the player and pet
    player.x = width/2-70;
    player.y = height/2-55;

    pet.x = width/2;
    pet.y = height/2-10;
}


/**
 * Description of draw()
*/
function draw() {
    background(255);

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

    //display the grime over the toy
    push();
    imageMode(CENTER);
    blendMode(DARKEST);
    image(grimeImg, toy.x, toy.y);
    pop();

    currentState.draw();

    //display of the grain texture over everything
    push();
    imageMode(CENTER);
    blendMode(OVERLAY);
    image(grainImg, toy.x, toy.y);
    pop();
}

//display of the buttons
function leftButtonDisplay() {
    push();
    noStroke();
    fill(200, 50, 100);
    ellipse(buttonLeft.x, buttonLeft.y, buttonLeft.size);
    pop();
}

function centerButtonDisplay() {
    push();
    noStroke();
    fill(200, 50, 100);
    ellipse(buttonCenter.x, buttonCenter.y, buttonCenter.size);
    pop();
}

function rightButtonDisplay() {
    push();
    noStroke();
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
    if(mouseInsideLeftButton()) {
        //move to select left options on screen
        buttonLeft.size = 50; //button feedback (gets smaller)
        synth.play(clickSFX, 0.2, 0, 0.1); //button click audio
        //clicking on the button will make you switch to the next option in the array
        currentIndex = currentIndex-1;
        if(currentIndex < 0) {
            currentIndex = 7;
        }
    }

    if(mouseInsideCenterButton()) {
        //select button for on screen options
        synth.play(clickSFX, 0.2, 0, 0.1); //button click audio
        buttonCenter.size = 50;
    }

    if(mouseInsideRightButton()) {
        //move to select right options on screen
        buttonRight.size = 50;
        synth.play(clickSFX, 0.2, 0, 0.1); //button click audio
        currentIndex = currentIndex+1;
        if(currentIndex === options.length) {
        currentIndex = 0;
        }
    }
    currentState.mousePressed();
}

function mouseReleased() {
    buttonLeft.size = 55;
    buttonCenter.size = 55;
    buttonRight.size = 55;
}


//another note to self (for the narrative)
//once it becomes clear to the player that the pet you're raising is a monster, would be nice if its like a jumpscare reveal with scary sound. maybe up until that point the game is silent or has calming music that gets interrupted
//also once the player reaches the "final" stages of the pet's evolution, maybe the toy gets cracked
//eventually (once the pet reaches final evolution) you can't choose any more options other than the off button since the screen is so cracked
//once that's done, monster comes out of toy and end:)