/**
 * Age of Aquariums exercise
 * Catherine Zaloshnja
 * 
 */

"use strict";

let circle = {
    x: 0,
    y: 0,
    size: 100,
    trail: [],
    trailSize: 20
};

/**
 * Description of setup
*/
function setup() {
    createCanvas(600,600);
}

/**
 * Description of draw()
*/
function draw() {

background(0);

circle.x = mouseX;
circle.y = mouseY;

for (let i = 0; i < circle.trail.length; i++) {
    let position = circle.trail[i];
    ellipse(position.x, position.y, circle.size);
}

ellipse(circle.x, circle.y, circle.size);

let newTrailPosition = {
    x: circle.x,
    y: circle.y,
};
circle.trail.push(newTrailPosition);

if (circle.trail.length > circle.trailSize) {
    circle.trail.shift();
}

}

//previous exercise

// let fortunes = [
//     "To be or not to be",
//     "That is the question",
//     "Whether 'tis nobler in the mind",
//     "To suffer the slings and arrows",
//     "Of outrageous fortune",
//     "Or to take arms",
//     "Against a sea of sorrows",
//     "And by opposing end them."
// ];

// let currentIndex = 0;

// /**
//  * Description of preload
// */
// function preload() {

// }

// /**
//  * Description of setup
// */
// function setup() {
//     createCanvas(600, 600);
//     textAlign(CENTER, CENTER);
//     textSize(32);
//     fill(255);
// }

// /**
//  * Description of draw()
// */
// function draw() {
//     background(0);
//     text(fortunes[currentIndex], width/2, height/2);

// }

// function mousePressed() {
//     currentIndex = currentIndex+1;

//     if(currentIndex === fortunes.length) {
//         currentIndex = fortunes.length-1;
//     }
// }


//previous video exercise

// let school = [];
// let schoolSize = 10;


// /**
//  * Description of preload
// */
// function preload() {

// }


// /**
//  * Description of setup
// */
// function setup() {
// createCanvas(600, 600);


// for (let i = 0; i < schoolSize; i++) {
//     let fish = createFish(random(0, width), random(0, height));
//     school.push(fish);
// //    school[i] = createFish(random(0, width), random(0, height));
// }
// }

// function createFish(x, y) {
//     let fish = {
//         x: x,
//         y: y,
//         size: 50,
//         vx: 0,
//         vy: 0,
//         speed: 2
//     };
//     return fish;
// }


// /**
//  * Description of draw()
// */
// function draw() {
//     background(0);

//     for (let i = 0; i < school.length; i++) {
//         moveFish(school[i]);
//         displayFish(school[i]);
//     }
// }

// function moveFish(fish) {

//     let change = random(0,1);
//     if (change < 0.05) {
//         fish.vx = random(-fish.speed, fish.speed);
//         fish.vy = random(-fish.speed, fish.speed);
//     }

//     fish.x = fish.x + fish.vx;
//     fish.y = fish.y + fish.vy;

//     fish.x = constrain(fish.x, 0, width);
//     fish.y = constrain(fish.y, 0, height);
// }

// function displayFish(fish) {

//     push();
//     fill(200, 100, 100);
//     noStroke();
//     ellipse(fish.x, fish.y, fish.size);
//     pop();
// }

// function mousePressed() {
//     let fish = createFish(mouseX, mouseY);
//     school.push(fish);
// }