let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); 
let box = 32; /*pixels*/
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

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

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x; /*array posição 0 de x*/
    let snakeY = snake[0].y; /*array posição 0 de y*/

    if(direction == "right") snakeX += box; /*condicional, se a posição de snakeX for right, acrescenta uma caixa*/
    if(direction == "left") snakeX -= box; /*condicional, pra esquerda, diminui uma caixa*/
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

    snake.pop(); /*retira último elemento do array*/

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
    
}

let jogo = setInterval(iniciarJogo, 100); /*dá continuidade ao jogo*/