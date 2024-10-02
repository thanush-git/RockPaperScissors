const getComputerChoice = () => {
    let a = Math.random();
    if (a > 0 && a <= 0.33) {
        return "Rock";
    }
    else if (a > 0.33 && a <= 0.66) {
        return "Paper";
    }
    else return "Scissors";
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


const getHumanChoice = () => {
    let a = prompt("Please enter your Choice");
    a = capitalizeFirstLetter(a);
    return a;
}

const playGame = () => {
    console.log("Welcome to the game")
    let computerScore = 0;
    let humanScore = 0;
    const maxRounds = 5;
    const playRound = (a, b) => {

        if (a === b) {
            console.log("Draw");
        }

        else if ((a === "Rock" && b === "Scissors") || (a === "Paper" && b === "Rock") || (a === "Scissors" && b === "Paper")) {
            console.log("Computer Wins");
            computerScore = computerScore + 1;
        }

        else {
            console.log("Player Wins");
            humanScore += 1;
        }
    }

    for (let numRound = 0; numRound < maxRounds; numRound++) {
        let a = getComputerChoice();
        let b = getHumanChoice();
        playRound(a, b);

        if (computerScore === 3 || humanScore === 3){
            break;
        }
    }

    if (computerScore>humanScore){
        console.log("Computer Wins the game")
    }
    else if(computerScore<humanScore){
        console.log("Player Wins the game");
    }
    else{
        console.log("Draw game, play again");
    }

}

playGame();