//the title screen of the game
//press the center button to start the game?

class Title {
    constructor() {

        this.titleString = 'On your way home you find a bootleg Tamagotchi toy and a note attached to it...'
        this.instructionString = '(Press the center button to open the game)';
    }

    draw() {
        background(255);

        //display the title
        push();
        fill(200, 100, 150);
        text(this.titleString, toy.x, 200);
        text(this.instructionString, toy.x, 1000);
        pop();

    }


    mousePressed() {
        //you have to press the center button to start the game
        if(mouseInsideCenterButton()) {
        currentState = new Sprout;
        }
    }
}