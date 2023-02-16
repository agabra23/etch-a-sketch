function createGrid(rows) {
    var canvas = document.querySelector('.canvas');
    for (let i=0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let x=1; x <=rows; x++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
    
}

createGrid(16);