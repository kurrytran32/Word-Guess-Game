let game = {
    wins : 0,
    loss : 0,
    guessLft : 15,
    wrdBank : ["gear", "seed", "north", "haunt", "mother", "shy"],
    wrdLengthArr : [],
    realWord : [],
    guessArr : [],
    
    wordGenerator: function() {
        wrdBank = ["gear", "seed", "north", "haunt", "mother", "shy"],
        rndWord = Math.floor(Math.random() * wrdBank.length);
        compChc= wrdBank[rndWord],
        wrdLengthArr= [];
        console.log(compChc);
        for (let i = 0; i < compChc.length; i++) {
            this.wrdLengthArr.push('_');
        }
        return wrdLengthArr;
        return;
    },

    ltrPush: function() {
        realWord.push(userKey);
        this.wrdLengthArr[this.compChc.indexOf(userKey)] = userKey;
        if (this.realWord.indexOf(userKey) > -1);
        
    },

    ltrPush2: function() {
        //decrememnt guesses
        guessLft--;
        this.guessArr.push(userKey);
        if (this.guessArr.indexOf(userKey) > -1);
    },

    addWin: function() {
        // increment wins
        wins++;
        //alerting that they solved the word
        alert("You solved it!");
        guessLft = 15;
        this.guessArr.splice(0, guessArr.length);
        this.wrdLengthArr.splice(0, this.wrdLengthArr.length);
    },

    addLoss: function() {
        loss++;
        alert("Better luck next time...");
        guessLft = 15;
        this.guessArr.splice(0, this.guessArr.length);
        this.wrdLengthArr.splice(0, this.wrdLengthArr.length);
        this.realWord.splice(0, this.realWord.length);
        
    },
    

    
};



document.onkeyup = handleKeyUp;

function gameStats() {
    let html =
        "<p>" + game.wrdLengthArr + "</p>" +
        "<p>Letters Guessed: " + game.guessArr + "</p>" +
        "<p>Right Letters: " + game.realWord + "</p>" +
        "<p>Guesses Left: " + game.guessLft + "</p>" +
        "<p>Wins: " + game.wins + "</p>" +
        "<p>Losses: " + game.loss + "</p>";

    document.querySelector("#game").innerHTML = html;
};

function handleKeyUp(event) {
    let userKey = event.key;
    gameStats();
   
    if (game.compChc.indexOf(userKey) > -1) {
        game.ltrPush(userKey);
    };
    if (game.wrdLengthArr.join('') == game.compChc) {
        game.addWin(userKey);
    };
    if (game.compChc.indexOf(userKey) === -1) {
        game.ltrPush2(userKey);
    };
    if (guessLft === 0) {
        game.addLoss(userKey);
    }
    ;

};
game.wordGenerator();
gameStats();