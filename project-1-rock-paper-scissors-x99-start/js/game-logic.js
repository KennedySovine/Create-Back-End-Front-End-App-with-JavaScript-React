// All code should be written in this file.

function playerFactory(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    return {
        player: player,
        moveOne: {
            type: moveOneType,
            value: moveOneValue
        },
        moveTwo: {
            type: moveTwoType,
            value: moveTwoValue
        },
        moveThree: {
            type: moveThreeType,
            value: moveThreeValue
        }
    }
}

let playerOne;
let playerTwo;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (player === 'Player One'){
        playerOne = playerFactory(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
    }
    else if (player === 'Player Two'){
        playerTwo = playerFactory(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
    }
}

const getRoundWinner = (round) => {
    let p1 = { move: '', value: 0 };
    let p2 = { move: '', value: 0 };
    switch (round){
        case 1:
            p1 = { move: playerOne.moveOne.type, value: playerOne.moveOne.value };
            p2 = { move: playerTwo.moveOne.type, value: playerTwo.moveOne.value };
            break;
        case 2:
            p1 = { move: playerOne.moveTwo.type, value: playerOne.moveTwo.value };
            p2 = { move: playerTwo.moveTwo.type, value: playerTwo.moveTwo.value };
            break;
        case 3:
            p1 = { move: playerOne.moveThree.type, value: playerOne.moveThree.value };
            p2 = { move: playerTwo.moveThree.type, value: playerTwo.moveThree.value };
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