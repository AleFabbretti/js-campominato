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



//procedo con la creazione dei campi

const playBtn = document.querySelector(".set");

playBtn.addEventListener(`click`, function () {

    let points = 0;

    let bomb = [];

    //creo un ciclo per generare i 16 numeri della cpu
    let userOption = document.getElementById("difficulty").value;
        let cells;
        if (userOption === "easy") {
            cells = 100;
        } else if (userOption === "normal") {
            cells = 81;
        } else if (userOption === "hard") {
            cells = 49;
        }
    
    for ( let i = 1; i <= 16; i++) {
        let play = true;
        
        while (play) {
            let randomNum=parseInt(Math.random()*(cells-1)+1);
            if(bomb.includes(randomNum)){
                play = true;
            }else{
                bomb.push(randomNum);
                play = false;
            }   
        }
    }
console.log(bomb);
        let boardContainer = document.querySelector(".board");
        boardContainer.innerHTML = "";
        for ( let i = 1; i <= cells; i++) {
            let boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.addEventListener("click", function() {
                if( bomb.includes(i)){
                    this.classList.add("bomb");
                    alert(`hai perso! Il tuo punteggio è di ${points}`);
                    window.location.reload();
                }else{
                    this.classList.add("clicked");
                    points++;
                    if (points === cells - 16){
                        alert("Hai vinto!!!");
                        window.location.reload();
                    }
                }
                console.log(points);
            });
            boardContainer.append(boardCell);
            boardCell.classList.add(`board_number_${userOption}`);
        }
    })


