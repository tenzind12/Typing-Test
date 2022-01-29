class Highscore {
  // show Highscores on highscore page
  highscoreDisplay() {
    const ul = document.querySelector("ul");
    let scores = JSON.parse(localStorage.getItem("highscores"));
    scores.sort().reverse();

    for (let i = 0; i < scores.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${i + 1})  ${scores[i]}`;
      ul.appendChild(li);
    }
  }
}

const showScore = new Highscore();
showScore.highscoreDisplay();
