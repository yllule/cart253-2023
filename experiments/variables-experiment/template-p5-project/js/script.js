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
    speed: 2,
    fill: 255
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

    //circle.speed = random(-5, 5);
    //circle.fill = random(0,255);

    circle.x = constrain(circle.x, 0, width);

    circle.size = map(mouseY, 0 ,height, 50, 500);

    circle.fill = map(mouseX, 0, width, 0, 255);
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);


}