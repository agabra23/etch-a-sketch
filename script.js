const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'marker';
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

let mousedown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const canvas = document.querySelector('.canvas');
const clearBtn = document.querySelector('.clear');
const colorBtn = document.querySelector('.marker');
const eraserBtn = document.querySelector('.eraser');

clearBtn.onclick = () => clear();
colorBtn.onclick = () => setCurrentMode('marker');
eraserBtn.onclick = () => setCurrentMode('eraser');

function createGrid(rows) {
    for (let i=0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let x=1; x <=rows; x++) {
            let cell = document.createElement('div');
            cell.addEventListener('mouseover', changeColor);
            cell.addEventListener('mousedown', changeColor);
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
    
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'marker') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
    }
}

function clear() {
    let cells = canvas.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = '#fefefe';
    });
}


window.onload = createGrid(DEFAULT_SIZE);