class Water {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 50;
        //color of the user when the mouse isn't dragged (not spraying water)
        this.colorHose = {
            r: 200,
            g: 200,
            b: 200
        }
    }

    move() {
        this.x = mouseX;
        this.y = mouseY;
    }

    display() {
         push();
         noStroke();
         fill(this.colorHose.r, this.colorHose.g, this.colorHose.b);
         ellipse(this.x, this.y, this.size);
         pop();
    }

    mouseDragged() {
        this.colorHose.r = 100;
        this.colorHose.g = 100;
        this.colorHose.b = 255;
        this.size = 100;

        //this.tryToWater(fire);
    }

    tryToWater(fire){
        let d = dist(this.x, this.y, fire.x, fire.y);
        if(d < this.size/2 + fire.size/2) {
            fire.shrink();
        }
    }

    mouseReleased(){
        this.colorHose.r = 200;
        this.colorHose.g = 200;
        this.colorHose.b = 200;
        this.size = 50;
    }
}