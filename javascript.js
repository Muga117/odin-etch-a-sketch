const container = document.querySelector("div");

function generateGrid(noOfSquares = 16){
    for(let i=1; i<=(noOfSquares ** 2); i++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.width = (100/noOfSquares) + '%';
            grid.style.height = (100/noOfSquares) + '%';
            container.append(grid);
            grid.addEventListener('mouseover', event => grid.style.background = "blue");
    }
}

const btn = document.querySelector("button");

btn.addEventListener('click', event => {
    let squares = prompt("How many squares per side?");
    squares = parseInt(squares);
    if(squares>=100){
        alert("Max is 100.");
    } else {
        let grids = document.querySelectorAll(".grid");
        grids.forEach(grid => grid.remove());
        generateGrid(squares);
    }
});


generateGrid();


