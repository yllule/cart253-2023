class Sprout {
    constructor() {

    }

    draw() {
        background(255);
        
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
        image(petImg, pet.x, pet.y);
        pop();

        
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
        blendMode(HARD_LIGHT);
        image(washImg, toy.x+5, toy.y-113);
        pop();
    }
    else {
        push();
        image(washImg, toy.x+5, toy.y-113);
        pop();
    }
}

    displayPlay() {
    if (currentIndex === 3) {
        push();
        blendMode(HARD_LIGHT);
        image(playImg, toy.x+85, toy.y-117);
        pop();
    }
    else {
        push();
        image(playImg, toy.x+85, toy.y-117);
        pop();
    }
}

    displayMedecine() {
    if (currentIndex === 4) {
        push();
        blendMode(HARD_LIGHT);
        image(medecineImg, toy.x-133, toy.y+46);
        pop();
    }
    else {
        push();
        image(medecineImg, toy.x-133, toy.y+46);
        pop();
    }
}

    displayTalk() {
    if (currentIndex === 5) {
        push();
        blendMode(HARD_LIGHT);
        image(talkImg, toy.x-60, toy.y+43);
        pop();
    }
    else {
        push();
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

    }
}