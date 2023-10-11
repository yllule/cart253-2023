/**
 * Fishing simulator
 * Catherine Zaloshnja
 */

"use strict";

let inventoryBox = {
    x: undefined,
    y: undefined,
    size: 200,
    offsetX: 0,
    offsetY: 0,
    isBeingDragged: false,
    feedbackSizeChangeAmount : 5
};

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    inventoryBox.x = width / 2;
    inventoryBox.y = height / 2;

}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    handleDragging();
    drawInventoryBox();
}

function handleDragging() {
    if (inventoryBox.isBeingDragged) {
      inventoryBox.x = mouseX + inventoryBox.offsetX;
      inventoryBox.y = mouseY + inventoryBox.offsetY;
  
      inventoryBox.x = constrain(inventoryBox.x, 0, width);
      inventoryBox.y = constrain(inventoryBox.y, 0, height);
    }
  }

  function drawInventoryBox() {
    push();
    fill(255, 0, 0);
    noStroke();
    rect(inventoryBox.x, inventoryBox.y, inventoryBox.size);
    pop();
  }

  function mouseIsInsideInventoryBox() {
    let d = dist(mouseX, mouseY, inventoryBox.x, inventoryBox.y);
    if (d < inventoryBox.size / 2) {
      return true;
    } else {
      return false;
    }
  }

  function mousePressed() {
    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    if (mouseIsInsideInventoryBox()) {
      // Start dragging
      inventoryBox.isBeingDragged = true;
      // Remember the offset of the shape's centre relative to the mouse
      inventoryBox.offsetX = inventoryBox.x - mouseX;
      inventoryBox.offsetY = inventoryBox.y - mouseY;
      // Make the shape a bit smaller for feedback
      inventoryBox.size -= inventoryBox.feedbackSizeChangeAmount;
    }
  }

  function mouseReleased() {
    // If the shape is currently being dragged
    // and they've "dropped it" on the right side of the line
    if (inventoryBox.isBeingDragged = false) {
      // Then deactive the shape (it vanishes)
      shape.size += shape.feedbackSizeChangeAmount;
      shape.offsetX = 0;
      shape.offsetY = 0;
  }
}