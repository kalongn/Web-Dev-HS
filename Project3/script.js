/*swap the cell of input c1 and c2*/
function swap(c1, c2) {
    var temp = document.getElementById(c1).className;
    document.getElementById(c1).className = document.getElementById(c2).className;
    document.getElementById(c2).className = temp;
    //console.log(document.getElementById(c1).className +  " with " + document.getElementById(c2).className);
}

/*onload function*/
function startWeb() {
    numberOfMoves = document.getElementById("nom");
    correct = "";
    nom = 0;
    display();
}

/*start the game*/
function startGame() {
    //console.log(numberOfMoves);
    shuffle(1000);
    nom = 0;
    display();
}

/*search for tile with input tile Number*/
function searchForTile(tNum) {
    for (let r = 1; r < 5; r++) {
        for (let c = 1; c < 5; c++) {
            if (document.getElementById("c" + r + c).className == tNum) {
                correct = "c" + r + c;
                return;
            }
        }
    }
}

/*sorting the table to it's original form*/
function resetGame() {
    var temp = nom;
    var tileNum = 0;
    for (let r = 1; r < 5; r++) {
        for (let c = 1; c < 5; c++) {
            var currentTile = "c" + r + c;
            tileNum++;
            if (document.getElementById(currentTile).className != ("t" + tileNum)) {
                searchForTile("t" + tileNum);
                swap(currentTile, correct);
                correct = "";
            }
        }
    }
    nom = temp;
    display();
}

/*shuffle the board
input: how many time you want to shuffle
*/
function shuffle(amount) {
    var temp = nom;
    for (let i = 0; i < amount; i++) {
        randomR = Math.floor(Math.random() * 4 + 1);
        randomC = Math.floor(Math.random() * 4 + 1);
        clickt(randomR, randomC);
    }
    nom = temp;
    display();
}

/* Check button to see if you completed the slider puzzle and reveal the secret shuffle*/
function check() {
    var x = document.getElementById("hidden");
    var victory = true;
    var tileNum = 0;
    for (let r = 1; r < 5; r++) {
        for (let c = 1; c < 5; c++) {
            var currentTile = "c" + r + c;
            tileNum++;
            if (document.getElementById(currentTile).className != ("t" + tileNum)) {
                victory = false;
                x.style.display = "none";
                return;
            }
        }
    }
    x.style.display = "block";
}

/*click tile base on the row and column */
function clickt(r, c) {
    //console.log(""+r+c)
    var cell = document.getElementById("c" + r + c);
    var tile = cell.className;
    //console.log(tile);

    /*make sure you are not clicking the white box*/
    if (tile != "t16") {
        /*check if the white box is on your right*/
        if (c < c + 1 && c < 4) {
            if (document.getElementById("c" + r + (c + 1)).className == "t16") {
                //console.log("swapped c" + r + c + " with c" + r + (c+1));
                swap("c" + r + c, "c" + r + (c + 1));
                nom++;
                display();
                return;
            }
        }

        /*check if the white box is on your left*/
        if (c > c - 1 && c > 1) {
            if (document.getElementById("c" + r + (c - 1)).className == "t16") {
                //console.log("swapped c" + r + c + " with c" + r + (c-1));
                swap("c" + r + c, "c" + r + (c - 1));
                nom++;
                display();
                return;
            }
        }

        /*check if the white box is on your top*/
        if (r > r - 1 && r > 1) {
            if (document.getElementById("c" + (r - 1) + c).className == "t16") {
                //console.log("swapped c" + r + c + " with c" + (r-1) + c);
                swap("c" + r + c, "c" + (r - 1) + c);
                nom++;
                display();
                return;
            }
        }

        /*check if the white box is on your bottom*/
        if (r < r + 1 && r < 4) {
            if (document.getElementById("c" + (r + 1) + c).className == "t16") {
                //console.log("swapped c" + r + c + " with c" + (r+1) + c);
                swap("c" + r + c, "c" + (r + 1) + c);
                nom++;
                display();
                return;
            }
        }
    }
}

/*display the number of moves*/
function display() {
    numberOfMoves.innerHTML = nom;
}