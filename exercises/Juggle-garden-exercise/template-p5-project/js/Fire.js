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
        let grow = random(0, 0.1);
        this.size = this.size + grow;
        
        // if (this.size = this.maxSize) {
        //     //function to duplicate (create fire?)
        // }
    }

    //
    tryToBurn(tree) {
        //tree.x1+25 is the middle distance between x1 and x2, same thing for y1 and y3
        //therefore tree.x1+25 and tree.y1-25 should give us the center of each triangle
        let d = dist(this.x, this.y, tree.x1+25, tree.y1-25);
        if (d < this.size + tree.x1+25 || d < this.size + tree.y1-25) {
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
}