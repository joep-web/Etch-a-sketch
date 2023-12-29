const gridCountText = document.querySelector("#grid-count");
const gridRange = document.querySelector("input[type='range']");
const contGrid = document.querySelector(".grid");
const clearAllColor = document.querySelector("#clear");
const colorPicker = document.querySelector("#color");


const getGridSize = () => {
  const gridSizeText = document.querySelector("#grid-count").innerText;
  const gridSize = Number(gridSizeText.split("x")[0]);
  return gridSize;
};


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
    newDivs.classList.add("each-div", "default");
    contGrid.append(newDivs);
  }
};

gridRange.addEventListener("input", (e) => {
  gridCountText.innerText = `${e.target.value}x${e.target.value}`;
  getGridSize();
  gridReset();
  gridSetUp(getGridSize());
});

const backgroundToggles = (e) => {
  e.target.classList.toggle("default");
  e.target.classList.toggle("black");
}

contGrid.addEventListener("click", (e) => {
  backgroundToggles(e);
});

clearAllColor.addEventListener("click", () => {
  contGrid.querySelectorAll("div").forEach((div) => {
    div.classList.replace("black", "default");
  });
});

 
onload = () => {
  gridSetUp(getGridSize());
}