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

// guessArr.toString();
//array for showing the right word

console.log(compChc);


//creating a function to make underscores based on compChc length
let wrdLength = function () {
    
    for (let i = 0; i < compChc.length; i++) {
        wrdLengthArr.push('_');
    }
    return wrdLengthArr;
};
console.log(wrdLength());

//building functions

//word generating function





//getting user input through event
document.onkeyup = function (event) {
    let userKey = event.key;
    let realWord = [];
    let guessArr = [];
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
            if (compChc[i] === userKey) {
                wrdLengthArr[compChc.indexOf(userKey, i)] = userKey;
                console.log(wrdLengthArr);
            }

        }
        //add win condition of if you fill out the word in here because it relates to guessing the correct letter, using .join will bring the string characters in the array together to do a check 
        if (wrdLengthArr.join('') == compChc) {
            // increment wins
            wins++;
            //alerting that they solved the word
            alert("You solved it!");
            guessLft = 15;
            guessArr.splice(0, guessArr.length);
            realWord.splice(0, realWord.length);
            wrdLengthArr.splice(0, wrdLengthArr.length);

        }
        //if userKey is already in realWord then do nothing
        if (realWord.indexOf(userKey) > -1);
    }





    if (compChc.indexOf(userKey) === -1) {
        //decrememnt guesses later
        guessLft--;
        //push guesses into guessArr
        guessArr.push(userKey);
        console.log(guessArr);

        //if userKey is already in guessArr then do nothing
        if (guessArr.indexOf(userKey) > -1);

    }




    //adding the if statement for when they run out of guesses and lose a round
    if (guessLft === 0) {
        loss++;
        alert("Better luck next time...");
        guessLft = 15;
        guessArr.splice(0, guessArr.length);
        realWord.splice(0, realWord.length);
        wrdLengthArr.splice(0, wrdLengthArr.length);
    }

    let html =
        "<p>" + wrdLengthArr + "</p>" +
        "<p>Letters Guessed: " + guessArr + "</p>" +
        "<p>Right Letters: " + realWord + "</p>" +
        "<p>Guesses Left: " + guessLft + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + loss + "</p>";

    document.querySelector("#game").innerHTML = html;

};





//Coding out conditions

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