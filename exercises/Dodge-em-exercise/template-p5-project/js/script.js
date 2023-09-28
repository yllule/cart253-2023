/**
 * Dodge-em exercise
 * Catherine Zaloshnja
 */

"use strict";

let clownImage;

let cat = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2
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
    clownImage = loadImage("assets/images/clown.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    cat.y = random(0, height);
    cat.vx = cat.speed;

    noCursor();
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    //Display static
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(255);
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

    //Display cat
    image(clownImage, cat.x, cat.y, 100, 100);

    //Display user
    imageMode(CENTER);
    if(mouseX < width/2) {
        image(clownImage, mouseX, mouseY, 100, 100);
        //else {
        //
        //}
    }

}