//! Variables
let min = 1,
  max = 100,
  winnerNum = randomWinnerNum(min, max);
kalanHak = 5;
//! Passing values of HTML elements to variable

const minNum = document.querySelector(".min"),
  maxNum = document.querySelector(".max"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  game = document.querySelector(".game"),
  message = document.querySelector(".message");

//! Min & Max value
minNum.textContent = min;
maxNum.textContent = max;

//! Again
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "try-again") {
    window.location.reload();
  }
});

//! Start guess

guessBtn.addEventListener("click", function () {
  const guessNumber = guessInput.value;
  if (guessNumber === "" || guessNumber < min || guessNumber > max) {
    mesajYazdir("Error ! Enter a number between 1 and 100 ", "red");
  } else if (guessNumber == winnerNum) {
    gameOver(false, `Congratulations!! `);
  } else {
    kalanHak -= 1;
    if (kalanHak == 0) {
      gameOver(true, `Your right is over.. Winner number is ${winnerNum}`);
    } else {
      mesajYazdir(`You have ${kalanHak} left.. `, "red");
    }
  }
});

//! Game Over Function
function gameOver(control, msj) {
  let color;

  control == true ? (color = "red") : (color = "green");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  mesajYazdir(msj, color);

  //! Button active & inactive
  guessBtn.textContent = "Try Again";
  guessBtn.className = "try-again";
}

//

//! Message function

function mesajYazdir(msj, color) {
  //? Color change
  message.style.color = color;
  //? Message parameter
  message.textContent = msj;
}

//! Random winner guessNumber

function randomWinnerNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
