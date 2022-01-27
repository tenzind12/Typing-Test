// // click on start button
// const startButton = document.querySelector("#button");
// const statsContent = document.querySelector("#stats");
// const input = document.querySelector("#input");
// const textDisplay = document.querySelector("#text-display");
// const form = document.querySelector("#form");
// const mainContent = document.querySelector("#main-content");
// const splitStory = story.split(" ");

// const getRandomWord = () => splitStory[Math.floor(Math.random() * splitStory.length - 1)];
// const nextWord = () => {
//   const word = getRandomWord();
//   state.currentWord = word;
//   textDisplay.textContent = word;
// };
// const state = {
//   currentWord: "",
// };

// function createWordSpan(color, content) {
//   const span = document.createElement("span");
//   const style = "background: " + color;
//   span.setAttribute("style", style);
//   span.textContent = content;
//   return span;
// }

// startButton.addEventListener("click", function (e) {
//   e.preventDefault();

//   // hide the button
//   startButton.className = "hide";

//   // show the stats
//   statsContent.classList = "";

//   // show the input field
//   input.className = "";
//   input.focus();

//   // show the word
//   nextWord();

//   // when user enter an input
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let userInput = input.value;

//     if (userInput === "") return;

//     const isCorrect = userInput === state.currentWord;
//     let span;
//     if (isCorrect) {
//       // if correct, add the word to the list with green background
//       span = createWordSpan("green", userInput);
//     } else {
//       // if incorrect, add the word to the list with red background
//       span = createWordSpan("red", userInput);
//     }
//     mainContent.appendChild(span);

//     // clear user input
//     input.value = "";
//     // show the next word
//     nextWord();
//   });
// });

// start the timer

// check if correct

// for every sec, calc the stats
// check if game has ended

// when game ended, alert player WPM
// refresh the page

class Generator {
  //   generate random word
  randomWord() {
    const splitted = this.story.split(" ");
    const randomWord = splitted[Math.floor(Math.random() * splitted.length - 1)];
    return randomWord;
  }

  // display random word in DOM
  nextWord() {
    const textDisplay = document.querySelector("#text-display");
    const word = this.randomWord();
    this.state.currentWord = word;
    textDisplay.textContent = word;
  }

  // button eventLIstener
  startButton() {
    const button = document.querySelector("#button");
    const stats = document.querySelector("#stats");
    button.addEventListener("click", function () {
      button.className = "hide";
      stats.className = "";
      this.nextWord();
    });
  }
}

const game = new Generator(story);
game.startButton();
