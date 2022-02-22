let cells = [];

function generateChessBoard(size = 3) {
    if (size <= 100 && size >= 3) {
        let dimension = 40;
        let chessboard = document.getElementsByClassName('chessboard')[0];
        chessboard.innerHTML = '';
        for (let i = 0; i < size; i++) {
            let lineContainer = document.createElement('div');
            for (let j = 0; j < size; j++) {
                let chessBox = document.createElement('div');
                chessBox.className = 'chess-box';
                chessBox.style.width = dimension / size + 'vw';
                chessBox.style.height = dimension / size + 'vw';
                lineContainer.style.height = dimension / size + 'vw';
                if ((i + j) % 2 === 0) {
                    chessBox.style.backgroundColor = 'white';
                } else {
                    chessBox.style.backgroundColor = 'black';
                }
                cells.push(chessBox);
                lineContainer.appendChild(chessBox);
            }
            chessboard.appendChild(lineContainer);
            chessboard.appendChild(document.createElement('br'));
        }
        //requestAnimationFrame(() => animate(0));
    } else if (size > 100 || size < 3) {
        alert("Non puoi generare una scacchiera con dimensione " + size + "x" + size + "\nLa dimensione deve essere compresa tra 3 e 100\nNe verrà creata una per la sua dimensione massima accettata (100x100)");
        document.getElementById('amount').value = 100;
        generateChessBoard(100);
    }
}

function animate(time) {
    let index = time % cells.length;

    const column = index % Math.sqrt(cells.length);
    const row = Math.floor(index / Math.sqrt(cells.length));
    const board = Math.floor(time / cells.length);

    cells[index].style.backgroundColor = (column + row + board)  % 2 === 0 ? "black" : "white" ;
    
    requestAnimationFrame(() => animate(time + 1));
}

function animate2(time) {
    if (time % 30 === 0) {
        for (const cell of cells) {
            cell.style.backgroundColor = cell.style.backgroundColor === 'black' ? 'white' : 'black';
        }
    }

    requestAnimationFrame(() => animate2(time + 1));
}