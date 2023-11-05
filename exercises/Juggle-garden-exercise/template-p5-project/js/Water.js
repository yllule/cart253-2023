class Water {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 50;
        //color of the user when the mouse isn't dragged
        this.color = {
            r: 100,
            g: 100,
            b: 255
        }
    }

    move() {
        this.x = mouseX;
        this.y = mouseY;
    }

    display() {
        //display of water
         push();
         noStroke();
         fill(this.color.r, this.color.g, this.color.b);
         ellipse(this.x, this.y, this.size);
         pop();
    }

    mouseDragged() {
        //the display of water when the mouse is dragged
        this.color.r = 50;
        this.color.g = 50;
        this.color.b = 255;
        this.size = 100;
    }

    tryToWater(fire){
        //if the water comes in contact with fire, the fire will shrink
        let d = dist(this.x, this.y, fire.x, fire.y);
        if(d < this.size/2 + fire.size/2) {
            fire.shrink();
        }
    }

    mouseReleased(){
        //display of water when mouse is released (goes back to normal)
        this.color.r = 100;
        this.color.g = 100;
        this.color.b = 255;
        this.size = 50;
    }
}