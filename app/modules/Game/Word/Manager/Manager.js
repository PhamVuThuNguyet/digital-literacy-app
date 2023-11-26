import words from "./words.json";

export default {
    wordset: [],
    special: [],
    guesses: [],
    currentWord: 0,
    longest: 6,
    get won() {
        if (!this.wordset || !this.wordset[0]) return false;
        console.log(this.special);
        return (
            this.special.join("").trim().toLowerCase() ===
            this.wordset[0].special.trim().toLowerCase()
        );
    },
    get lost() {
        return;
    },
    get allGuesses() {
        return this.guesses.slice(0, this.currentWord).join("").split("");
    },
    init() {
        this.wordset = [];
        while (!this.wordset || this.wordset.length <= 0) {
            this.wordset = words[Math.round(Math.random() * words.length)];
            if (this.wordset) {
                this.guesses.replace(
                    new Array(this.wordset.length - 1).fill("")
                );
                this.special.replace(
                    new Array(this.wordset[0].special.length).fill("")
                );
                this.longest = this.wordset.reduce((a, b)=> {
                    return a.letter > b.letter ? a : b; 
                }).letter
            }
        }
        this.setCurrentWord(0);
    },
    isGuessed(i) {
        return this.guesses[i] === this.wordset[i + 1].word;
    },
    submitGuess() {
        if (this.won || this.lost) {
            return;
        }
        if (!this.wordset) return;

        if (
            this.guesses[this.currentWord] ===
            this.wordset[this.currentWord + 1].word
        ) {
            this.special[this.currentWord] = Array.from(
                this.wordset[this.currentWord + 1].word
            )[this.wordset[this.currentWord + 1].letter];
            let currentWord_ = this.currentWord;
            currentWord_ += 1;
            this.setCurrentWord(currentWord_);
        }
    },
    setCurrentWord(w) {
        if (w <= 0 || w >= this.wordset.length - 1) {
            this.currentWord = 0;
        } else {
            this.currentWord = w;
        }
        console.log("set " + this.currentWord);
    },
    handleText(text) {
        if (this.won || this.lost) {
            return;
        }
        if (!this.wordset) return;
        this.guesses[this.currentWord] = text.replace(/\s/g,'').toLowerCase();
    },
};
