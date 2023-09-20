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

let circle = {
    x: 0,
    y: 250,
    size: 100,
    speed: 2
};

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
    circle.x = circle.x + circle.speed;
    ellipse(circle.x, circle.y, circle.size);

}