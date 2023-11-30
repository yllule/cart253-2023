class Sprout {
    constructor() {

        //check if the pet has been fed or watered, which are the conditions needed for it to evolve
        this.fed = false;
        this.watered = false;
        //if this is true, the feed and drink "animation" will show
        this.showImageFeed = false;
        this.showImageWater = false;
        this.showTextFeed = false;
        this.showTextWater = false;
        this.showOffScreen = false;

    }

    draw() {
        
        //display of the options on the screen
        this.displayFeed();
        this.displayDrink();
        this.displayWash();
        this.displayPlay();
        this.displayMedecine();
        this.displayTalk();
        this.displayInfo();
        this.displayOff();

        //display player
            push();
            image(playerImg, player.x, player.y);
            pop();


        //display pet
            push();
            image(sproutImg, pet.x, pet.y);
            pop();

        if(this.showImageFeed) {
            ellipse(200,200,200);
            //resets the variable back to false so the feed 'animation' repeats everytime you click on the feed option
            this.showImageFeed = false;
        }

        if(this.showImageWater) {
            ellipse(100,100,100);
            this.showImageWater = false;
        }

        if(this.showTextFeed) {
            push();
            textSize(15);
            textAlign(CENTER);
            textFont('Georgia');
            text('Maybe my pet plant could use some fertilizer...', width/2, height/2-15);
            pop();
        }

        //screen turns off if player selects off button (off screen asset goes over everything)
        if(this.showOffScreen) {
            push();
            imageMode(CENTER);
            image(screenOffImg, toy.x, toy.y);
            pop();
        }

        //check if the sprout has been watered and fed, which will lead to the next state
        this.checkEvolution();
        
    }

    //display of the options, the position values are funky here cause i'm trying to perfectly place the elements where needed
    displayFeed() {
    //when this option is targetted, it changes blending mode to indicate that that one is currently targetted
        if (currentIndex === 0) {
            push();
            blendMode(HARD_LIGHT);
            image(feedImg, toy.x-129, toy.y-117);
            pop();
        }
    //otherwise the option looks normal
        else {
            push();
            image(feedImg, toy.x-129, toy.y-117);
            pop();
        }
    }

//same thing as display feed but for the other options
    displayDrink() {
    if (currentIndex === 1) {
        push();
        blendMode(HARD_LIGHT);
        image(drinkImg, toy.x-57, toy.y-118);
        pop();
    }
    else {
        push();
        image(drinkImg, toy.x-57, toy.y-118);
        pop();
    }
}

    displayWash() {
    if (currentIndex === 2) {
        push();
        blendMode(REMOVE);
        image(washImg, toy.x+5, toy.y-113);
        pop();
    }
    else {
        push();
        blendMode(SOFT_LIGHT);
        image(washImg, toy.x+5, toy.y-113);
        pop();
    }
}

    displayPlay() {
    if (currentIndex === 3) {
        push();
        blendMode(REMOVE);
        image(playImg, toy.x+85, toy.y-117);
        pop();
    }
    else {
        push();
        blendMode(SOFT_LIGHT);
        image(playImg, toy.x+85, toy.y-117);
        pop();
    }
}

    displayMedecine() {
    if (currentIndex === 4) {
        push();
        blendMode(REMOVE);
        image(medecineImg, toy.x-133, toy.y+46);
        pop();
    }
    else {
        push();
        blendMode(SOFT_LIGHT);
        image(medecineImg, toy.x-133, toy.y+46);
        pop();
    }
}

    displayTalk() {
    if (currentIndex === 5) {
        push();
        blendMode(REMOVE);
        image(talkImg, toy.x-60, toy.y+43);
        pop();
    }
    else {
        push();
        blendMode(SOFT_LIGHT);
        image(talkImg, toy.x-60, toy.y+43);
        pop();
    }
}

    displayInfo() {
    if (currentIndex === 6) {
        push();
        blendMode(HARD_LIGHT);
        image(infoImg, toy.x+15, toy.y+44);
        pop();
    }
    else {
        push();
        image(infoImg, toy.x+15, toy.y+44);
        pop();
    }
}

    displayOff() {
    if (currentIndex === 7) {
        push();
        blendMode(HARD_LIGHT);
        image(offImg, toy.x+85, toy.y+46);
        pop();
    }
    else {
        push();
        image(offImg, toy.x+85, toy.y+46);
        pop();
    }
}

    mousePressed() {

        if(mouseInsideCenterButton()) {
            //select button for on screen options
            buttonCenter.size = 50;

                if (currentIndex === 0) {
                    this.showImageFeed = true;
                    this.fed = true;
                }
                else if (currentIndex === 1) {
                    this.showImageWater = true;
                    this.watered = true;
                }

                //shows what the pet needs
                else if (currentIndex === 6) {
                    if (!this.fed) {
                        this.showTextFeed = true;
                    }
                    if (!this.water) {
                        this.showTextWater = true;
                    }
                }
                //turn the game off if you press the off option (makes the off screen appear in front of everything)
                else if (currentIndex === 7) {
                    this.showOffScreen = !this.showOffScreen; // Toggle the state
                }
            } 
        //turn the game back on if you press the center button
        else if (mouseInsideCenterButton() && this.showOffScreen) {
            this.showOffScreen = false;
        }
    }

    checkEvolution() {

        if(this.fed === true && this.watered === true) {
            currentState = new Flower;
        }
    }
}
