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

    mousePressed(){
        this.display();
        this.size = this.size + 5;
    }
}