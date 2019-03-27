let turn = "X";
let won = false;

// Gameboard and player objects

const Gameboard = (() => {
  const gameBoard = ["", "", "", "", "", "", "", "", ""];

  //Setting up the playground
  const start = function (n = 3) {
    for (let j = 0; j < n * n; j++)
      document.querySelector(`#i${j}`).innerHTML = Gameboard.gameBoard[j];
    Flow.endmenow();

  }
  return { gameBoard, start }
})();


//Checks if player can make a move, if so makes a move and alters turn to play. Checks for win and/or draw and 
//displays appropriate message

const Flow = (() => {

  const fn0 = () => {
    if (Gameboard.gameBoard[0] == "X" || Gameboard.gameBoard[0] == "O") {
      return false;
    }
    if (won == true) {
      return false;
    }


    if (turn == "X") {
      Gameboard.gameBoard[0] = "X";
      turn = "O";
    } else {
      Gameboard.gameBoard[0] = "O";
      turn = "X";
    }
    Gameboard.start();
  };

  const fn1 = () => {
    if (Gameboard.gameBoard[1] == "X" || Gameboard.gameBoard[1] == "O") {
      return false;
    }
    if (won == true) {
      return false;
    }
    if (turn == "X") {
      Gameboard.gameBoard[1] = "X";
      turn = "O";
    } else {
      Gameboard.gameBoard[1] = "O";
      turn = "X";
    }
    Gameboard.start();
  };

  const fn2 = () => {
    if (Gameboard.gameBoard[2] == "X" || Gameboard.gameBoard[2] == "O") {
      return false;
    }
    if (won == true) {
      return false;
    }
    if (turn == "X") {
      Gameboard.gameBoard[2] = "X";
      turn = "O";
    } else {
      Gameboard.gameBoard[2] = "O";
      turn = "X";
    }
    Gameboard.start();
  };

  const fn3 = () => {
    if (Gameboard.gameBoard[3] == "X" || Gameboard.gameBoard[3] == "O") {
      return false;
    }
    if (won == true) {
      return false;
    }
    if (turn == "X") {
      Gameboard.gameBoard[3] = "X";
      turn = "O";
    } else {
      Gameboard.gameBoard[3] = "O";
      turn = "X";
    }
    Gameboard.start();
  };

  const fn4 = () => {
    if (Gameboard.gameBoard[4] == "X" || Gameboard.gameBoard[4] == "O") {
      return false;
    }
    if (won == true) {
      return false;
    }
    if (turn == "X") {
      Gameboard.gameBoard[4] = "X";
      turn = "O";
    } else {
      Gameboard.gameBoard[4] = "O";
      turn = "X";
    }
    Gameboard.start();
  };

  const fn5 = () => {
    if (Gameboard.gameBoard[5] == "X" || Gameboard.gameBoard[5] == "O") {
      return false;
    }
    if (won == true) {
      return false;
    }
    if (turn == "X") {
      Gameboard.gameBoard[5] = "X";
      turn = "O";
    } else {
      Gameboard.gameBoard[5] = "O";
      turn = "X";
    }
    Gameboard.start();
  };

  const fn6 = () => {
    if (Gameboard.gameBoard[6] == "X" || Gameboard.gameBoard[6] == "O") {
      return false;
    }
    if (won == true) {
      return false;
    }
    if (turn == "X") {
      Gameboard.gameBoard[6] = "X";
      turn = "O";
    } else {
      Gameboard.gameBoard[6] = "O";
      turn = "X";
    }
    Gameboard.start();
  };

  const fn7 = () => {
    if (Gameboard.gameBoard[7] == "X" || Gameboard.gameBoard[7] == "O") {
      return false;
    }
    if (won == true) {
      return false;
    }
    if (turn == "X") {
      Gameboard.gameBoard[7] = "X";
      turn = "O";
    } else {
      Gameboard.gameBoard[7] = "O";
      turn = "X";
    }
    Gameboard.start();
  };

  const fn8 = () => {
    if (Gameboard.gameBoard[8] == "X" || Gameboard.gameBoard[8] == "O") {
      return false;
    }
    if (won == true) {
      return false;
    }
    if (turn == "X") {
      Gameboard.gameBoard[8] = "X";
      turn = "O";
    } else {
      Gameboard.gameBoard[8] = "O";
      turn = "X";
    }
    Gameboard.start();
  };

  const endmenow = () => {

    //Check if X won
    if (
      (Gameboard.gameBoard[0] == "X" && Gameboard.gameBoard[1] == "X" && Gameboard.gameBoard[2] == "X") ||
      (Gameboard.gameBoard[3] == "X" && Gameboard.gameBoard[4] == "X" && Gameboard.gameBoard[5] == "X") ||
      (Gameboard.gameBoard[6] == "X" && Gameboard.gameBoard[7] == "X" && Gameboard.gameBoard[8] == "X") ||
      (Gameboard.gameBoard[0] == "X" && Gameboard.gameBoard[4] == "X" && Gameboard.gameBoard[8] == "X") ||
      (Gameboard.gameBoard[2] == "X" && Gameboard.gameBoard[4] == "X" && Gameboard.gameBoard[6] == "X") ||
      (Gameboard.gameBoard[0] == "X" && Gameboard.gameBoard[3] == "X" && Gameboard.gameBoard[6] == "X") ||
      (Gameboard.gameBoard[1] == "X" && Gameboard.gameBoard[4] == "X" && Gameboard.gameBoard[7] == "X") ||
      (Gameboard.gameBoard[2] == "X" && Gameboard.gameBoard[5] == "X" && Gameboard.gameBoard[8] == "X")

    ) {
      document.querySelector("#mess").innerHTML = "We have a winner and it's X!";
      turn = "X";
      won = true;
    }
    //Check if O won
    else if (
      (Gameboard.gameBoard[0] == "O" && Gameboard.gameBoard[1] == "O" && Gameboard.gameBoard[2] == "O") ||
      (Gameboard.gameBoard[3] == "O" && Gameboard.gameBoard[4] == "O" && Gameboard.gameBoard[5] == "O") ||
      (Gameboard.gameBoard[6] == "O" && Gameboard.gameBoard[7] == "O" && Gameboard.gameBoard[8] == "O") ||
      (Gameboard.gameBoard[0] == "O" && Gameboard.gameBoard[4] == "O" && Gameboard.gameBoard[8] == "O") ||
      (Gameboard.gameBoard[2] == "O" && Gameboard.gameBoard[4] == "O" && Gameboard.gameBoard[6] == "O") ||
      (Gameboard.gameBoard[0] == "O" && Gameboard.gameBoard[3] == "O" && Gameboard.gameBoard[6] == "O") ||
      (Gameboard.gameBoard[1] == "O" && Gameboard.gameBoard[4] == "O" && Gameboard.gameBoard[7] == "O") ||
      (Gameboard.gameBoard[2] == "O" && Gameboard.gameBoard[5] == "O" && Gameboard.gameBoard[8] == "O")

    ) {
      document.querySelector("#mess").innerHTML = "And just like that, O wins!";
      turn = "X";
      won = true;
    }


    //Check for draw


    else if (
      (Gameboard.gameBoard[0] == "X" || Gameboard.gameBoard[0] == "O") &&
      (Gameboard.gameBoard[1] == "X" || Gameboard.gameBoard[1] == "O") &&
      (Gameboard.gameBoard[2] == "X" || Gameboard.gameBoard[2] == "O") &&
      (Gameboard.gameBoard[3] == "X" || Gameboard.gameBoard[3] == "O") &&
      (Gameboard.gameBoard[4] == "X" || Gameboard.gameBoard[4] == "O") &&
      (Gameboard.gameBoard[5] == "X" || Gameboard.gameBoard[5] == "O") &&
      (Gameboard.gameBoard[6] == "X" || Gameboard.gameBoard[6] == "O") &&
      (Gameboard.gameBoard[7] == "X" || Gameboard.gameBoard[7] == "O") &&
      (Gameboard.gameBoard[8] == "X" || Gameboard.gameBoard[8] == "O")
    ) {
      document.querySelector("#mess").innerHTML = "To close to call, it's a tie!";
      turn = "X";
      won = true;
    }
  }


  return { fn0, fn1, fn2, fn3, fn4, fn5, fn6, fn7, fn8, endmenow }

})();

document.getElementById("i0").addEventListener("click", Flow.fn0);
document.getElementById("i1").addEventListener("click", Flow.fn1);
document.getElementById("i2").addEventListener("click", Flow.fn2);
document.getElementById("i3").addEventListener("click", Flow.fn3);
document.getElementById("i4").addEventListener("click", Flow.fn4);
document.getElementById("i5").addEventListener("click", Flow.fn5);
document.getElementById("i6").addEventListener("click", Flow.fn6);
document.getElementById("i7").addEventListener("click", Flow.fn7);
document.getElementById("i8").addEventListener("click", Flow.fn8);



function resetButton() {
  Gameboard.gameBoard[0] = ""
  Gameboard.gameBoard[1] = ""
  Gameboard.gameBoard[2] = ""
  Gameboard.gameBoard[3] = ""
  Gameboard.gameBoard[4] = ""
  Gameboard.gameBoard[5] = ""
  Gameboard.gameBoard[6] = ""
  Gameboard.gameBoard[7] = ""
  Gameboard.gameBoard[8] = ""
  document.querySelector("#mess").innerHTML = "";
  won = false;
  Gameboard.start();
}

