const container = document.querySelector("div");

for(let i=1; i<=256; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.append(grid);

        grid.addEventListener('mouseover', event => grid.style.background = "blue");
    }



