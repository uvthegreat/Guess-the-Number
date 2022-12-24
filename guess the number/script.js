'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameOver = false;
document.querySelector('.check').addEventListener('click', function () {
  if (!gameOver) {
    const guess = Number(document.querySelector('.input').value);

    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number!';
    }

    //when the guess is correct
    else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🥳Correct Answer!';
      document.querySelector('.ques').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.ques').style.width = '230px';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }

    // when the guess is too high
    else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '⬆️ Too High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '👎👎You lost the game';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
        gameOver = true;
      }
    }

    // when the guess is too low
    else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '⬇️ Too low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '👎👎You lost the game';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
        gameOver = true;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.ques').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.ques').style.width = '115px';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.input').value = null;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
