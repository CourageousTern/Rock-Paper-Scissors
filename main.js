var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();

    if (userInput === `rock` || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('"You must enter "rock", "paper" or "scissors"');
    }
};

var getComputerChoice = function () {
    var randomNumber = Math.floor(Math.random * 3)

    if (randomNumber === 0) {
        return `rock`
    } else if (randomNumber === 1) {
        return `paper`
    } else if (randomNumber === 2) {
        return `scissors`
    }
};

var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'The User Won';
    }
    if (userChoice = computerChoice) {
        return (`The game is a tie`)
    }
    
    if (userChoice === `rock`) {
        if (computerChoice === `paper`) {
            return `The Computer Won`
        }
        if (computerChoice === `scissors`) {
            return `The User Won`
        }
    }

    if (userChoice === `paper`) {
        if (computerChoice === `scissors`) {
            return `The Computer Won`
        }
        if (computerChoice === `rock`) {
            return `The User Won`
        }
    }
    if (userChoice === `scissors`) {
        if (computerChoice === `rock`) {
            return `The Computer Won`
        }
        if (computerChoice === 'paper') {
            return `The User Won`
        }
    }
};

var playGame = function () {
    var userChoice = getUserChoice('scissors');
    var computerChoice = getComputerChoice();

    console.log('User Choice', userChoice);
    console.log(`Computer Choice`, computerChoice);

    var winnerText = determineWinner(userChoice, computerChoice);

    console.log(winnerText);
};

var userInput = prompt();

playGame(userInput);
