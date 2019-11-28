document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
        //Zera todas as casas
        square.innerHTML = `<div class=""></div>`;
    });
})

function handleClick(event){
    let square = event.target;
    let position = square.id;
    
    if (handleMove(position)){

        setTimeout(() => {
            alert("O vencedor foi o jogador com : " + ((playerTime == 0) ? "Escudo" : "Espada"));            
        }, 20);
    };
    updateSquare(square);
}

function updateSquare(square){
    square.innerHTML = `<div class=${board[square.id]}></div>`;
}

function limpa(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != ""){
            square.innerHTML = `<div class=""></div>`;
        }
    });

    gameOver = false;
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
}
