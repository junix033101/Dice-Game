

function randomRoll() {
    let playerOneRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Player 1 rolls: " + playerOneRoll);
    let playerTwoRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Player 2 rolls: " + playerTwoRoll);

    diceImg(playerOneRoll, playerTwoRoll);

    if (playerOneRoll > playerTwoRoll && playerOneRoll != playerTwoRoll) {
        let heading = document.querySelector("h1").innerHTML = "Player One Wins!";
        console.log(heading);
    } else if (playerOneRoll == playerTwoRoll) {
        let heading = document.querySelector("h1").innerHTML = "It's a tie!";
        console.log(heading);
    } else {
        let heading = document.querySelector("h1").innerHTML = "Player Two Wins!";
        console.log(heading);
    }
}

function diceImg(one, two){
    let diceImgOne = document.querySelector(".img1").setAttribute("src", "images/dice"+one+ ".png");
    let diceImgTwo = document.querySelector(".img2").setAttribute("src", "images/dice"+two+ ".png");
}

randomRoll();