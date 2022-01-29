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
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

      this.prevGuesses.push(this.getGuess());
  
  return this.prevGuess;
      
  },
  
  getGuess: function(){

    let guess;

    do {
      guess = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`
      ));
    } while(
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
    )
return guess

  }

  
  
  
}







// while(getGuess !== game.play()){
//   alert(getGuess = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)))
// }

// if(getGuess === game.play()){
//   alert(
//     `Congrats! You guessed the number in`
//   )
// }

// if (getGuess.play() == secretNum) {
//   alert("Wow! I'm a Scorpio too!");








// if(getGuess === this.secretNum){
//   return 
// }

// console.log(game.play())

// if(i =)


// console.log()