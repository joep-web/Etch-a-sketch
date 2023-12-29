const gridCountText = document.querySelector("#grid-count");
const gridRange = document.querySelector("input[type='range']");
const contGrid = document.querySelector(".grid");
const clearAllColor = document.querySelector("#clear");
const colorPicker = document.querySelector("#color");
let colorCondition = false;


//             Functions
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
    newDivs.style.backgroundColor = "white";
    newDivs.style.border = "1px solid #282B2B";
    contGrid.append(newDivs);
  }
};

gridRange.addEventListener("input", (e) => {
  gridCountText.innerText = `${e.target.value}x${e.target.value}`;
  getGridSize();
  gridReset();
  gridSetUp(getGridSize());
});

contGrid.addEventListener("click", (e) => {
  if(e.target.style.backgroundColor === "white"){
    if (colorCondition === false) {
      e.target.style.backgroundColor = "black";
    } else {
      //random picker
      let randomColor = Math.floor(Math.random()*360);
      e.target.style.backgroundColor = `hsl(${randomColor}, 47%, 67%)`;
    }
  } else {
    e.target.style.backgroundColor = "white";
  }
});

clearAllColor.addEventListener("click", () => {
  contGrid.querySelectorAll("div").forEach((div) => {
    div.style.backgroundColor = "white";
  });
});

colorPicker.addEventListener("click", (e) => {
  if(colorCondition === false) {
    colorCondition = true;
    e.target.style.background = "linear-gradient(45deg, hsl(120, 47%, 67%), hsl(240, 47%, 67%), hsl(45, 47%, 67%), hsl(300, 47%, 67%))";
    e.target.style.color = "white";
  } else {
    colorCondition = false;
    e.target.style.background = "#FFFDF9";
    e.target.style.color = "#392B0B";
  }
});
 
onload = () => {
  gridSetUp(getGridSize());
}