const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const number = Math.floor(Math.random() * SQUARES_NUMBER);

for (let i = 0; i < SQUARES_NUMBER; i++) {
  let square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);

  if (i === number) {
    square.addEventListener("mouseover", () => surprise());
  }
}

function setColor(elem) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;

  elem.style.backgroundColor = rgb;
  elem.style.boxShadow = `0 0 2px ${rgb}, 0 0 10px ${rgb}`;
}

function removeColor(elem) {
  elem.style.backgroundColor = "#1d1d1d";
  elem.style.boxShadow = `0 0 2px #000`;
}

function surprise() {
  alert("Congratulation! You did it!!!");
}
