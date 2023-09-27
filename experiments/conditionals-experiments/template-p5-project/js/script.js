/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let circle = {
    x: 250,
    y: 250,
    size : 100
};

let bg = {
    r: 0,
    g: 0,
    b: 0
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
    createCanvas(500,500);

}

/**
 * Description of draw()
*/


function draw() {
    background(bg.r, bg.g, bg.b);

    ellipse(circle.x, circle.y, circle.size);
    
}

function mouseWheel() {
    circle.x = mouseX;
    circle.y = mouseY;

    bg.r = random(0,255);
    bg.g = random(0,255);
    bg.b = random(0,255);
}