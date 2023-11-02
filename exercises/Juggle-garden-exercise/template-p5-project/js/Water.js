class Water {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 50;
    }

    move() {
        this.x = mouseX;
        this.y = mouseY;
    }

    display() {
         push();
         noStroke();
         ellipse(this.x, this.y, this.size);
         pop();
    }

    mouseDragged(){
        this.display();
        this.size = this.size + 1;
        this.size = constrain(this.size, 50, 100);

        if (this.size >= 100) {
            this.size = 50;
        }
    }
}