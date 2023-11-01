/**
 * Juggle Garden exercise
 * Catherine Zaloshnja
 * 
 * Reusing the concept from the previous exercise
 * 
 */

"use strict";

//let state = 'title' //can be 'title', 'simulation', 'badEnd', 'goodEnd'

//variables for the fires
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
createCanvas(800, 800);

//create 15 fires randomly on the screen
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
    noCursor();

    if (state === 'title') {
        title();
    }
    else if (state === 'simulation') {
        simulation();
    }
    else if (state === 'goodEnd') {
        goodEnd();
    }
    else if (state === 'badEnd') {
        badEnd();
    }
    
}

function title() {
    //title screen

    push();
    textSize(20);
    fill(255);
    textAlign(CENTER);
    text(`Try to put out all the flames before it's too late`, width/2, height/2);
    textSize(12);
    text(`I'm having a hard time with understanding arrays + not much time to work on this outside of class and so I wasn't able to complete what I wanted to do.`, width/2, height/2+20);
    text(`Please check the comments at the top of my code to understand what I was going for!`, width/2, height/2+40);
    pop();
}

function mousePressed() {
    //click to start the game
    if (state === 'title') {
        state = 'simulation';
    }
}

function simulation() {
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

function checkTouch(fire) {
    //check if the water is touching the fire
    if (!fire.wet) {
        let d = dist(hose.x, hose.y, fire.x, fire.y);
            if (d < hose.size/2 + fire.size/2) {
                print('Touch');
                fire.wet === true;
            }
        }
    }
