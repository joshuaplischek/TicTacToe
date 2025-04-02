let currentPlayer = 'circle'; 

function init() {
    render();
}

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    
    let table = document.createElement('table');
    table.classList.add('tictactoe');

    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('td');
            cell.classList.add('cell');
            
            let index = i * 3 + j;
            if (fields[index] === 'circle') {
                cell.innerHTML = generateCircleSVG();
            } else if (fields[index] === 'cross') {
                cell.innerHTML = generateCrossSVG();
            }

            cell.onclick = function() {
                handleClick(index, cell);
            };
            
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    content.appendChild(table);
}

function handleClick(index, cell) {
    if (fields[index] === null) {
        fields[index] = currentPlayer; 
        if (currentPlayer === 'circle') {
            cell.innerHTML = generateCircleSVG();
            currentPlayer = 'cross';  
        } else {
            cell.innerHTML = generateCrossSVG();
            currentPlayer = 'circle';  
        }

        cell.onclick = null;

        if (checkWinner()) {
            drawWinningLine(checkWinner());
        }
    }
}

// Überprüft, ob es einen Gewinner gibt
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],  // obere Reihe
        [3, 4, 5],  // mittlere Reihe
        [6, 7, 8],  // untere Reihe
        [0, 3, 6],  // linke Spalte
        [1, 4, 7],  // mittlere Spalte
        [2, 5, 8],  // rechte Spalte
        [0, 4, 8],  // Diagonale von oben links nach unten rechts
        [2, 4, 6],  // Diagonale von oben rechts nach unten links
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            return combination;  // Gibt die Siegeskombination zurück
        }
    }

    return null;  // Kein Sieger
}

function drawWinningLine(winner) {
    const [a, b, c] = winner;
    const cells = document.querySelectorAll('td');

    let aCell = cells[a].getBoundingClientRect();
    let cCell = cells[c].getBoundingClientRect();

    let xStart = aCell.left + aCell.width / 2;
    let yStart = aCell.top + aCell.height / 2;
    let xEnd = cCell.left + cCell.width / 2;
    let yEnd = cCell.top + cCell.height / 2;

    let width = Math.sqrt(Math.pow(xEnd - xStart, 2) + Math.pow(yEnd - yStart, 2));
    let rotation = Math.atan2(yEnd - yStart, xEnd - xStart) * (180 / Math.PI);

    let xCenter = (xStart + xEnd) / 2;
    let yCenter = (yStart + yEnd) / 2;

    let line = document.createElement('div');
    line.classList.add('winning-line');
    line.style.width = width + "px";
    line.style.left = xCenter + "px";
    line.style.top = yCenter + "px";
    line.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

    document.body.appendChild(line);
}

function restart(){
    fields = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];

    render();
}

function generateCircleSVG() {
    return `
        <svg width="70" height="70" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#00BEEF" stroke-width="10" fill="none" stroke-dasharray="251.2" stroke-dashoffset="251.2">
                <animate attributeName="stroke-dashoffset" from="251.2" to="0" dur="0.3s" fill="freeze" />
            </circle>
        </svg>
    `;
}

function generateCrossSVG() {
    return `
        <svg width="70" height="70" viewBox="0 0 100 100">
            <line x1="20" y1="20" x2="80" y2="80" stroke="#FFC000" stroke-width="10" stroke-dasharray="84.85" stroke-dashoffset="84.85">
                <animate attributeName="stroke-dashoffset" from="84.85" to="0" dur="0.3s" fill="freeze" />
            </line>
            <line x1="80" y1="20" x2="20" y2="80" stroke="#FFC000" stroke-width="10" stroke-dasharray="84.85" stroke-dashoffset="84.85">
                <animate attributeName="stroke-dashoffset" from="84.85" to="0" dur="0.3s" fill="freeze" />
            </line>
        </svg>
    `;
}