/**
 * Sound experiments
 * Catherine Zaloshnja
 * 
 */

"use strict";

let mic;
let ghost = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    image: undefined
};

/**
 * Description of preload
*/
function preload() {
    ghost.image = loadImage('assets/images/clown.png');


}


/**
 * Description of setup
*/
function setup() {
    createCanvas(600,600);
    userStartAudio();

    ghost.x = width/2;
    ghost.y = height/2;

    mic = new p5.AudioIn();
    mic.start();


}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    let level = mic.getLevel();

    if (level > 0.1) {
        ghost.vx = 20;
    }

    ghost.x = ghost.x + ghost.vx;
    ghost.y = ghost.y + ghost.vy;

    ghost.x = ghost.x + random(-1, 1);
    ghost.y = ghost.y + random(-1, 1);

    push();
    imageMode(CENTER);
    tint(255, 50);
    image(ghost.image, ghost.x, ghost.y);
    pop();

}

