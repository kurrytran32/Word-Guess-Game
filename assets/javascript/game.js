
let game = {
    wins: 0,
    loss: 0,
    guessLft: 15,
    wrdBank : ["gear", "seed", "north", "haunt", "mother", "shy", "ball", "television"],
    wrdLengthArr: [],
    realWord: [],
    guessArr: [],
    ansR: [],
    wordGenerator: function () {
        rndWord = this.wrdBank[Math.floor(Math.random() * this.wrdBank.length)];
        console.log(rndWord);
        this.ansR.push(rndWord);
        return rndWord;
    },


    wordScore: function () {
        for (let i = 0; i < this.ansR[0].length; i++) {
            this.wrdLengthArr.push('_');
        }
        console.log(this.wrdLengthArr);
    },

    resetThing: function () {
        this.guessLft = 15;
        this.guessArr.splice(0, this.guessArr.length);
        this.realWord.splice(0, this.realWord.length);
        this.wrdLengthArr.splice(0, this.wrdLengthArr.length);
        this.ansR.splice(0, this.ansR.length);
        this.wordGenerator();
        this.wordScore();
    }
};
window.onload = function () {
    game.wordGenerator();
    game.wordScore();
    gameStats();
}

document.onkeyup = function () {
    let userKey = event.key;

    if (game.guessArr.indexOf(userKey) <= -1 && game.realWord.indexOf(userKey) <= -1 && game.ansR.indexOf(userKey)) {
            
        if (game.ansR[0].indexOf(userKey) > -1) {
            game.realWord.push(userKey);
            game.wrdLengthArr[game.ansR[0].indexOf(userKey)] = userKey;
            console.log(game.wrdLengthArr);
            for (let i = 0; i < game.ansR[0].length; i++) {
                if (game.ansR[0][i] === userKey) {
                    game.wrdLengthArr[game.ansR[0].indexOf(userKey, i)] = userKey;
                }
            }
            if (game.guessArr.indexOf(userKey) > -1);

        }
        if (game.ansR[0].indexOf(userKey) === -1) {
            game.guessLft--;
            game.guessArr.push(userKey);

        }
        if (game.wrdLengthArr.join('') == game.ansR[0]) {
            game.wins++;
            alert("You solved it!");
            game.resetThing();
        }
        if (game.guessLft === 0) {
            game.loss++;
            alert("Better Luck Next Time...");
            game.resetThing();
        }
    }
    gameStats();
}

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