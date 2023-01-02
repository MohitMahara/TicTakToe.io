let lose = new Audio('sounds/gameOver.mp3.wav');
let win = new Audio('sounds/win.mp3.wav');
let move = new Audio('sounds/Move.mp3.wav');
let turn = 'X';
let isGameOver = false;

// Function to CHANGE THE TURN 

const changeTurn = () => {
  return turn === 'X' ? '0' : 'X';
}

// Function to check for win

const checkWin = () => {

  let boxtext = document.getElementsByClassName('box-text');
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135]
  ]

  let smalldeviceWin = [
    [0, 1, 2, 5, 10, 0],
    [3, 4, 5, 5, 30, 0],
    [6, 7, 8, 5, 50, 0],
    [0, 3, 6, -15, 25, 90],
    [1, 4, 7, 5, 25, 90],
    [2, 5, 8, 25, 25, 90],
    [0, 4, 8, 5, 30, 45],
    [2, 4, 6, 5, 30, 135]

  ]


  var mq = window.matchMedia("(max-width: 655px)");
  if (mq.matches) {
  
    smalldeviceWin.forEach(e => {
      if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
        document.querySelector('.info-text').innerText = '';
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
        win.play();
        document.querySelector(".line").style.width = "50vw"
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        isGameOver = true;

      }

    });

  } else {
    wins.forEach(e => {
      if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
        document.querySelector('.info-text').innerText = '';
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
        win.play();

        document.querySelector(".line").style.width = "20vw";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        isGameOver = true;
      }

    });

  }

}



// Game logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {

  let boxText = element.querySelector(".box-text");
  element.addEventListener('click', () => {

    if (boxText.innerHTML === '') {
      boxText.innerHTML = turn;
      turn = changeTurn();
      move.play();
      checkWin();
      if (!isGameOver) {
        document.querySelector(".info").innerHTML = " " + turn;
      }

    }
  });

});


document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});