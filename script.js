const gridCountText = document.querySelector("#grid-count");
const gridRange = document.querySelector("input[type='range']");
const contGrid = document.querySelector(".grid");

const getGridSize = () => {
  const gridSizeText = document.querySelector("#grid-count").innerText;
  const gridSize = Number(gridSizeText.split("x")[0]);
  return gridSize;
};

gridRange.addEventListener("input", (e) => {
  gridCountText.innerText = `${e.target.value}x${e.target.value}`;
  getGridSize();
  gridReset();
  gridSetUp(getGridSize());
});

const gridReset = () => {
  const allExistingGrid = contGrid.querySelectorAll("div");
  allExistingGrid.forEach((div) => {
    div.remove();
  });
}

const gridSetUp  = (gridSize) => {
  contGrid.style.gridTemplateColumns = `repeat(${getGridSize()}, 1fr)`;
  contGrid.style.gridTemplateRows = `repeat(${getGridSize()}, 1fr)`;

  for(let i = 0; i < gridSize * gridSize; i++) {
    const newDivs = document.createElement("div");
    newDivs.classList.add("each-div");
    contGrid.append(newDivs);
  }
};