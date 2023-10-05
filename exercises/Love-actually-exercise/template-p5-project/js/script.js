/**
 * Go get that pollen!
 * Catherine Zaloshnja
 */

"use strict";

let user = {
    x: 250,
    y: 250,
    vx: 0,
    vy: 0,
    speed: 4,
    size: 50
  };

  let flower1 = {
    x: 0,
    y: 0,
    size: 150,
    vx: 0,
    vy: 0,
    speed: 6
  };

  let flower2 = {
    x: 0,
    y: 0,
    size: 200,
    vx: 0,
    vy: 0,
    speed: 10
  }
  
  function setup() {
    createCanvas(2000, 1000);
    user.x = width/2
    user.y = height/2

    flower1.y = random(0, height);
    flower1.vx = flower1.speed;

    flower2.y = random(0, height);
    flower2.vx = flower2.speed;
    flower2.x = width/2
  }
  
  function draw() {
    background(0);

    //user movement (make it a function later) (tweak the movement later)
    //horizontal movement of the user, user vx cannot be 0 so that the bee is always flying (also to make it a little harder to control)
    if (keyIsDown(LEFT_ARROW)) {
      user.vx = -user.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      user.vx = user.speed;
    }
    //else {
    //  user.vx = 0;
    //}
  
    // vertical movement of the user, same thing as with vx, user vy cannot be 0
    if (keyIsDown(UP_ARROW)) {
      user.vy = -user.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      user.vy = user.speed;
    }
    //else {
    //  user.vy = 0;
    //}
  
    user.x = user.x + user.vx;
    user.y = user.y + user.vy;
  
    //user display
    ellipse(user.x, user.y, user.size);

    //flower1 movement
    flower1.x = flower1.x + flower1.vx;
    flower1.y = flower1.y + flower1.vy;

    //since it's windy, i want the y position of the flowers to randomly change (this also makes the game a little harder). i went with 0.03 cause it looked the most "naturally" windy
    let change = random();
    if (change < 0.03) {
        flower1.vy = random(-flower1.speed, flower1.speed);
    }

    //flower1 will go offscreen for a bit before resetting
    let reset = width+300;

    if (flower1.x > reset) {
        flower1.x = 0;
        flower1.y = random(0, height);
    }

    //display flower1
    fill(255);
    ellipse(flower1.x, flower1.y, flower1.size);

    //flower2 movement

    flower2.x = flower2.x + flower1.vx;
    flower2.y = flower2.y + flower2.vy;

    //adding the windyness to flower2
    if (change < 0.03) {
        flower2.vy = random(-flower2.speed, flower2.speed);
    }

    //flower2 will have a different reset rate than flower1
    let reset2 = width+200;

    if (flower2.x > reset2) {
        flower2.x = 0;
        flower2.y = random(0, height);
    }

    //display flower2
    fill(255);
    ellipse(flower2.x, flower2.y, flower2.size);

  }


//let circle1 = {
//    x: undefined,
//    y: 0,
//    size: 100,
//    vx: 0,
//    vy: 0,
//    speed: 3
//};

//let circle2 = {
//    x: undefined,
//    y: 250,
//    size: 100,
//    vx: 0,
//    vy: 0,
//    speed: 3
//};

//let state = `title`; //can be : title, simulation, love, sadness

/**
 * Description of preload
*/
//function preload() {

//}


/**
 * Description of setup
*/
//function setup() {
//    createCanvas(500,500);

    //position circles seperated from one another
    //circle1.x = width/3;
    //circle2.x = 2 * width/3;

    //start circles moving in a random direction
    //circle1.vx = random(-circle1.speed, circle1.speed);
    //circle1.vy = random(-circle1.speed, circle1.speed);
    //circle2.vx = random(-circle2.speed, circle2.speed);
    //circle2.vy = random(-circle2.speed, circle2.speed);
//}


/**
 * Description of draw()
*/
//function draw() {
//    background(0);

    //if (state === `title`) {
    //    title();
    //}
    //else if (state === `simulation`) {
    //    simulation();
    //}
    //else if (state === `love`) {
    //    love();
    //}
    //else if (state === `sadness`) {
    //    sadness();
    //}
//}

//function title() {
//    push();
//    textSize(64);
//    fill(250, 125, 125);
//    textAlign(CENTER, CENTER);
//    text(`LOVE?`, width/2, height/2);
//    pop();
//}

//function simulation() {
//    move();
//    checkOffScreen();
//    checkTouch();
//    display();
//}

//function love() {
//    push();
//    textSize(64);
//    fill(250, 0, 0);
//    textAlign(CENTER, CENTER);
//    text(`LOVE!`, width/2, height/2);
//    pop();
//}

//function sadness() {
//    push();
//    textSize(64);
//    fill(0, 0, 255);
//    textAlign(CENTER, CENTER);
//    text(`:'(`, width/2, height/2);
//    pop();
//}

//function move() {
//    //move the circles
//    circle1.x = circle1.x + circle1.vx;
//    circle1.y = circle1.y + circle1.vy;

//    circle2.x = circle2.x + circle2.vx;
//    circle2.y = circle2.y + circle2.vy;
//}

//function checkOffScreen() {
    //check if the circles have gone offscreen
//    if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
//    state = `sadness`;
//    }
//}

//function checkTouch() {
    //check if the circles touch
//    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
//    if (d < circle1.size/2 + circle2.size/2) {
//        state = `love`;
//    }
//}

//function display() {
//    //display the circles
//    ellipse(circle1.x, circle1.y, circle1.size);
//    ellipse(circle2.x, circle2.y, circle2.size);
//}

//function mousePressed() {
//    if (state === `title`) {
//        state = `simulation`;
//    }
//}