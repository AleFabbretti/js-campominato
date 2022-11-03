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

const btnGenerator = document.querySelector(".set");

btnGenerator.addEventListener(`click`, function () {
    let level = document.getElementById("difficulty").value;
    const boardContainer = document.querySelector(".board");

    createCells(level);
    boardContainer.innerHTML = "";
    for (let i = 1; )
})

