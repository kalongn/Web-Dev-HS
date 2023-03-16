
//startup functions, setting up the game in general 
function startup() {
    NumOfTryOutput = document.getElementById("tries");
    NumOfFinal = document.getElementById("final");
    BigSmall = document.getElementById("BS");

    tries = 7;
    final = "";
    displayTries();
    displayNum();


    firstDigit = 0;
    secondDigit = 0;
    thirdDigit = 0;
    victory = false;
    computerFinal = 0;
}
//startGame start the game
function startGame() {
    startup();
    concatenateNum();
}
//generating each digit (computer)
function generateSingleDigits() {
    var Rn = Math.random();
    Rn *= 3;
    Rn = parseInt(Rn);
    Rn += 1;
    return Rn;
}
//concatenate each digit and adding it to computerFinal
function concatenateNum() {
    firstDigit = generateSingleDigits();
    secondDigit = generateSingleDigits();
    thirdDigit = generateSingleDigits();
    computerFinal = "" + firstDigit + secondDigit + thirdDigit;
    console.log("Answer: " + computerFinal);
}
//checking whether the number the user guesses is correct or not, and if they failed or not
function check() {
    if (tries > 0) {
        if (final.length == 3) {
            var numF = parseInt(final);
            var numCF = parseInt(computerFinal);
            if (numF == numCF) {
                victory = true;
                console.log("victory: " + victory);
                BS = "You Entered the Vault, Victory!! Press start a new game for another go";
                displayBS();
            }
            if (numF > numCF) {
                tries -= 1;
                final = "";
                BS = "Too Big";
                console.log("try smaller number,tries remain: " + tries)
                displayTries();
                displayBS();
                if (tries == 0) {
                    console.log("lost");
                    BS = "You died lol, Press start a new game for another go";
                    displayBS();
                }
            }
            if (numF < numCF) {
                tries -= 1;
                final = "";
                BS = "Too Small";
                console.log("try bigger number, tries remain: " + tries)
                displayTries();
                displayBS();
                if (tries == 0) {
                    console.log("lost");
                    BS = "You died lol, Press start a new game for another go";
                    displayBS();
                }
            }
        }
    }
    else {
        console.log("lost");
        BS = "You died lol, Press start a new game for another go";
        displayBS();
    }
}
//add 1 if 1 is clicked
function oneclicked() {
    final += "1";
    check();
    console.log(final);
    displayNum();
}
//add 2 if 2 is clicked
function twoclicked() {
    final += "2";
    check();
    console.log(final);
    displayNum();
}
//add 3 if 3 is clicked
function threeclicked() {
    final += "3";
    check();
    console.log(final);
    displayNum();
}
//clear guesses
function clean() {
    final = "";
    BS = "";
    tries = 7;
    displayNum();
    displayBS();
    displayTries();
    console.log("cleared");
}

//display the amount of tries left
function displayTries() {
    NumOfTryOutput.innerHTML = tries;
}
//display the number that you are guessing.
function displayNum() {
    NumOfFinal.innerHTML = final;
}
//display if the number is too big or smaller or you win or you died
function displayBS() {
    BigSmall.innerHTML = BS;
}