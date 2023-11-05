class Tree {
    constructor(x1, y1) {
        //defining the variables for the triangle that will symbolize the trees in the forest
        this.x1 = x1;
        this.x2 = this.x1+50;
        this.x3 = this.x1+25;
        this.y1 = y1;
        this.y2 = this.y1;
        this.y3 = this.y1-50;
        this.burnt = false;
        this.color = {
            r: 0,
            g: 255,
            b: 100
        };
    }

    burn() {
        //when in contact with a fire, the tree will burn, slowly turning black
        this.color.g = this.color.g-1;
        this.color.b = this.color.b-1;
        if (this.color.g <= 0 && this.color.b <= 0) {
            this.burnt = true; //when the tree completely turns black, it will have been considered burnt
        }
    }

    display() {
        //display of the trees
        push();
        noStroke();
        fill(this.color.r, this.color.g, this.color.b);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        pop();
    }
}