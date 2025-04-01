function init() {
    render();
}

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('td');
            cell.style.width = '50px';
            cell.style.height = '50px';
            cell.style.border = '1px solid black';
            cell.style.textAlign = 'center';
            cell.style.fontSize = '24px';
            
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


