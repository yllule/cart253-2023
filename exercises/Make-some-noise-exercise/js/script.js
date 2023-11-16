/**
 * Make some noise exercise
 * Catherine Zaloshnja
 * 
 */

"use strict";

let gootsImg;

let button = {
    x: 0,
    y: 0,
    w: 150,
    h: 50
}

let pet = {
    x: 0,
    y: 0,
    size: 50, // start size of pet
    evolve: 100, //size the pet needs to reach to evolve
    evolve2: 200 //size the pet needs to reach to evolve again
}

let clickSFX = 'G2'; //clicking on button sfx
let evolveSFX = 'F5'; //sound when pet evolves
let synth = new p5.PolySynth();

/**
 * Description of preload
*/
function preload() {
    gootsImg = loadImage("assets/images/goots.png");

}


/**
 * Description of setup
*/
function setup() {
createCanvas(600,600);

//setting up the positions of the button and the pet
button.x = width/2;
button.y = height/2+200;

pet.x = width/2;
pet.y = height/2;

}


/**
 * Description of draw()
*/
function draw() {
    background(255, 200, 200);

    if (pet.size <= pet.evolve) {
        displayBabyPet();
        displayButton();
    }
    else if (pet.size <= pet.evolve2) {
        displayEvolvedPet();
        displayButton();
    }
    else {
        displayFinalEvolution();
    }

}

function displayButton() {
    //display the button
    push();
    noStroke();
    rectMode(CENTER);
    rect(button.x, button.y, button.w, button.h, 15, 15, 15, 15);
    textAlign(CENTER);
    textSize(25);
    fill(255, 100, 100);
    text('Feed pet', width/2, height/2+210);
    pop();
}

function displayBabyPet() {
    //baby pet display
    //display the body
    push();
    noStroke();
    ellipse(pet.x, pet.y, pet.size);
    //making a simple face
    fill(0);
    ellipse(pet.x-10, pet.y, 5);
    ellipse(pet.x+10, pet.y, 5);
    fill(0);
    ellipse(pet.x, pet.y+9, 10);
    fill(255);
    ellipse(pet.x, pet.y+7, 10);
    pop();

}

function displayEvolvedPet() {
    //display of the pet once it has evolved
    push();
    noStroke();
    ellipse(pet.x, pet.y, pet.size);
    //making a simple face
    fill(0);
    ellipse(pet.x-10, pet.y, 10);
    ellipse(pet.x+10, pet.y, 10);
    fill(0);
    ellipse(pet.x, pet.y+15, 15);
    fill(255);
    rectMode(CENTER);
    rect(pet.x, pet.y+10, 30, 13);
    pop();
}

function displayFinalEvolution() {
    //display goots
    push();
    imageMode(CENTER);
    image(gootsImg, pet.x, pet.y+20);
    pop();
    //display text
    push();
    fill(255)
    textSize(30);
    textAlign(CENTER);
    stroke(0)
    strokeWeight(5);
    text("Congratulations, you've raised a", width/2, 40);
    pop();

}

function mouseInsideButton() {
    if(mouseX >= button.x - button.w/2 && mouseX <= button.x + button.w/2 && mouseY >= button.y - button.h/2 && mouseY <= button.y + button.h/2) {
        return true;
    }
}

function mousePressed() {
    if(mouseInsideButton()) {
        pet.size = pet.size + 10;
        buttonClickSFX();
    }
    if(mouseInsideButton() && pet.size === 110) {
        petEvolveSFX();
    }
    if(mouseInsideButton() && pet.size === 210) {
        petEvolveSFX();
    }
}

function buttonClickSFX() {
    //audio for button click
    synth.play(clickSFX, 0.2, 0, 0.1);
}

function petEvolveSFX() {
    synth.play(evolveSFX, 0.2, 0, 0.1);
}