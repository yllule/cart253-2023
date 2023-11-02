/**
 * Juggle Garden exercise
 * Catherine Zaloshnja
 * 
 * Reusing the concept from the previous exercise
 * 
 */

"use strict";

//let state = 'title' //can be 'title', 'simulation', 'badEnd', 'goodEnd'

//the forest
let forest = {
    //an array for the individual fires
    fires: [],
    //how many fires the game will start with
    numFires : 15,
    //an array for the trees in the forest
    trees: [],
    //number of trees in the game
    numTrees : 50,
    //an array for the trail of water
    waters: []
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
createCanvas(800, 800);

//create fires randomly on the screen
for (let i = 0; i < forest.numFires; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(10, 50);
    //create a new fire
    let fire = new Fire(x, y, size);
    forest.fires.push(fire);
    }

// create trees randomly on the screen
for (let i = 0; i < forest.numTrees; i++) {
    let x1 = random(0, width);
    let y1 = random(0, height);
    //create a new tree
    let tree = new Tree(x1,y1);
    forest.trees.push(tree);
}

for (let i = 0; i < forest.numWater; i++) {
    let x = mouseX;
    let y = mouseY;
    //create a new tree
    let water = new Water();
    forest.waters.push(water);
}
}

/**
 * Description of draw()
*/
function draw() {
    background(50, 100, 50);
    // noCursor();

    //display all the fires in the array
    for (let i = 0; i < forest.fires.length; i++) {
        let fire = forest.fires[i];
        if (!fire.extinguished) {
            fire.grow();
            fire.display();

            for (let j = 0; j < forest.fires.length; j++) {
                let tree = forest.trees[j];
                fire.tryToBurn(tree);
            }
        }
    }

    //display all the trees in the array
    for (let i = 0; i < forest.trees.length; i++) {
        let tree = forest.trees[i];
        if (!tree.burnt) {
            tree.display();
        }
    }

    for (let i = 0; i < forest.waters.length; i++) {
        let water = forest.waters[i];
        //display of the water coming out
        water.display();
    }

    // if (state === 'title') {
    //     title();
    // }
    // else if (state === 'simulation') {
    //     simulation();
    // }
    // else if (state === 'goodEnd') {
    //     goodEnd();
    // }
    // else if (state === 'badEnd') {
    //     badEnd();
    // }
    
}

function mousePressed() {

    for(let i = 0; i < forest.waters.length; i++) {
        let water = forest.waters[i];
        water.mousePressed();
    }

}

// function title() {
//     //title screen

//     push();
//     textSize(20);
//     fill(255);
//     textAlign(CENTER);
//     text(`Try to put out all the flames before it's too late`, width/2, height/2);
//     textSize(12);
//     text(`I'm having a hard time with understanding arrays + not much time to work on this outside of class and so I wasn't able to complete what I wanted to do.`, width/2, height/2+20);
//     text(`Please check the comments at the top of my code to understand what I was going for!`, width/2, height/2+40);
//     pop();
// }

// function mousePressed() {
//     //click to start the game
//     if (state === 'title') {
//         state = 'simulation';
//     }
// }

// function simulation() {
//     for (let i = 0; i < forestFire.length; i++) {
//         moveFire(forestFire[i]);
//         displayFire(forestFire[i]);
//         checkTouch(forestFire[i]);
//     }


// function moveFire(fire) {

//     let change = random(0,1);
//     if (change < 1) {
//         fire.vx = random(-fire.speed, fire.speed);
//         fire.vy = random(-fire.speed, fire.speed);
//     }

//     fire.x = fire.x + fire.vx;
//     fire.y = fire.y + fire.vy;

//     fire.x = constrain(fire.x, 0, width);
//     fire.y = constrain(fire.y, 0, height);
// }

// function displayFire(fire) {
//     //if the fire is still lit (not wet), it will display
//     if (!fire.wet) {
//     push();
//     fill(255, 100, 100);
//     noStroke();
//     ellipse(fire.x, fire.y, fire.size);
//     pop();
//     }
// }

// function checkTouch(fire) {
//     //check if the water is touching the fire
//     if (!fire.wet) {
//         let d = dist(hose.x, hose.y, fire.x, fire.y);
//             if (d < hose.size/2 + fire.size/2) {
//                 print('Touch');
//                 fire.wet === true;
//             }
//         }
//     }
