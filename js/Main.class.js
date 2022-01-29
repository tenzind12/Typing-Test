class Generator {
  constructor(story, time) {
    this.story = story;
    this.time = time;
    this.state = {
      currentWord: "",
      score: 0,
      timeElapsed: 0,
    };
  }

  //   generate random word ------------------------------------
  randomWord() {
    const splitted = this.story.split(" ");
    const randomWord = splitted[Math.floor(Math.random() * splitted.length - 1)];
    return randomWord.toLowerCase().trim();
  }

  // display random word in DOM ----------------------------------
  nextWord() {
    const textDisplay = document.querySelector("#text-display");
    const word = this.randomWord();
    this.state.currentWord = word;
    textDisplay.textContent = word;
    // console.log(word);
  }

  // create a span with userInput ----------------------------------
  createSpan(color, userInput) {
    const span = document.createElement("span");
    const style = `color : ${color}`;
    span.setAttribute("style", style);
    span.textContent = userInput;
    return span;
  }

  // form submission --------------------------------------------
  formHandler() {
    let span = "";
    // prettier-ignore
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      // check if correct
      const isCorrect = (input.value).toLowerCase() === this.state.currentWord;
      
      if (isCorrect) {
        span = this.createSpan("green", input.value);
        this.state.score++;
        } 
        else span = this.createSpan("red", input.value);
        
        // clear input and append child span
        input.value = "";
        document.querySelector("#main-content").appendChild(span);
        
        // show the next word
        this.nextWord();
      }.bind(this)
      );
  }

  // start timer clock --------------------------------------------
  startClock() {
    const timer = setInterval(() => {
      const wpmDisplay = document.querySelector("#wpm-display");
      this.state.timeElapsed++;
      this.renderStats();

      if (this.time == this.state.timeElapsed) {
        clearInterval(timer);
        alert("Game Over ! WPM : " + wpmDisplay.textContent);

        const scores = JSON.parse(localStorage.getItem("highscores")) || [];
        scores.push(wpmDisplay.textContent);
        // remove oldest score
        if (scores.length >= 10) scores.shift();
        localStorage.setItem("highscores", JSON.stringify(scores));

        window.location.reload();
      }
    }, 1000);
  }

  // render score/second/wpm on DOM each second
  renderStats() {
    const wpm = document.querySelector("#wpm-display");
    const score = document.querySelector("#score-display");
    const time = document.querySelector("#time-display");

    time.textContent = this.time - this.state.timeElapsed;
    score.textContent = this.state.score;
    wpm.textContent = (this.state.score / (this.state.timeElapsed / 60)).toFixed(2);
  }

  // button eventLIstener ----------------------#####----------------
  startButton() {
    const startBtn = document.querySelector(".startBtn");
    const buttons = document.querySelectorAll(".button");
    const stats = document.querySelector("#stats");
    const input = document.querySelector("#input");
    const img = document.querySelector("img");

    startBtn.addEventListener(
      "click",
      function () {
        buttons.forEach((btn) => (btn.className = "hide"));
        img.className = "hide";
        stats.className = "";
        input.className = "";
        input.focus();
        this.nextWord();
        this.formHandler();
        this.startClock();
        this.renderStats();
      }.bind(this)
    );
  }
}

const game = new Generator(story, 30);
game.startButton();
