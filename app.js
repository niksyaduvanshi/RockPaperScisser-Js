let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return option[index];
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp Choice =", compChoice);
  if (userChoice === compChoice) {
    msg.innerText = "It's a tie!";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userscore++;
    msg.innerText = "You win!";
    userScore.innerText = `${userscore}`;
  } else {
    computerscore++;
    msg.innerText =  "Computer wins!";
    compScore.innerText = `${computerscore}`;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", () => {
  userscore = 0;
  computerscore = 0;
  userScore.innerText = `${userscore}`;
  compScore.innerText = `${computerscore}`;
  msg.innerText = "Game reset! Choose again.";
});
