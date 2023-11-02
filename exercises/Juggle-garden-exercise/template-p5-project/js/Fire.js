class Fire {
    constructor(x,y,size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.maxSize = size;
        this.vx = 0;
        this.vy = 0;
        this.speed = 2;
        this.growRate = 0.5; //how much bigger the fire will get
        this.shrinkRate = 0.5; // how much smaller the fire will get
        this.color = {
            r: 255,
            g: 100,
            b: 100
        }
        this.extinguished = false // the fire is burning
    }

    grow() {
        let grow = random(0, 0.4);
        this.size = this.size + grow;
    }

    shrink() {
        let shrink = random(0, 5);
        this.size = this.size - shrink;
        if (this.size <= 0) {
            this.extinguished = true;
        }
    }

    tryToBurn(tree) {
        //tree.x1+25 is the middle distance between x1 and x2, same thing for y1 and y3
        //therefore tree.x1+25 and tree.y1-25 should give us the center of each triangle
        let d = dist(this.x, this.y, tree.x1+25, tree.y1-25);
        if (d < this.size/2) {
            this.grow();
            tree.burn();
        }
    }

    display() {
        push();
        fill(255, 100, 100);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();
    }

    goodEnd() {
        if(this.extinguished) {
            push();
            textSize(30);
            fill(255);
            textAlign(CENTER);
            textFont('Georgia');
            text('You saved the forest!',width/2, height/2);
            pop();
        }
    }
}