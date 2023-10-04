/**
 * Title of Project
 * Author Name
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
    background(127);

    textStyle(BOLD);
    textSize(200);
    textAlign(CENTER, CENTER);
    fill(100, 40, 200);
    stroke(50, 200, 200);
    strokeWeight(3);
    text(`Hello, world!`, 250, 250);
}