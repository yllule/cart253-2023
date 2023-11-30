//the title screen of the game
//press the center button to start the game?

class Title {
    constructor() {

    }

    draw() {

        //screen starts off closed
        push();
        imageMode(CENTER);
        image(screenOffImg, toy.x, toy.y);
        pop();

        push();
        imageMode(CENTER);
        image(noteImg, toy.x, toy.y);
        pop();
    }


    mousePressed() {
        //you have to press the center button to start the game
        if(mouseInsideCenterButton()) {
        currentState = new Sprout;
        }
    }
}