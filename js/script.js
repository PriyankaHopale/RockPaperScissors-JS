let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice"); // accessing all choices
const msg = document.querySelector("#msg"); // access msg

const userScorePara = document.querySelector("#user_score"); // access user score
const compScorePara = document.querySelector("#comp_score"); // access computer score
const drawScorePara = document.querySelector("#draw_score"); // access draw score

const newGame = document.querySelector("#new-game"); // access clear button

const drawGame = () => {
  //   console.log("Game was draw.");
  msg.innerText = "Game was draw. Play again";
  msg.style.backgroundColor = "#132a13";
  drawScore++;
  drawScorePara.innerText = drawScore;
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    // console.log("You win!");
    msg.innerText = `You win 🤩 Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.innerText = userScore;
  } else {
    compScore++;
    // console.log("You lose");
    msg.innerText = `You lose 😣 ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScorePara.innerText = compScore;
  }
};

//function to generate random computer choice
//math.random() generate random value and math.floor() remove decimal value

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = generateCompChoice();
  console.log("computer choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === paper) {
      // rock,scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

//function for getting user choice
choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});

resetGame = () => {
  userScore = 0;
  compScore = 0;
  drawScore = 0;
  userScorePara.innerText = "0";
  compScorePara.innerText = "0";
  drawScorePara.innerText = "0";
  msg.innerText = "play your move";
  msg.style.backgroundColor = "#132a13";
};

newGame.addEventListener("click", resetGame);
