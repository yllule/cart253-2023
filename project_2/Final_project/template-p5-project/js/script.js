/**
 * Grow a Pet!
 * Catherine Zaloshnja
 * Project 2
 * 
 */

"use strict";

//variable to store the current active state. there will be different states for different parts of the narrative
//states include : intro?, sprout, flower, carnivore, death, monster, crash, crack, end
let currentState;

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
let grainImg;

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
let petImg;
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

/**
 * Description of preload
*/
function preload() {
    
    grainImg = loadImage("assets/images/grain.png");
    toyImg = loadImage("assets/images/toy.png");
    screenImg = loadImage("assets/images/toy_screen.png");
    feedImg = loadImage("assets/images/n_feed.png");
    drinkImg = loadImage("assets/images/n_water.png");
    washImg = loadImage("assets/images/n_wash.png");
    playImg = loadImage("assets/images/n_play.png");
    medecineImg = loadImage("assets/images/n_medecine.png");
    talkImg = loadImage("assets/images/n_talk.png");
    infoImg = loadImage("assets/images/n_info.png");
    offImg = loadImage("assets/images/n_off.png");
    playerImg = loadImage("assets/images/player1a.png"); //make array with all imgs
    petImg = loadImage("assets/images/pet_sprout1.png");


}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    currentState = new Title();
    textSize(32);
    textAlign(CENTER, CENTER);

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

    currentState.draw();

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

    //display of the options on the screen
    displayFeed();
    displayDrink();
    displayWash();
    displayPlay();
    displayMedecine();
    displayTalk();
    displayInfo();
    displayOff();

    //display of the buttons
    leftButtonDisplay();
    centerButtonDisplay();
    rightButtonDisplay();

    //display player
    push();
    image(playerImg, player.x, player.y);
    pop();

    //display pet
    push();
    image(petImg, pet.x, pet.y);
    pop();

    //display of the grain texture over everything
    push();
    imageMode(CENTER);
    blendMode(OVERLAY);
    image(grainImg, toy.x, toy.y);
    pop();
}

//display of the options, the position values are funky here cause i'm trying to perfectly place the elements where needed
function displayFeed() {
    //when this option is targetted, it changes blending mode to indicate that that one is currently targetted
    if (currentIndex === 0) {
        push();
        blendMode(HARD_LIGHT);
        image(feedImg, toy.x-129, toy.y-117);
        pop();
    }
    //otherwise the option looks normal
    else {
        push();
        image(feedImg, toy.x-129, toy.y-117);
        pop();
    }
}

//same thing as display feed but for the other options
function displayDrink() {
    if (currentIndex === 1) {
        push();
        blendMode(HARD_LIGHT);
        image(drinkImg, toy.x-57, toy.y-118);
        pop();
    }
    else {
        push();
        image(drinkImg, toy.x-57, toy.y-118);
        pop();
    }
}

function displayWash() {
    if (currentIndex === 2) {
        push();
        blendMode(HARD_LIGHT);
        image(washImg, toy.x+5, toy.y-113);
        pop();
    }
    else {
        push();
        image(washImg, toy.x+5, toy.y-113);
        pop();
    }
}

function displayPlay() {
    if (currentIndex === 3) {
        push();
        blendMode(HARD_LIGHT);
        image(playImg, toy.x+85, toy.y-117);
        pop();
    }
    else {
        push();
        image(playImg, toy.x+85, toy.y-117);
        pop();
    }
}

function displayMedecine() {
    if (currentIndex === 4) {
        push();
        blendMode(HARD_LIGHT);
        image(medecineImg, toy.x-133, toy.y+46);
        pop();
    }
    else {
        push();
        image(medecineImg, toy.x-133, toy.y+46);
        pop();
    }
}

function displayTalk() {
    if (currentIndex === 5) {
        push();
        blendMode(HARD_LIGHT);
        image(talkImg, toy.x-60, toy.y+43);
        pop();
    }
    else {
        push();
        image(talkImg, toy.x-60, toy.y+43);
        pop();
    }
}

function displayInfo() {
    if (currentIndex === 6) {
        push();
        blendMode(HARD_LIGHT);
        image(infoImg, toy.x+15, toy.y+44);
        pop();
    }
    else {
        push();
        image(infoImg, toy.x+15, toy.y+44);
        pop();
    }
}

function displayOff() {
    if (currentIndex === 7) {
        push();
        blendMode(HARD_LIGHT);
        image(offImg, toy.x+85, toy.y+46);
        pop();
    }
    else {
        push();
        image(offImg, toy.x+85, toy.y+46);
        pop();
    }
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
        //clicking on the button will make you switch to the next option in the array
        currentIndex = currentIndex-1;
        if(currentIndex < 0) {
            currentIndex = 7;
        }
    }

    if(mouseInsideCenterButton()) {
        //select button for on screen options
        buttonCenter.size = 50;
        actionFeed();
        //     if (currentIndex === 0) {
        //         actionFeed();
        //     }
        //     else if (currentIndex === 1) {
        //         actionDrink();
        // }
    }

    if(mouseInsideRightButton()) {
        //move to select right options on screen
        buttonRight.size = 50;
        currentIndex = currentIndex+1;
        if(currentIndex === options.length) {
        currentIndex = 0;
        }
    }
    currentState.mousePressed();
}

function actionFeed() {

    console.log('poop');
    image(playerImg,200,200);

}

function mouseReleased() {
    buttonLeft.size = 55;
    buttonCenter.size = 55;
    buttonRight.size = 55;
}

// function actionDrink() {

//     text(`drink uwu`, width/2, height/2);

// }

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