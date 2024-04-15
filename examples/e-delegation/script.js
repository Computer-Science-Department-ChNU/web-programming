'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById('table');
    let selectedCell;

    table.addEventListener('click', (event) => {
        const cell = event.target.closest('.table-cell');

        if (!cell) return;

        highlightCell(cell);
    })

    function highlightCell(cell) {
        if (selectedCell) {
            selectedCell.classList.remove('is-highlighted')
        }

        selectedCell = cell;
        selectedCell.classList.add('is-highlighted')
    }
});