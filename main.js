const container = document.querySelector(".container");
const size = document.querySelector("#size");
const blackButton = document.querySelector("#black");
const resizeButton = document.querySelector("#resize");
const rainbowButton = document.querySelector("#rainbow");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");
const colorPicker = document.getElementById("colorPicker");
let littleDivs;
let event1 = false;
let event2 = false;
let printColor = "black";
let btns = document.querySelectorAll("button");

// make a loop to create a grid with x number of divs
function createAndPaint(numberOfSquares) {
  for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
    let square = document.createElement("div");
    square.style.flexBasis = `calc(100% / ${numberOfSquares})`;
    square.style.boxSizing = "border-box";
    square.style.border = "0.5px solid rgb(0,0,0,0.1)";
    //  square.classList.add("grid");
    square.classList.add("square-element");
    container.appendChild(square);
    littleDivs = document.querySelectorAll(".square-element");
  }
}

createAndPaint(16); // creates the first grid on page load

// pen working on page load
container.addEventListener("mouseover", (event) => {
  checkprint(event, printColor);
});

//PEN ACTIVE
function checkprint(element, color) {
  if (element.buttons === 1 && element.target.classList == "square-element") {
    element.target.style.backgroundColor = color;
  }
}

// RANGE BAR
// show number besides range bar
size.addEventListener("input", () => {
  let val = size.value;
  document.getElementById("output").innerText = val;
  container.replaceChildren();
  createAndPaint(size.value);
});


// RAINBOW COLOR FUNCTION & BUTTON WORKING
let nextIndex = 0;
function rainbowColored() {
  let rainbowColors = [
    "#9400D3",
    "#4B0082",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#FF0000",
  ];
  if (nextIndex >= rainbowColors.length) {
    // make sure it doesn't get higher than the length.
    nextIndex = 0;
  }
  nextIndex++;
  return rainbowColors[nextIndex - 1];
}
// rainbow button
rainbowButton.addEventListener("click", () => {
  container.addEventListener("mouseover", (event) => {
    checkprint(event, rainbowColored());
  });
});

// BLACK PEN COLOR
blackButton.addEventListener("click", () => {
  container.addEventListener("mouseover", (event) => {
    checkprint(event, "rgba(0,0,0,1)");
  
  });
});

// ERASER
eraserButton.addEventListener("click", () => {
  container.addEventListener("mouseover", (event) => {
    checkprint(event, "rgb(234, 220, 255)");
  });
});

// CLEAR BUTTON
clearButton.addEventListener("click", () => {
  container.replaceChildren();
  createAndPaint(size.value);
});

// COLOR PICKER
colorPicker.addEventListener("input", (e) => {
  container.addEventListener("mouseover", (event) => {
    
    checkprint(event, e.target.value);
  
  });
});

// BUTTON ACTIVE

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}