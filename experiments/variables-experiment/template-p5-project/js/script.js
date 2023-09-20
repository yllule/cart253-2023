/**
 * Variables experiment
 * Catherine Zaloshnja
 */

"use strict";

let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 100;
let circleSpeed = 2;
let circleAcceleration = 0.25;

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
    background(backgroundShade);
    circleX += circleSpeed;
    circleSpeed += circleAcceleration;
    ellipse(circleX, circleY, circleSize);

}