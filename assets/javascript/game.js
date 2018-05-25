//global variables 
let wins = 0;
let loss = 0;
let guessLft = 15;
//word bank array
let wrdBank = ["gear", "seed", "north", "haunt", "mother", "shy"];
//choosing random word from wrdBank put into onkeyup function
//compChc becomes another array
let rndWord = Math.floor(Math.random() * wrdBank.length);
let compChc = wrdBank[rndWord];
compChc.toString();
// needed to show length of word to user in blanks by showing array length, underScores push into this for correct guesses
let wrdLengthArr = [];
//array to show player input for incorrect guess
let guessArr = [];
// guessArr.toString();
//array for showing the right word
let realWord = [];
console.log(compChc);


//creating a function to make underscores based on compChc length
let wrdLength = function () {
    for (let i = 0; i < compChc.length; i++) {
        wrdLengthArr.push('_');
    }
    return wrdLengthArr;
};
console.log(wrdLength());

//getting user input through event
document.onkeyup = function (event) {
    let userKey = event.key;

    console.log(compChc.indexOf(userKey));

    //comparing userpressed key to compChc which is an array, checking to see if userKey is in a position within compChc by asking if userKey has a value higher than -1, meaning it has a position in the array (0,1,2,3)
    if (compChc.indexOf(userKey) > -1) {
        //testing function
        console.log(true);
        //push correct key to realWord array
        realWord.push(userKey);
        console.log(realWord);


        //replacing the underscores with right letter
        wrdLengthArr[compChc.indexOf(userKey)] = userKey;
        console.log(wrdLengthArr);

        for (let i = 0; i < compChc.length; i++) {
            if (compChc[i] !== 1) {
                wrdLengthArr[compChc.indexOf(userKey, i)] = userKey;
                console.log(wrdLengthArr);
            }

            //add win condition of if you fill out the word in here because it relates to guessing the correct letter, using .join will bring the string characters in the array together to do a check 
            if (guessArr.join('') == compChc) {
                // increment wins
                wins++;
                //alerting that they solved the word
                alert("You solved it!");
            }

        }
    }
    if (compChc.indexOf(userKey) === -1) {
        //decrememnt guesses later
        guessLft--;
        //push guesses into guessArr
        guessArr.push(userKey);

        //adding the if statement for when they run out of guesses and lose a round
        if (guessLft === 0) {
            loss++;
            alert("Better luck next time...")
        }
    }


};
    //pushes user input to show in the guessArr spot

    //put code to not register a previous keystroke




//Coding out conditions

//checking if userKey is within compChc
//for loop for guessing the word
// for( i=0; i < compChc.length; i++) {
//     //checking input to word compChc by cycling each character of the index of compChc
    // if(userKey === str.charAt[i]) {
    //     //show letter 
    //     userKey.push(wrdLengthArr)
        //you don't have to decrement guesses since this is for correct guess


//     } else {
//         guessLft--;
//         guessArr.push(userKey);
//         //put in code so same key cannot be entered again
//     }
// }

// //what to do if you run out of guesses
// //should be outside scope of function so it runs when you run out of guesses
// if(guessLft === 0){
//     loss++;
//     //resets guesses and clears out displayed input
//     guessLft = 15;
//     guessArr.splice(0, guessArr.length);
//     //chooses another random word for game
//     //not too sure adding and commenting out for now
//     // let compChc = wrdBank[Math.floor(Math.random() * wrdBank.length)];
// }



//remember to check for double letter situation