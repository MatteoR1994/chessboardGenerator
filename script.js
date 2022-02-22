// function generateChessBoard(size) {//debugger
// let contLine= 1;
//     let chessboard = document.getElementsByClassName('chessboard')[0]

//     for (let i = 0; i < size * size; i++) {
//         let chessBox = document.createElement('div');
//         chessBox.className = 'chess-box';
//         if (i % 2 === 0) {

//             chessBox.style.backgroundColor = 'white';
//         } else {
//             chessBox.style.backgroundColor = 'black';

//         }
//         if (size*(contLine) === i+1) {
//              chessboard.appendChild(chessBox);
//              chessboard.appendChild(document.createElement('br'));
//              contLine++;
//         } else{
//             chessboard.appendChild(chessBox);

//         }


//     }
// }

function generateChessBoard(size = 3) {
    let maxValue;
    if (size <= 100 && size >= 3) {
        let dimension = 40;
        let chessboard = document.getElementsByClassName('chessboard')[0]
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
                lineContainer.appendChild(chessBox);
            }
            chessboard.appendChild(lineContainer);
            chessboard.appendChild(document.createElement('br'));
        }
    } else if (size > 100 || size < 3) {
        alert("Non puoi generare una scacchiera con dimensione " + size + "x" + size + "\nLa dimensione deve essere compresa tra 3 e 100\nNe verrà creata una per la sua dimensione massima accettata (100x100)");
        document.getElementById('amount').value = 100;
        generateChessBoard(100);
    }
}