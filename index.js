var randomNumber = Math.floor(Math.random() * 3);
var count1;
var count2;

for (var i = 0; i < 3; i++) {

    document.querySelectorAll(".select-player1")[i].addEventListener("click", function () {
        var choice = this.innerHTML;
        console.log(choice);
        makeChoice(choice);

    });

}

for (var j = 0; j < 3; j++) {

    document.querySelectorAll(".select-player1")[j].addEventListener("click", function () {

        var computerMind = ["rock", "paper", "scissors"];
        var computerChoice = computerMind[randomNumber];

        makeComputerChoice(computerChoice);

    });
}



// Selecting Image


function makeChoice(choice) {

    switch (choice) {
        case "rock":
            document.querySelector(".images").setAttribute("src", "images/rock.jpeg");
            count1 = 1;
            break;

        case "paper":
            document.querySelector(".images").setAttribute("src", "images/paper.jpeg");
            count1 = 2;
            break;

        case "scissors":
            document.querySelector(".images").setAttribute("src", "images/scissors.jpeg");
            count1 = 3;
            break;

        default:
            console.log("Wrong Choice!");
            break;
    }


}


function makeComputerChoice(computerChoice) {

    switch (computerChoice) {
        case "rock":
            document.querySelector(".imagesComputer").setAttribute("src", "images/rock.jpeg");
            count2 = 1;
            compare();
            buttonHider();
            break;

        case "paper":
            document.querySelector(".imagesComputer").setAttribute("src", "images/paper.jpeg");
            count2 = 2;
            compare();
            buttonHider();
            break;

        case "scissors":
            document.querySelector(".imagesComputer").setAttribute("src", "images/scissors.jpeg");
            count2 = 3;
            compare();
            buttonHider();
            break;

        default:
            console.log("Wrong Choice!");
            break;
    }


}


function compare() {

    if (count1 == count2) {

        document.querySelector(".result").innerHTML = "Draw!";
    }

    else if (count1 == 1 && count2 == 2) {
        document.querySelector(".result").innerHTML = "Player 2 Wins🏆";
    }

    else if (count1 == 1 && count2 == 3) {
        document.querySelector(".result").innerHTML = "🏆Player 1 Wins";
    }

    else if (count1 == 2 && count2 == 1) {
        document.querySelector(".result").innerHTML = "🏆Player 1 Wins";
    }

    else if (count1 == 2 && count2 == 3) {
        document.querySelector(".result").innerHTML = "Player 2 Wins🏆";
    }

    else if (count1 == 3 && count2 == 1) {
        document.querySelector(".result").innerHTML = "Player 2 Wins🏆";
    }

    else if (count1 == 3 && count2 == 2) {
        document.querySelector(".result").innerHTML = "🏆Player 1 Wins";
    }
    else{
        document.querySelector(".result").innerHTML = "Invalid!";

    }
}

function buttonHider(){
        for(var k=0; k<3; k++){
        var hidButtons = document.querySelectorAll(".select-player1")[k];
        hidButtons.classList.add("hiding-buttons");
    }
}

document.querySelector(".reload").addEventListener("click", function () {
    window.location.reload();
});

