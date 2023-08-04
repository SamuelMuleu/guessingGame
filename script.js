const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttemps = 1;
let randomNumber = Math.round(Math.random() * 10);

btnTry.addEventListener("keydown", handleTryClick);


btnReset.addEventListener("click", handleResetClick)




function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    handleToggle();
    screen2.querySelector("h2").innerText = `você acertou em ${xAttemps} vezes`;
  }
  if (inputNumber.value < 0 || inputNumber.value > 10) {
    alert("Apenas Números de 0 a 10!");
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
}

function keydownReset(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
