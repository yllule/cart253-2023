/**
 * Sound experiments
 * Catherine Zaloshnja
 * 
 */

"use strict";

let oscillator;
let t = 0;

/**
 * Description of preload
*/
function preload() {


}


/**
 * Description of setup
*/
function setup() {
    createCanvas(600,600);
    userStartAudio();

    oscillator = new p5.Oscillator(440,'sine');
    oscillator.amp(0.2);

}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    let noiseValue = noise(t);
    let newFreq = map(noiseValue, 0, 1, 440, 880);
    oscillator.freq(newFreq);

    t = t+0.1;
}

function mousePressed() {
    oscillator.start();
}

function mouseReleased() {
    oscillator.stop();
}