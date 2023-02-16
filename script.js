const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}




function createGrid(rows) {
    var canvas = document.querySelector('.canvas');
    for (let i=0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let x=1; x <=rows; x++) {
            let cell = document.createElement('div');
            cell.addEventListener('mousedown', changeColor);
            cell.addEventListener('mouseover', changeColor);
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
    
}

function changeColor(e) {
    if (e.type === 'mouseover' && !'mousedown') {return}
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
    }
}


window.onload = createGrid(DEFAULT_SIZE);