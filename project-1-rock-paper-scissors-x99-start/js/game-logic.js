// All code should be written in this file.

// Global variables for player moves
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (player === 'Player One'){
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    }
    else if (player === 'Player Two'){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

const getRoundWinner = (round) => {
    let p1 = { move: '', value: 0 };
    let p2 = { move: '', value: 0 };
    switch (round){
        case 1:
            p1 = { move: playerOneMoveOneType, value: playerOneMoveOneValue };
            p2 = { move: playerTwoMoveOneType, value: playerTwoMoveOneValue };
            break;
        case 2:
            p1 = { move: playerOneMoveTwoType, value: playerOneMoveTwoValue };
            p2 = { move: playerTwoMoveTwoType, value: playerTwoMoveTwoValue };
            break;
        case 3:
            p1 = { move: playerOneMoveThreeType, value: playerOneMoveThreeValue };
            p2 = { move: playerTwoMoveThreeType, value: playerTwoMoveThreeValue };
            break;
    }

    if (p1.move === p2.move){
        if (p1.value > p2.value){
            return 'Player One';
        }
        else if (p2.value > p1.value){
            return 'Player Two';
        }
        return 'Tie';
    }
    
    // Handle different move types (rock beats scissors, scissors beats paper, paper beats rock)
    if ((p1.move === 'rock' && p2.move === 'scissors') ||
        (p1.move === 'scissors' && p2.move === 'paper') ||
        (p1.move === 'paper' && p2.move === 'rock')) {
        return 'Player One';
    }
    else if ((p2.move === 'rock' && p1.move === 'scissors') ||
             (p2.move === 'scissors' && p1.move === 'paper') ||
             (p2.move === 'paper' && p1.move === 'rock')) {
        return 'Player Two';
    }
    
    return 'Tie';
}

const getGameWinner = () => {
    let p1Wins = 0;
    let p2Wins = 0;
    let roundWinner;

    // Find out who has won what rounds
    for (let i = 1; i < 4; i ++){
        roundWinner = getRoundWinner(i);
        if (roundWinner === 'Player One'){
            p1Wins++;
        }
        else if (roundWinner === 'Player Two'){
            p2Wins++;
        }
    }

    // Declare winner
    if (p1Wins > p2Wins){
        return 'Player One';
    }
    if (p2Wins > p1Wins){
        return 'Player Two';
    }
    return 'Tie';
}