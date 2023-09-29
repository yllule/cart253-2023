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
    background(0);

    parallels(100, 100, 50);
    parallels(50, 50, 100);
    parallels(300, 400, 5);
    parallels(250, 250, 15);
    parallels(275, 275, 20);
}

function parallels(x, y, numLines) {
    for (let i = 0; i < numLines; i++) {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x, y, 2, 150);
        x = x + 10;
    }
}