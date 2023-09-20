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
    createCanvas(windowWidth, windowHeight);

}


/**
 * Description of draw()
*/
function draw() {
    background(250, 0, 100);
    rectMode(CENTER);
    rect(width / 2, height / 2, mouseX, mouseY);

}