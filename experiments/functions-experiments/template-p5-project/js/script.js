/**
 * Title of Project
 * Author Name
 */

"use strict";

let bg = 0;

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
    background(bg);

    if (keyIsDown(65)) {
        rectMode(CENTER);
        rect(250, 250, 100);
    }
}
