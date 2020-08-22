
let canvas = document.getElementById("snake-game");
let ctx = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

let direccion = "right";

function criarBG() {

    ctx.fillStyle = "#04B431";
    ctx.fillRect(0, 0, 16 * box, 16 * box);
    ctx.canvas.style.border = "16px solid green";

}

function criarCobra() {
    for (i = 0; i < snake.length; i++) {
        ctx.fillStyle = "#F4FA58";
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
    }


}

function apple() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);
}

//Ações com o clique

document.addEventListener('keydown', update);


function update (event) {

if (event.keyCode == 37 && direccion != "right") direccion = "left";
if (event.keyCode == 38 && direccion != "down") direccion = "up";
if (event.keyCode == 39 && direccion != "left") direccion = "right";
if (event.keyCode == 40 && direccion != "up") direccion = "down";

}

function iniciarJogo() {

    // Movimentos para não sumir da tela

   
    if (snake[0].x > 15 * box && direccion == "right") {clearInterval (jogo); alert("GAME OVER!")};
    if (snake[0].x < 0 && direccion == "left") {clearInterval (jogo); alert("GAME OVER!")};
    if (snake[0].y > 15 * box && direccion == "down") {clearInterval (jogo); alert("GAME OVER!")};
    if (snake[0].y < 0 && direccion == "up") {clearInterval (jogo); alert("GAME OVER!")};

    // Game Over

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert("Game Over!")
        }

    }
    

    criarBG();
    criarCobra();
    apple();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direccion == "right") snakeX += box;
    if (direccion == "left") snakeX -= box;
    if (direccion == "up") snakeY -= box;
    if (direccion == "down") snakeY += box;
    

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }
    else {
    food.x = Math.floor(Math.random() * 15 + 1) * box,
    food.y = Math.floor(Math.random() * 15 + 1) * box
    }

   let newHead = {
        x: snakeX,
        y: snakeY

    }
    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);