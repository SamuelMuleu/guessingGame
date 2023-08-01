const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttemps = 1;
let randomNumber = Math.round(Math.random() * 10);

btnTry.addEventListener("click", "keydown", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

document.addEventListener("keydown","keydown", keydownReset);

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    handleToggle();
    screen2.querySelector("h2").innerText = `você acertou em ${xAttemps} vezes`;
  }
  inputNumber.value = "";
  xAttemps++;
}

function handleResetClick() {
  handleToggle();
  xAttemps = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function handleToggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  randomNumber = Math.round(Math.random() * 10);
}

function keydownReset(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
