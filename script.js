function render() {  // main rendering loop
    if (!running) { anagramSetup() };  // if there isn't an animation running, run setup function, select a new anagram and create a new animation sequence

    // clear the screen
    ctx.fillStyle = '#884';
    ctx.fillRect(0, 0, 1920, 1080);

    // loop through the current list of tiles and draw tiles in their updates positions
    for (let a = 0; a < tileList.length; a++) {
        const shipImg = new Image();
        shipImg.src = letters[tileList[a].letter];
        ctx.save();
        ctx.translate(tileList[a].x, tileList[a].y); // move pivot point of tile
        ctx.rotate(tileList[a].r / TO_RADIANS); // rotate tile
        ctx.drawImage(shipImg, -(tileW / 2), -(tileH / 2));
        ctx.restore();
    }

    if (animList.length > 0) {  // if there is still an item in the animList, continue animating the current tile

        if (animList[0].end > Date.now()) { // animations are calculated by time remaining in the animation sequence to figure out the delta between the starting and ending positions
            // update tile xy values
            let timeRemaining = animList[0].end - Date.now();
            // console.log(timeRemaining);
        } else {
            animList.shift();
        }
    } else { // if there is no item in the animList, reset
        running = 0;
        tileList = [];
        animList = [];
    }
};

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame
})();

(function animloop() {
    requestAnimFrame(animloop);
    render();
})();