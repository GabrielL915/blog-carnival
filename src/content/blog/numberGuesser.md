---
title: Number Guesser in JavaScript
author: Gabriel Luiz
pubDatetime: 2023-08-22T05:17:19Z
postSlug: Number-Guesser-in-JavaScript
featured: true
draft: false
tags:
  - JavaScript
  - Game
  - HTML
  - CSS
ogImage: ""
description: Learn how to create a number guessing game using JavaScript.
canonicalURL: https://example.org/my-article-was-already-posted-here
---

## Table of contents

## SetUp HTML

Let's start by creating the necessary HTML structure for our game. We'll use HTML syntax to easily define the elements. Open your preferred code editor and navigate to your project's source directory.

Create a new file called index.html and add the following code:

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <title>Number Guesser Game</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>

  <body>
    <div class="container">
      <h1>Number Guesser Game</h1>
      <div id="game">
        <form>
          <p>
            Escolha um numero entre <span class="min-num"></span> e
            <span class="max-num"></span>:
          </p>
          <input
            type="number"
            id="guess-input"
            placeholder="Escolha o seu numero..."
          />
          <button type="submit" id="guess-button">Advinhar</button>
          <p class="message"></p>
        </form>
      </div>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

## Implementing JavaScript Logic

Now, let's add the JavaScript logic to make our game functional. Create a new JavaScript file in the same directory

```js
const min = 1;
const max = 10;
let winningNum = Math.floor(Math.random() * (max - min + 1)) + min;
let guessesLeft = 3;

const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const message = document.querySelector(".message");
const form = document.querySelector("form");
const input = document.querySelector("#guess-input");
const button = document.querySelector("#guess-button");

minNum.textContent = min;
maxNum.textContent = max;

form.addEventListener("submit", event => {
  event.preventDefault();
  guessesLeft--;

  let guessInput = parseInt(input.value);
  if (isNaN(guessInput) || guessInput < min || guessInput > max) {
    displayMessage(`Escolha um numero entre ${min} e ${max}`, "red");
  } else if (guessInput === winningNum) {
    gameOver(
      true,
      `O numero ${guessInput} está correto, Voce GANHOU!!!`,
      "green"
    );
  } else if (guessesLeft === 0) {
    gameOver(false, `${guessesLeft} tentativas, GAME OVER!!`, "red");
  } else {
    displayMessage(
      `${guessInput} não é o numero sorteado: mais ${guessesLeft} tentativas`,
      "blue"
    );
  }
});

function displayMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function gameOver(isWon, msg, color) {
  button.disabled = true;
  result = document.createElement("h3");
  result.textContent = msg;
  result.style.color = color;
  game.appendChild(result);
  message.style.display = "none";

  const playAgain = document.createElement("button");
  playAgain.textContent = "Jogar Novamente";
  playAgain.className = "play-again";
  game.appendChild(playAgain);
  game.addEventListener("click", playAgainClick);
}
function playAgainClick(event) {
  if (event.target.classList.contains("play-again")) {
    resetGame();
  }
}

function resetGame() {
  guessesLeft = 3;
  button.disabled = false;
  result.remove();
  document.querySelector(".play-again").remove();
  message.style.display = "block";
  displayMessage("", "");
  input.value = "";
}
```

## Styling the Game

Finally, let's add some CSS to make our game look better. Create a new file called style.css in the same directory and add the following code:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-size: 24px;
  margin-bottom: 10px;
}

input {
  font-size: 24px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
}

button {
  font-size: 24px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0d8bf5;
}

.message {
  font-size: 15px;
  margin-top: 20px;
}
```

## Repository

You can find the complete code for this tutorial on GitHub: [Number Guesser](https://github.com/GabrielL915/NumberGuesser)
