/**
 * Make some noise exercise
 * Catherine Zaloshnja
 * 
 * I experimented with sound for this exercise to see if i would want to
 * use the sound library for my project, in the end i'll primarily use sounds and music found online.
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

let oscillator;
let music;

/**
 * Description of preload
*/
function preload() {
    gootsImg = loadImage("assets/images/goots.png");
    music = loadSound('assets/sounds/bg_music.mp3');

}


/**
 * Description of setup
*/
function setup() {
createCanvas(600,600);
userStartAudio();

//setting up the positions of the button and the pet
button.x = width/2;
button.y = height/2+200;

pet.x = width/2;
pet.y = height/2;

oscillator = new p5.Oscillator(50, 'triangle');

}


/**
 * Description of draw()
*/
function draw() {
    background(255, 200, 200);

    if (!music.isPlaying()) {
        music.setVolume(0.05);
        music.loop();
    }

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
        music.stop();
        //making the results of making the oscillator start here are not what i expected and wanted,
        //but the results are interesting and give a creepy vibe so i'm keeping this commented here
        //in case i want to use it for the project
        //oscillator.start();
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
    text("You've raised a", width/2, 40);
    pop();
    push();
    noStroke();
    textSize(15);
    textAlign(CENTER);
    text("He is rapidly approaching your location (be very afraid)", width/2, height-10);
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
        oscillator.start();
    }
}

function buttonClickSFX() {
    //audio for button click
    synth.play(clickSFX, 0.2, 0, 0.1);
}

function petEvolveSFX() {
    synth.play(evolveSFX, 0.2, 0, 0.1);
}

//i'm adding these links to audios i may use in my final project
//they are here mostly just as a note to myself

//evolve sound
//https://freesound.org/people/Mrthenoronha/sounds/518306/

//error sound?
//https://freesound.org/people/SamsterBirdies/sounds/363920/

//death sound (when player avatar gets eaten)
//https://freesound.org/people/Prof.Mudkip/sounds/386862/

//main music (first one is used in this exercise)
//https://freesound.org/people/Electrobuz/sounds/137227/
//https://freesound.org/people/josefpres/sounds/653793/

//horror ambiance
//https://freesound.org/people/NovaSoundTechnology/sounds/653064/
//this one may be a bit TOO much of a banger to use
//https://freesound.org/people/M-Murray/sounds/634646/

//creepy sfx
//https://freesound.org/people/waveplaySFX/sounds/529139/

//beeps (in game select sfx?)
//https://freesound.org/people/Breviceps/sounds/450617/