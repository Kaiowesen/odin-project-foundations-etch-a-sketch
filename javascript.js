let board = document.querySelector('.pad')
board.style.gridTemplateColumns = 'repeat(16, 1fr)'
board.style.gridTemplateRows = 'repeat(16, 1fr)'

for (var i=0; i < 256; i++) {
let div = document.createElement('div');
div.className = "grid-element"
div.style.backgroundColor = 'beige  '
board.appendChild(div)
}


