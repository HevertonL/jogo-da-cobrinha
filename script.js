
let canvas = document.getElementById("snake-game");
let ctx = canvas.getContext("2d");
let box = 32;
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG () {

    ctx.fillStyle = "#04B431";
    ctx.fillRect (0, 0, 16 * box, 16 * box);

}

function criarCobra () {
    for (i = 0; i < snake.length; i++) {
        ctx.fillStyle = "#F4FA58";
        ctx.fillRect (snake[i].x, snake[i].y, box, box)
    }
    

}
criarBG();
criarCobra(); 