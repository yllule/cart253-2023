/**
 * Dodge-em exercise
 * Catherine Zaloshnja
 */

"use strict";

//the images are mine. i drew them during class specifically for this exercise
//cath and mouseh are the cat and mouse images but horizontally flipped
let catImage;
let cathImage;
let mouseImage;
let mousehImage;

let cat = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 10
};

let user = {
    x: 250,
    y: 250,
    size: 100,
};

let numStatic = 500;

/**
 * Description of preload
*/
function preload() {
    catImage = loadImage("assets/images/cat.png");
    cathImage = loadImage("assets/images/cath.png")
    mouseImage = loadImage("assets/images/mouse.png");
    mousehImage = loadImage("assets/images/mouseh.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    cat.x = width/2;
    cat.y = height;
    cat.vx = cat.speed;

    noCursor();
}


/**
 * Description of draw()
*/
function draw() {
    background(33, 78, 58);

    //Display static
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(12, 43, 27);
        point(x, y);
    }


    //Cat movement, following the mouse
    if (mouseX < cat.x) {
        cat.vx = -cat.speed;
    }
    else {
        cat.vx = cat.speed;
    }

    if (mouseY < cat.y) {
        cat.vy = -cat.speed;
    }
    else {
        cat.vy = cat.speed;
    }

    cat.x = cat.x + cat.vx;
    cat.y = cat.y + cat.vy;
    
    //User movement
    user.x = mouseX;
    user.y = mouseY;

    //Check for getting eaten by cat
    let d = dist(user.x, user.y, cat.x, cat.y);
    if (d < cat.size/2 + user.size/2) {
        noLoop();
    }
    print("the cat ate you!");

    //Display cat, will turn around to face mouse
    if(user.x < cat.x) {
    image(catImage, cat.x, cat.y, 150, 100);
    }
        else {
            image(cathImage, cat.x, cat.y, 150, 100);
        }

    //Display user, will turn around depending on mouseX position
    imageMode(CENTER);
    if(mouseX < width/2) {
        image(mouseImage, mouseX, mouseY, 150, 100);
    }
        else {
        image(mousehImage, mouseX, mouseY, 150, 100);
        }

}