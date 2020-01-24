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


var gap = 350;
var cons = pipeNorth.height + gap;

var bX = 10, bY = 150;
var score = 0;
var gravity = 1.25;

document.addEventListener("keydown", moveUp);

function moveUp() {
    bY -= 25;
}

var pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
};

function draw() {
    ctx.drawImage(bg, 0, 0);
    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + cons);
        pipe[i].x--;

        if (pipe[i].x == 80) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
            });
        }

        if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width
            && (bY + bird.height >= pipe[i].y + cons || bY <= pipe[i].y + pipeNorth.height)
            || bY + bird.height >= cvs.height - fg.height
        ) {
            location.reload();
        }

        if (pipe[i].x == 5) {
            score++;
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, bX, bY);
    bY += gravity;
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}

draw();
