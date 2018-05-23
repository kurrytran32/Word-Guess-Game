let wins = 0;
let loss = 0;
//array to show player input
let guessArr = [];
//turns player input to string to compare
guessArr.toString();
let guessLft = 15;
//word bank array
let wrdBank = ["gear", "seed", "north", "haunt", "mother", "shy"];
//choosing random word from wrdBank put into onkeyup function
//compChc becomes another array
let compChc = wrdBank[Math.floor(Math.random() * wrdBank.length)];
// needed to show length of word to user in blanks by showing array length
let wrdLength = compChc.length;


//getting user input through event
document.onkeyup = function (event) {
    let userKey = event.key;
    //pushes user input to show in the guessArr spot
guessArr.push(userKey);

}

//Coding out conditions

//checking if userKey is within compChc
//for loop for guessing the word
for( i=0; i < compChc.length; i++) {
    //checking input to word compChc by cycling each character of the index of compChc
    if(userKey === str.charAt(i)) {
        //show letter 
        
        //you don't have to decrement guesses since this is for correct guess

    } else {
        guessLft--;
        guessArr.push(userKey);
    }
}
//what to do if you run out of guesses
//should be outside scope of function so it runs when you run out of guesses
if(guessLft === 0){
    loss++;
    //resets guesses and clears out displayed input
    guessLft = 15;
    guessArr.splice(0, guessArr.length);
    //chooses another random word for game
    //not too sure adding and commenting out for now
    // let compChc = wrdBank[Math.floor(Math.random() * wrdBank.length)];
}