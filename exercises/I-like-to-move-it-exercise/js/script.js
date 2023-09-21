/**
 * I like to move it exercise
 * POV the earth is crashing into the sun, save yourself!
 * i'll be honest, i kind of just played around and did whatever so it's very possible there might be some things in here that don't make any sense
 * Catherine Zaloshnja
 */

"use strict";

let ground = {
    r: 0,
    g: 100,
    b: 75
}

let sun = {
    r: 250,
    g: 250,
    b: 200,
    x: 350,
    y: 150,
    size: 150,
    speed: 2,
    fill: 255
};

let triangle1 = {
    x1: 30,
    x2: 50,
    x3: 40,
    r: 200,
    g: 225,
    b: 250,
    speed: 1.5
}

let triangle2 = {
    x1: 100,
    x2: 120,
    x3: 110,
    r: 200,
    g: 225,
    b: 250,
    speed: 2
}

let triangle3 = {
    x1: 350,
    x2: 370,
    x3: 360,
    r: 200,
    g: 225,
    b: 250,
    speed: 1
}

let triangle4 = {
    x1: 100,
    x2: 120,
    x3: 110,
    r: 200,
    g: 225,
    b: 250,
    speed: -1
}

let triangle5 = {
    x1: 200,
    x2: 220,
    x3: 210,
    r: 200,
    g: 225,
    b: 250,
    speed: -1
}

let player = {
    r: 150,
    g: 0,
    b: 200
}

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas (500, 500);
}


/**
 * Description of draw()
*/
function draw() {
    //sky
    background(220, 230, 250);
    noStroke();

    //sun
    sun.size = constrain(sun.size, 0, 1000);
    sun.size = sun.size + sun.speed;
    fill(sun.r, sun.g, sun.b);
    sun.g = sun.g -1;
    sun.b = sun.b -1;
    ellipse(sun.x, sun.y, sun.size);


    //ground
    fill(ground.r, ground.g, ground.b);
    ground.r = ground.r +1;
    ground.g = ground.g -1;
    ground.b = ground.b -1;
    rect(0, 400, 500, 100);
    //the ground color doesn't match the sun color but shhh close enough


    //triangles moving to the right
    fill(ground.r, ground.g, ground.b);
    triangle(triangle1.x1, 405, triangle1.x2, 405, triangle1.x3, 380);
    triangle1.x1 = triangle1.x1 + triangle1.speed;
    triangle1.x2 = triangle1.x2 + triangle1.speed;
    triangle1.x3 = triangle1.x3 + triangle1.speed;

    triangle(triangle2.x1, 405, triangle2.x2, 405, triangle2.x3, 380);
    triangle2.x1 = triangle2.x1 + triangle2.speed;
    triangle2.x2 = triangle2.x2 + triangle2.speed;
    triangle2.x3 = triangle2.x3 + triangle2.speed;

    triangle(triangle3.x1, 405, triangle3.x2, 405, triangle3.x3, 380);
    triangle3.x1 = triangle3.x1 + triangle3.speed;
    triangle3.x2 = triangle3.x2 + triangle3.speed;
    triangle3.x3 = triangle3.x3 + triangle3.speed;


    //triangles moving to the left
    triangle(triangle4.x1, 405, triangle4.x2, 405, triangle4.x3, 380);
    triangle4.x1 = triangle4.x1 + triangle4.speed;
    triangle4.x2 = triangle4.x2 + triangle4.speed;
    triangle4.x3 = triangle4.x3 + triangle4.speed;

    triangle(triangle5.x1, 405, triangle5.x2, 405, triangle5.x3, 380);
    triangle5.x1 = triangle5.x1 + triangle5.speed;
    triangle5.x2 = triangle5.x2 + triangle5.speed;
    triangle5.x3 = triangle5.x3 + triangle5.speed;

    //player
    let x2 = map(mouseX, 0, width, 0, 500);
    fill(player.r, player.g, player.b);
    player.r = player.r + 1;
    player.g = player.g -1;
    player.b = player.b -1;
    ellipse(x2, 395, 25);
}