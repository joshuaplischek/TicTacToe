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
                cell.textContent = 'O';
            } else if (fields[index] === 'cross') {
                cell.textContent = 'X';
            }
            
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    content.appendChild(table);
}
