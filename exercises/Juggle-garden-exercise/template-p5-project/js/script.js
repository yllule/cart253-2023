/**
 * Juggle Garden exercise
 * Catherine Zaloshnja
 * 
 * Reusing the concept from the previous exercise, put out the fires to save the forest
 * I wanted to keep the trail of water from my previous exercise attempt
 * but I was having a hard time doing that so I just went simpler
 * 
 */

"use strict";

let state = 'title' //can be 'title', 'simulation', 'badEnd', 'goodEnd'

//the forest
let forest = {
    //an array for the individual fires
    fires: [],
    //how many fires the game will start with
    numFires : 15,
    //an array for the trees in the forest
    trees: [],
    //number of trees in the game
    numTrees : 50
};

let water;

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

water = new Water();
}

/**
 * Description of draw()
*/
function draw() {
    background(50, 100, 50);
    noCursor();

    if (state === 'title') {
        title();
    }
    else if (state === 'simulation') {
        simulation();
    }
    else if (state === 'goodEnd') {
        goodEnd();
    }
    else if (state === 'badEnd') {
        badEnd();
    }
}
function title() {
    //title screen / tutorial

    push();
    textSize(30);
    fill(255);
    textAlign(CENTER);
    textFont('Georgia');
    text('Save the Forest!',width/2, height/2);
    textSize(20);
    text('Move the cursor towards fires to extinguish them', width/2, height/2+30);
    pop();
}

function simulation() {

    //display all the fires in the array
    for (let i = 0; i < forest.fires.length; i++) {
        let fire = forest.fires[i];
        if (!fire.extinguished) {
            fire.grow();
            fire.display();

            for (let j = 0; j < forest.trees.length; j++) {
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

    //display and movement of the water
    water.display();
    water.move();

    for (let i = 0; i < forest.fires.length; i++) {
        let fire = forest.fires[i];
        water.tryToWater(fire);
    }

}

function mouseDragged() {
   water.mouseDragged();
}

function mouseReleased() {
    water.mouseReleased();
}

function mousePressed() {
    //click to start the game
    if (state === 'title') {
        state = 'simulation';
    }
}

function goodEnd() {
    for (let i = 0; i < forest.fires.length; i++) {
        let fire = forest.fires[i];
        fire.goodEnd();

}
}