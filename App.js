let Score1 = 0;
let Score2 = 0;

const refreshButton = document.querySelector("spam");
const Player1 = document.getElementById("LeftScore");
const Player2 = document.getElementById("RightScore");

refreshButton.addEventListener('click', () => start());

function start() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomDiceImage2);

    //If Player 1 Wins
    if(randomNumber1 > randomNumber2) {
        Score1++;
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins ✋.";
        Player1.innerHTML = Score1;
        Player2.innerHTML = Score2;
    }
    //If Player 2 Wins
    else if(randomNumber1 < randomNumber2) {
        Score2++;
        document.querySelector("h1").innerHTML = "🚩 Player 2 Wins 🤚.";
        Player1.innerHTML = Score1;
        Player2.innerHTML = Score2;
    }
    else {
        document.querySelector("h1").innerHTML = "Draw! 🏳️"
    }
}
