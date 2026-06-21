let player1 = "";
let player2 = "";

let currentPlayer = "X";
let gameOver = false;

let board = ["", "", "", "", "", "", "", "", ""];

const submitBtn = document.getElementById("submit");
const game = document.getElementById("game");
const message = document.querySelector(".message");

submitBtn.addEventListener("click", function () {

    player1 = document.getElementById("player-1").value;
    player2 = document.getElementById("player-2").value;

    if (!player1 || !player2) return;

    game.classList.remove("hidden");

    message.innerText = `${player1}, you're up`;
});

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {

    cell.addEventListener("click", function () {

        if (gameOver) return;

        if (cell.innerText !== "") return;

        cell.innerText = currentPlayer;

        let index = Number(cell.id) - 1;

        board[index] = currentPlayer;

        if (checkWinner()) {

            let winnerName =
                currentPlayer === "X"
                    ? player1
                    : player2;

            message.innerText =
                `${winnerName}, congratulations you won!`;

            gameOver = true;

            return;
        }

        currentPlayer =
            currentPlayer === "X"
                ? "O"
                : "X";

        message.innerText =
            currentPlayer === "X"
                ? `${player1}, you're up`
                : `${player2}, you're up`;
    });

});

function checkWinner() {

    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];

    for (let combo of wins) {

        let [a,b,c] = combo;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            return true;
        }
    }

    return false;
}