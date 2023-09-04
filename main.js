const container = document.querySelector(".container");
const size = document.querySelector("#size");
const resizeButton = document.querySelector("#resize");
const rainbowButton = document.querySelector("#rainbow")
const greyScaleButton = document.querySelector("#grey-scale")

createAndPaint(16);
colorTheSquares();


// make a loop to create a grid with x number of divs 
function createAndPaint(sizeOfSquares) {
  for (let i = 0; i < sizeOfSquares * sizeOfSquares; i++) {
    const square = document.createElement("div");
    square.style.flexBasis = `calc(100% / ${sizeOfSquares})`;
    square.style.boxSizing = "border-box";
    square.style.border = "1px solid red"
    //  square.classList.add("grid");
    container.appendChild(square);
  littleDivs = document.querySelectorAll(".container>div");
  }
}


function colorTheSquarez(functionColor) {
 
  littleDivs.forEach((div) =>{
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = functionColor();
        
      });
  }) 
  }

  
// paint each square with the black color 
function colorTheSquares() {
littleDivs.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    div.classList.add("grid-color");
    
  });
});
}


// show number besides range bar
size.addEventListener("input", () => {
  let val = size.value;
  document.getElementById("output").innerText = val;
});

// clear and create a new grid with given number from range bar
resizeButton.addEventListener("click", () => {
    container.replaceChildren();
  createAndPaint(size.value);
  colorTheSquares();
});

 
let nextIndex = 0;
function rainbowColored () {
 let rainbowColors = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"]
 if ( nextIndex >= rainbowColors.length ) {   // make sure it doesn't get higher than the length.
        nextIndex = 0;
    }
    nextIndex++;
    return rainbowColors[nextIndex-1];

}


rainbowButton.addEventListener("click", () => {
  container.replaceChildren();
createAndPaint(size.value);
colorTheSquarez(rainbowColored);
});

let blackIndex = 0
function scaleBlack () {
  let blackColors = ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.8)","rgba(0, 0, 0, 1)"]
  if ( blackIndex >= blackColors.length ) {   // make sure it doesn't get higher than the length.
         blackIndex = 0;
     }
     blackIndex++;
     return blackColors[blackIndex-1];
 
}


greyScaleButton.addEventListener("click",()  => {
  container.replaceChildren();
  createAndPaint(size.value);
  colorTheSquarez(scaleBlack);

})

