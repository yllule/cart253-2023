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
        this.extinguished = false // the fire starts out...burning
    }
}