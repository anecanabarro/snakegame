let canvas = document.getElementById("snake"); /*puxa o canvas*/
let context = canvas.getContext("2d"); 
let box = 32; /*pixels*/

function criarBG() {
    context.fillStyle = "violet"; /*cor do canvas*/
    context.fillRect(0, 0, 16 * box, 16 * box); /*tamanho do canvas*/
}

criarBG();