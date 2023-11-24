export default {
    wordset: [],
    special: [],
    guesses: [],
    currentWord: 0,
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
    init(words) {
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
    handleKeyup(e) {
        if (this.won || this.lost) {
            return;
        }

        if (!this.wordset) return;

        if (e.key === "Enter") {
            return this.submitGuess();
        }
        if (e.key === "Backspace") {
            this.guesses[this.currentWord] = this.guesses[
                this.currentWord
            ].slice(0, this.guesses[this.currentWord].length - 1);
            return;
        }
        if (
            this.guesses[this.currentWord].length <
                this.wordset[this.currentWord + 1].word.length &&
            e.key.match(/^[A-z]$/)
        ) {
            this.guesses[this.currentWord] =
                this.guesses[this.currentWord] + e.key.toLowerCase();
        }
    },
};
