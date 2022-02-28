var getUserChoice = function .toLowerCase(userInput){
    if (userInput = `rock`){
        return userInput
    }   else if (userInput = `paper`) {
        return userInput
    }   else if (userInput = `scissors`) {
        return userInput
    }   else {
        console.log(`error`)
    }
}

var getComputerChoice = function () {
    Math.floor(Math.random * 2)
    if (getComputerChoice = 0) {
        return `rock`
    } else if (getComputerChoice = 1) {
        return `paper`
    } else if (getComputerChoice = 2) {
        return `scissors`
    }
}

var determineWinner = function (userChoice, computerChoice) {
    if (userChoice = computerChoice) {
        console.log(`The game is a tie`)
    }
}
if (userChoice === `rock` && computerChoice === `paper`) {
    console.log(`The Computer Won`)
} else {
    console.log("The Player Won")
}
if (userChoice === `scissors` && computerChoice === `rock`) {
    console.log(`The Computer Won`)
} else {
    console.log("The Player Won")
}
if (userChoice === `paper` && computerChoice === `scissors`) {
    console.log(`The Computer Won`)
} else {
    console.log("The Player Won")
}

var playGame = (userChoice = ${ getUserChoice })
console.log(playGame)
var computerChoice = ${ getComputerChoice }
console.log(computerChoice)
