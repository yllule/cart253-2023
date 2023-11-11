/**
 * Sound experiments
 * Catherine Zaloshnja
 * 
 */

"use strict";

let synth;
let notes = ['F2', 'G2', 'Ab3', 'Bb3', 'C3', 'Db3', 'Eb3', 'F4'] //f minor
let currentNote = 0;

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

    synth = new p5.PolySynth();
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

}

function keyPressed() {
    setInterval(playRandomNote,150);

}

function playRandomNote() {
    let note = notes[currentNote];
    synth.play(note, 1, 0, 1);

    currentNote = currentNote+1;
    if (currentNote === notes.length) {
        currentNote = 0;
    }
}