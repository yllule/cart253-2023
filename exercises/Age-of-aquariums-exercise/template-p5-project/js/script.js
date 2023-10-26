/**
 * Age of Aquariums exercise
 * Catherine Zaloshnja
 * 
 */

"use strict";

let forestFire = [];
let forestFireSize = 15;

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
        speed: 2
    };
    return fire;
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    for (let i = 0; i < forestFire.length; i++) {
        moveFire(forestFire[i]);
        displayFire(forestFire[i]);
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

    hose.x = mouseX;
    hose.y = mouseY;

    //display of the hose nozzle
    push();
    noStroke();
    ellipse(hose.x, hose.y, hose.size);
    pop();

    let newTrailPosition = {
        x: hose.x,
        y: hose.y
    };

    hose.trail.push(newTrailPosition);

    if (hose.trail.length > hose.maxTrail) {
        hose.trail.shift();
    }
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

    push();
    fill(255, 100, 100);
    noStroke();
    ellipse(fire.x, fire.y, fire.size);
    pop();
}

function mouseDragged() {
    // let fire = createFire(mouseX, mouseY);
    // forestFire.push(fire);

}