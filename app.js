const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      do {this.prevGuesses.push(this.getGuess());
      
        this.render();
  
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
        //this.prevGuesses[this.prevGuesses.length] returns the length of the array, but when you subtract 1 ie. this.prevGuesses[this.prevGuesses.length - 1] it will bring you to the last nuber of the array (if there are 4 numbers in the array the index of the last one would be three. length of the array - 1 = index of the last number)
        console.log(this.secretNum)
      },
  
  getGuess: function(){
      let guess;
      //do{}while() looks like this
    do {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
      ));

    } 
    while(
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
    )

    return guess
  },

  render: function(){
    let message;

  if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
    message = ((`Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "guesses" : "guess"
        }`))}

    else {
    message = (`Your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? 'high' : 'low' }\n Previous ${this.prevGuesses.length > 1 ? "guesses" : "guess"
  } : ${this.prevGuesses.join(", ")}`)
    }

    alert(message)
  }
}

game.play()