/**
 * Title of Project
 * Author Name
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);

    let hotCelsius = toCelsius(100);
    console.log(`100 degrees Fahrenheit is ${hotCelsius} degrees Celsius`);

    let coldCelsius = toCelsius(10);
    console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius`);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

}

function toCelsius(f) {
    let celsius = (f - 32) * 5/9;
    return celsius;
}