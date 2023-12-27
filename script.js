const gridCountText = document.querySelector("#grid-count");
const gridRange = document.querySelector("input[type='range']");

gridRange.addEventListener("input", (e) => {
  gridCountText.innerText = `${e.target.value}x${e.target.value}`;
});


const contGrid = document.querySelector(".grid");
const gridSize = document.querySelector("#grid-count").innerText.match(/[0-9]+/);

  
contGrid.style.gridTemplateColumns = `repeat(${gridSize[0]}, 1fr)`;

console.log(gridSize)