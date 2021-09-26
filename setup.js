let anagrams = [["ceaded", "decade"], ["abcde", "edcba"], ["abeba", "eabab"], ["ebbed", "beedb"], ["baded", "bdead"]];
const letters = {
    a: "https://assets.codepen.io/1240556/a.png",
    b: "https://assets.codepen.io/1240556/b.png",
    c: "https://assets.codepen.io/1240556/c.png",
    d: "https://assets.codepen.io/1240556/d.png",
    e: "https://assets.codepen.io/1240556/e.png"
};

const TO_RADIANS = 180 / Math.PI;
const ctx = document.getElementById('canvas').getContext('2d');

let running = 0;
let currAnagram;
let tileW = 111;
let tileH = 123;
let tileGap = 15;
let wordGap = 40;
let row1 = 90;
let row2 = 250;
let row3 = 540;
let tileList = [];
let animList = [];