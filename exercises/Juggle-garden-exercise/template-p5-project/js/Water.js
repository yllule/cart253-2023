class Water {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 50;
        this.trail = [];
        this.maxTrail = 10;
    }

    display() {

        for (let i = 0; i < this.trail.length; i++) {
            let element = this.trail[i];
            //display of the water coming out
            push();
            noStroke();
            fill(100, 100, 255);
            ellipse(element.x, element.y, this.size);
            pop();
        }
    
        //the hose nozzle will follow the mouse position
        this.x = mouseX;
        this.y = mouseY;
    
        //display of the hose nozzle
        push();
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();
    }

    mouseDragged() {

        // adding water when the mouse is dragged by adding a trail to the hose nozzle
        let newTrailPosition = {
            x: this.x,
            y: this.y
        };
    
        this.trail.push(newTrailPosition);
    
        if (this.trail.length > this.maxTrail) {
            this.trail.shift();
        }
    }
}