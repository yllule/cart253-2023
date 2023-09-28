/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let clown = {
    x: 250,
    y: 250,
    size: 100,
    image: undefined
};

/**
 * Description of preload
*/
function preload() {
    clown.image = loadImage("assets/images/clown.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);

}

/**
 * Description of draw()
*/


function draw() {
    background(0);

    clown.x = mouseX;
    clown.y = mouseY;
    imageMode(CENTER);
    image(clown.image, clown.x, clown.y, clown.size, clown.size);
}

function mousePressed() {
    clown.size = clown.size + 50;
}