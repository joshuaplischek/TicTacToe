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
            
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    content.appendChild(table);
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