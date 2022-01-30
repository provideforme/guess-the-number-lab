// ## Features

// - Allow the player to continually be prompted to enter their guess at the secret number until they guess correctly.
// - If the player has an incorrect guess, display an alert message that informs the player:
//     - Whether their guess is too high or too low, and…
//     - A list of all the previously guessed numbers (without showing the square brackets of an array).
// - If the player has guessed the secret number:
//     - Display an alert message that congrats the player and informs them of how many guesses they took.
//     - End the gameplay.



const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  play: function(){
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      do {this.prevGuesses.push(this.getGuess());
      
      this.render();

    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
      
  },
  
  getGuess: function(){

    let guess;

    do {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
      ));

    } 
    while(
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
    )
    return guess;
  },

  render: function(){
    let message;

  if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
    message = (`Congrats! You guessed the number`)}

    else {
    message = (`Your guess is too`)
    }

    alert(message)
  }
  
  
  
}

game.play()






// if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
//   message = (`Congrats! You guessed the number in ${this.prevGuesses.length} ${
//     this.prevGuesses.length > 1 ? "guesses" : "guess"
//   }`)}

//   else {
//   message = (`Your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? 'high' : 'low' }\n Previous guesses: ${this.prevGuesses.join(", ")}`)
//   }
