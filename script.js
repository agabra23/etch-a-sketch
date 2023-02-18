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
    activateButton(newMode);
    currentMode = newMode;
    canvas.classList.remove('markerMode');
    canvas.classList.remove('eraserMode');
    switch(currentMode) {
        case 'marker':
            canvas.classList.add('markerMode');
            break;
        case 'eraser':
            canvas.classList.add('eraserMode');
            break;
    }
}

let mousedown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const canvas = document.querySelector('#canvas');
const colorPicker = document.querySelector('#colorPicker');
const clearBtn = document.querySelector('#clearBtn');
const colorBtn = document.querySelector('#markerBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const sizeSlider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');
const year = document.querySelector('#year');
let currentYear = new Date().getFullYear();
const icon = document.getElementById('github');

colorPicker.onchange = (e) => setCurrentColor(e.target.value);
clearBtn.onclick = () => resetGrid();
colorBtn.onclick = () => setCurrentMode('marker');
eraserBtn.onclick = () => setCurrentMode('eraser');
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
icon.onmouseover = () => icon.classList.add('fa-bounce');
icon.onmouseout = () => icon.classList.remove('fa-bounce');
year.innerHTML = currentYear;

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

function changeSize(value) {
    setCurrentSize(value);
    resetGrid();
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
}

function resetGrid() {
    clear();
    createGrid(currentSize);
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'marker') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#ededed'
    }
}

function activateButton(newMode) {
    if (currentMode === 'marker') {
        colorBtn.classList.remove('active');
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    }

    if (newMode === 'marker') {
        colorBtn.classList.add('active');
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active');
    }
}

function clear() {
    canvas.innerHTML = '';
}

function init() {
    window.onload = createGrid(DEFAULT_SIZE);
    setCurrentMode(DEFAULT_MODE);
    colorPicker.value = DEFAULT_COLOR;
}

init();