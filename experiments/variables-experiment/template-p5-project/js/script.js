/**
 * Variables experiment
 * Catherine Zaloshnja
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);

}


/**
 * Description of draw()
*/
function draw() {
    background(mouseY, mouseX, 0);
    rectMode(CENTER);
    rect(250, 250, mouseX, mouseY);

}