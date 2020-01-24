var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


var gap = 330;
var cons = pipeNorth.height + gap;

var bX = 10, bY = 150;
var gravity = 1;

document.addEventListener("keydown", moveUp);

function moveUp() {
    bY -= 20;
}

function draw() {

    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipeNorth, 120, 0);
    ctx.drawImage(pipeSouth, 120, 0 + cons);
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, bX, bY);
    bY += gravity;

    requestAnimationFrame(draw);
}

draw();
