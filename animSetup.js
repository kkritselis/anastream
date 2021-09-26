function anagramSetup() { // choose new anagram
    currAnagram = anagrams[Math.floor(Math.random() * anagrams.length)];
    running = 1; // turn on the animaion
    let phraseLength = currAnagram[0].length;
    let rowStart = (1920 - (phraseLength * tileW) + ((phraseLength - 1) * tileGap)) / 2 // figure out letter spacing based on length of phrase
    // create base tiles from letters in phrase.  These tiles will be rendered, but not animated
    for (let a = 0; a < phraseLength; a++) {
        tileList.push(new Tile(currAnagram[0][a], rowStart + (a * tileW) + (a * tileGap), row1, tileW, tileH, tileW / 2, tileH / 2, (Math.random() * 10) - 5));
    }
    // create anim tiles, these are initially laid out in the start phrase configuration and then animate to final phrase configuration.
    for (let a = 0; a < phraseLength; a++) {
        tileList.push(new Tile(currAnagram[0][a], rowStart + (a * tileW) + (a * tileGap), row2, tileW, tileH, tileW / 2, tileH / 2, (Math.random() * 10) - 5));
    }
    // create anims
    let endLoc, startLoc;
    let timeStamp = Date.now();
    for (let a = 0; a < phraseLength; a++) {
        // find end position for letter
        endLoc = 0;
        startLoc = 0;
        for (let b = 0; b < phraseLength; b++) {
            if (currAnagram[0][a] == currAnagram[1][b]) {
                endLoc = b;
                startLoc = a;
                currAnagram[1] = currAnagram[1].substring(0, b) + '*' + currAnagram[1].substring(b + 1);
            }
        }
        // Push anims into list

        // Anim(tilePos, x1, y1, x2, y2, r, start, end)
        animList.push(new Anim(endLoc, rowStart + (startLoc * tileW) + (startLoc * tileGap), row2, rowStart + (endLoc * tileW) + (endLoc * tileGap), row3, (Math.random() * 10) - 5), timeStamp + (a * 3000), timeStamp + (a * 3000) + 3000);
    }
}
