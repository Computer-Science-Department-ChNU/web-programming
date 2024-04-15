'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const SQUARES_NUMBER = 600;
    const colors = ['#F7C59F', '#2A324B', '#767b91', '#c7ccdb', '#e1e5ee'];

    for (let i = 0; i < SQUARES_NUMBER; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.append(square)

        square.addEventListener("mouseover", () => {
            setColor(square)
        })

        square.addEventListener('mouseleave', () => {
            removeColor(square)
        })
    }

    function setColor(el) {
        const color = getRandomColor();
        el.style.backgroundColor = color;
        el.style.boxShadow = `0 0 2px ${color}, 0 0 12px ${color}`
    }

    function removeColor(el) {
        el.style.backgroundColor = '#1d1d1d';
        el.style.boxShadow = '0 0 2px #000'
    }

    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length)

        return colors[index]
    }
})


