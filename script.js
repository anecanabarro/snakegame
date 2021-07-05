let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); 
let box = 32; /*pixels*/
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = { /*comida aparece em locais aleatórios ao atualizar page*/
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = "violet"; /*cor da caixa*/
    context.fillRect(0, 0, 16 * box, 16 * box); /*tamanho da caixa*/
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "yellow"; /*cor da cobrinha*/
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "blue"; /*cor da comida*/
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}


function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x; /*array posição 0 de x*/
    let snakeY = snake[0].y; /*array posição 0 de y*/

    if(direction == "right") snakeX += box; /*condicional, se a posição de snakeX for right, acrescenta uma caixa*/
    if(direction == "left") snakeX -= box; /*condicional, pra esquerda, diminui uma caixa*/
    if(direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){ /*ao ser comida, aparece em outro lugar*/
        snake.pop(); /*retira último elemento do array*/
        }
    else {food.x = Math.floor(Math.random() * 15 + 1) * box; /*ao comer comida, cobrinha aumenta*/
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }  

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100); /*dá continuidade ao jogo*/
