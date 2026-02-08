const container = document.querySelector('#container');

// Creates a 16 blocks column
for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.classList.add('col');
    
    //Creates 16 block for each column
    for (let j = 0; j < 16; j++) {
        const row = document.createElement('div');
        row.classList.add('row');
        column.appendChild(row);
    }
    container.appendChild(column);
}