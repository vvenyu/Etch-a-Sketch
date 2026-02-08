//I got this:
/*User enters a number
Generate a column of the requested number
Generate rows for each column
appens the rows to the column
appens the column to the container*/

//I want this:
/* Start with a default 16x16 square */

//I need this:
/*Remove the table when the user enters another number*/

//DOM structure: 

/*
<container>
    <column>
        <rows></rows>
        <rows></rows>
        <rows></rows>
    </column>
</container>
*/

const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

function makeGrid(number) {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    for (let i = 0; i < number; i++) {
        const column = document.createElement('div');
        column.classList.add('col');
        
        for(let j = 0; j < number; j++) {
            const row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        };
        container.appendChild(column);
    };
};

makeGrid(16);

btn.addEventListener('click', () => {
    let userNumber = prompt('Size of the square');
    makeGrid(userNumber);
});
