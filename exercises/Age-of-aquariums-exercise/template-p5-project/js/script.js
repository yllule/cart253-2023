/**
 * Age of Aquariums exercise
 * Catherine Zaloshnja
 * 
 * I'm having a hard time with understanding arrays and so I wasn't able to complete what I wanted to do.
 * Since I don't have much time outside of class time this week to finish this, I'm leaving the code as is and taking the L knowing that it's not functional or complete.
 * The idea here was to have the fires get extinguished when the user hoses them with water.
 * I wanted to have the fires multiply as time went on and if they don't get extinguished quickly enough.
 * If all fires don't get extinguished quickly enough, the forest will turn brown/black and the game will be over.
 * If all fires get extinguished you win the game.
 * 
 * print true distance to check if its working
 * then check if the loop (water trail) is getting checked
 * then add boolean (true, false)
 */

"use strict";

let forestFire = [];
let forestFireSize = 15;

//variable for the user and the trail of water the hose will create
let hose = {
    x: 0,
    y: 0,
    size: 50,
    trail: [],
    maxTrail: 10
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
createCanvas(600, 600);


for (let i = 0; i < forestFireSize; i++) {
    let fire = createFire(random(0, width), random(0, height));
    forestFire.push(fire);
}
}

function createFire(x, y) {
    let fire = {
        x: x,
        y: y,
        size: 50,
        vx: 0,
        vy: 0,
        speed: 2,
        wet : false
    };
    return fire;
}


/**
 * Description of draw()
*/
function draw() {
    background(50, 100, 50);

    for (let i = 0; i < forestFire.length; i++) {
        moveFire(forestFire[i]);
        displayFire(forestFire[i]);
        checkTouch(forestFire[i]);
    }

    for (let i = 0; i < hose.trail.length; i++) {
        let element = hose.trail[i];
        //display of the water coming out
        push();
        noStroke();
        fill(100, 100, 255);
        ellipse(element.x, element.y, hose.size);
        pop();
    }

    //the hose nozzle will follow the mouse position
    hose.x = mouseX;
    hose.y = mouseY;

    //display of the hose nozzle
    push();
    noStroke();
    ellipse(hose.x, hose.y, hose.size);
    pop();
    
}

function moveFire(fire) {

    let change = random(0,1);
    if (change < 1) {
        fire.vx = random(-fire.speed, fire.speed);
        fire.vy = random(-fire.speed, fire.speed);
    }

    fire.x = fire.x + fire.vx;
    fire.y = fire.y + fire.vy;

    fire.x = constrain(fire.x, 0, width);
    fire.y = constrain(fire.y, 0, height);
}

function displayFire(fire) {
    //if the fire is still lit (not wet), it will display
    if (!fire.wet) {
    push();
    fill(255, 100, 100);
    noStroke();
    ellipse(fire.x, fire.y, fire.size);
    pop();
    }
}

function checkTouch(fire) {
    //check if the water is touching the fire
        if (!fire.wet) {
        let d = dist(hose.x, hose.y, fire.x, fire.y);
            if (d < hose.size/2 + fire.size/2) {
                fire.wet === true;
            }
        }
    }

function mouseDragged() {

    // adding water when the mouse is dragged by adding a trail to the hose nozzle
    let newTrailPosition = {
        x: hose.x,
        y: hose.y
    };

    hose.trail.push(newTrailPosition);

    if (hose.trail.length > hose.maxTrail) {
        hose.trail.shift();
    }

}