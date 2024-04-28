const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function changeColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

changeColorButton.addEventListener("click", changeColor);

const colorTitle = document.querySelector("p");

colorTitle.classList.add("color-title");
