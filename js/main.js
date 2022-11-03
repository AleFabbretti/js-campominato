// //seleziono il contenitore dei numeri
// const boardContainer = document.querySelector(".board");

// //creo un ciclo con for
// for(let i = 1; i <= 100; i++){
//     //creo un elemento div
//     const boardCell = document.createElement("div");
//     //inserisco contenuto nel mio div
//     boardCell.innerHTML = i;
//     //assegno una classe al mio div
//     boardCell.classList.add("board_number_hard");
//     //aggiungo evento click
//     boardCell.addEventListener("click", function() {
//         boardCell.classList.add("clicked");
//     } )
//     //inserisco il tutto nel mio file html
//     boardContainer.append(boardCell);

// }

"use strict"

//creo i primi 16 numeri

let points = 0;
let bomb = [];
let level = 100;

//creo un ciclo per generare i 16 numeri della cpu

for ( let i = 0; i <= 16; i++) {
    let play = true;
    
    while (play) {
        let randomNum=parseInt(Math.random()*(100-1)+1);
        if(bomb.includes(randomNum)){
            play = true;
        }else{
            bomb.push(randomNum);
            play = false;
        }   
    }
}
let game;

//procedo con la creazione del campo

let boardContainer = document.querySelector(".board");

for ( let i = 1; i <= 100; i++) {
    let boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    element.addEventListener('click', clicked);
}

