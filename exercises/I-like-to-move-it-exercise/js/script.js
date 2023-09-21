/**
 * I like to move it exercise
 * POV the earth is crashing into the sun, save yourself!
 * Catherine Zaloshnja
 */

"use strict";

//let bg = 0;

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
    x1: 250,
    x2: 270,
    x3: 260,
    r: 200,
    g: 225,
    b: 250
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
    sun.x = constrain(sun.x, 0, width);

    //sun.size = map(mouseY, 0 ,height, 50, 500);
    sun.size = sun.size + sun.speed;
    fill(sun.r, sun.g, sun.b);
    sun.g = sun.g -1;
    sun.b = sun.b -1;
    //sun.g = map(mouseY, 0, height, 250, 0, true);
    //sun.b = map(mouseY, 0, height, 250, 0, true);
    //originally i was gonna make the person control the sun size
    ellipse(sun.x, sun.y, sun.size);

    //player
    fill(0, 0, 0);
    triangle(player.x1, 405, player.x2, 405, player.x3, 380);
    player.x1 = map(mouseX, 0, width, 500, width, true);
    player.x2 = map(mouseX, 0, width, 500, width, true);
    player.x3 = map(mouseX, 0, width, 500, width, true);
    //player.x2 = player.x2 + player.speed;
    //player.x3 = player.x3 + player.speed;

    //ground
    fill(ground.r, ground.g, ground.b);
    ground.r = ground.r +1;
    ground.g = ground.g -1;
    ground.b = ground.b -1;
    //ground.r = map(mouseY, 250, height, 0, 500);
    rect(0, 400, 500, 100);
    //the ground color doesn't match the sun color but shhh

    

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

    //background(backgroundShade);

    //circle.x = circle.x + circle.speed;

    //circle.speed = random(-5, 5);
    //circle.fill = random(0,255);



    

}