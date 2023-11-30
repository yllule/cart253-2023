//the title screen of the game
//press the center button to start the game?

class Title {
    constructor() {

        this.titleString = 'On your way home you find an off brand Tamagotcha toy...'

    }

    draw() {

        //text display
        push();
        textAlign(CENTER);
        fill(0, 0, 255);
        text(this.titleString, width/2, toy.y-400);
        pop();

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