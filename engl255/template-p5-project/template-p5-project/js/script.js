/**
 * ENGL255 Final project
 * Catherine Zaloshnja
 * 
 * If anyone from CART is reading this, I'm just lazy and using my CART253 repo for my ENGL final project which is an interactive illustration.
 */

"use strict";

let imgPos = {
    x: 0,
    y: 0
}

let illuImg;

/**
 * Description of preload
*/
function preload() {

    illuImg = loadImage("assets/images/eng_illu.png");

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(1000, 750);

}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    //start position
    imageMode(CENTER);
    image(illuImg, width/2, -250);

    //end position
    imageMode(CENTER);
    image(illuImg, width/2, 1000);

}

//notes : make it so the up and down arrows (or mouse scroll?) makes the img scroll
//add states, title screen with instructions + title