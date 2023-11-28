//the title screen of the game
//press the center button to start the game?

class Title extends State {
    constructor() {
        super();

        this.titleString = 'Grow a Pet!'
    }

    draw() {
        super.draw();
        background(0);
        this.displayTitle();
    }

    displayTitle() {
        push();
        fill(255);
        text(this.titleString, 100, 100);
        pop();
    }

    mousePressed() {
        super.mousePressed();
        currentState = new Sprout;
    }
}