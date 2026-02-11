const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

function makeGrid(number) {
    let opacity = 0;
    //Removes last grid
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
            
            row.addEventListener('mouseover', () => {

                if (opacity < 1) {
                    opacity += 0.1
                };
                    const r = randomRGB();
                    const g = randomRGB();
                    const b = randomRGB();
                    const randomColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                row.style.backgroundColor = randomColor
            })
        };
        container.appendChild(column);
    };
};

//Makes initial grid
makeGrid(16);

// Return a random number between 0 and 255
function randomRGB() {
    const rgb = Math.floor(Math.random() * 256);
    return rgb;
}

btn.addEventListener('click', () => {
    let userNumber = prompt('Size of the square');
    if (userNumber < 1 || userNumber > 100) {
        console.log('no')
    } else makeGrid(userNumber);
});

