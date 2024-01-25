let board = document.querySelector('.pad')
let gridSize = 16;

function resetGridSize() {
    document.querySelectorAll(".grid-element").forEach(x => x.remove());

    let newGridSizeValue = document.getElementById("box-size").value

    setGridSize(newGridSizeValue);
}


function setGridSize(newGridSize = 16) {

    board.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`
    board.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`

    for (var i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.className = "grid-element";
        div.style.backgroundColor = 'beige';

        div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black"
        });

        board.appendChild(div)
    }
}
setGridSize();


