/**
 * Alien activity
 * Catherine Zaloshnja
 * 
 * cute alien uwu
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
    createCanvas(500, 525);

    background(22, 22, 59);

    //antennas (base)
    stroke(84, 134, 84);
    strokeWeight(30);
    line(225, 125, 150, 30);
    line(275, 125, 350, 30);
    //antennas (circles)
    noStroke();

    fill(127, 206, 161);
    ellipse(155, 35, 50);
    ellipse(345, 35, 50);

    //legs
    stroke(51, 54, 118);
    line(220, 475, 220, 510);
    line(280, 475, 280, 510);

    //body
    noStroke();
    fill(51, 54, 118);
    ellipse(250, 430, 250, 125)
    fill(241, 254, 161);
    ellipse(250, 425, 300, 70);
    fill(75, 108, 175);
    ellipse(250, 400, 235, 90)

    //arms
    stroke(75, 108, 175);
    line(150, 380, 115, 350);
    line(350, 380, 385, 350);

    //neck
    
    noStroke();

    fill(84, 134, 84);
    ellipse(250, 350, 75, 90);

    // make the base of the alien's head
    
    fill(127,206,161);
    ellipse(250, 200, 250, 325);

    //eyebrows
    fill(33, 61, 36);
    ellipse(160, 150, 105, 100);
    ellipse(340, 150, 105, 100);
    fill(127, 206, 161);
    ellipse(160, 160, 105, 100);
    ellipse(340, 160, 105, 100);

    //make the eyes
    fill(52, 57, 115);
    ellipse(160, 175, 100);
    ellipse(340, 175, 100);

    //bottom eye sparkles
    fill(241, 254, 161);
    ellipse(170, 200, 30, 25);
    ellipse(330, 200, 30, 25);

    //top eye sparkles
    ellipse(145, 152, 35, 30);
    ellipse(355, 152, 35, 30);

    //nose
    fill(33, 61, 36);
    ellipse(240, 260, 12);
    ellipse(260, 260, 12);

    //mouth
    rect(235, 280, 30, 7, 25);



}




/**
 * Description of draw()
*/
function draw() {

}