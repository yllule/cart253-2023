class Water {
    constructor() {
        this.x = mouseX;
        this.y = mouseY;
        this.size = 50;
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