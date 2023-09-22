/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let bgShade = 0;
let circle = {
    x: 0,
    y: 250,
    size: 100,
    speed: 1
}
let displayCircle = false;

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
//    if (mouseIsPressed === true) {
//        background(255);
//    }
//    else {
//        background(0);
//    }


    background(0);

    if (mouseIsPressed) {
        displayCircle = true;
    }
    if (displayCircle) {
        ellipse(250, 250, 100, 100);
    }

    //circle.x = circle.x + circle.speed;

    //if (circle.x > width) {
    //    circle.speed = -circle.speed;
    //}

    //if (circle.x < 0) {
    //    circle.speed = -circle.speed; //the same line as before because you're saying here that the negative speed from previous if will become the opposite, therefore positive
    //}

    //checking out else
    //if (mouseX < width/2) {
    //    fill(255, 0, 0);
    //}
    //else {
    //    fill(0,255, 0);
    //}

    //else if, to create multiple plans. you can add multiple else ifs
    //if (mouseX < width/3) {
    //    fill(255, 0, 0);
    //}
    //else if (mouseX < 2 * width/3) {
    //    fill(0, 255, 0);
    //}
    //else {
    //    fill(0, 0, 255);

    //nested if statements AND if + and (both need to be true for smth to happen)
    //fill(255, 255, 255);
    //if(circle.x > width/3); {
    //    if(circle.x > 2* width/3) {
    //        fill(255, 0, 0);
    //    }
    //}

    //if + and (both need to be true for smth to happen) a better way of writing ^
    //fill(255, 255, 255);
    //if (circle.x > width/3 && circle.x < 2* width/3) {
    //    fill(255, 0, 0);
    //}

    //or symbol
    //fill(255, 255, 255);
    //if (circle.x < width/3 || circle.x > 2* width/3) {
    //    fill(255, 0, 0);
    //}

    //not condition (negation)
    //fill(255, 255, 255);
    //if (!circle.x > width/3) {
    //    fill(255, 0, 0);
    //}

    ellipse(circle.x, circle.y, circle.size);
}