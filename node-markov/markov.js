/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    const chains = {};
    this.words.map((word, i) => {
      if (chains[word]) {
        chains[word].push(
          this.words[i + 1] != undefined ? this.words[i + 1] : null
        );
      } else {
        chains[word] = [
          this.words[i + 1] != undefined ? this.words[i + 1] : null,
        ];
      }
    });
    // console.log(chains);
    this.makeText(chains);
  }

  makeText(chains, numWords = 100) {
    const keys = Object.keys(chains);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    // console.log(randomKey);
    let string = randomKey;
    let key = chains[randomKey];
    let val = key[Math.floor(Math.random() * key.length)];
    let wordCount = 1;
    while (val != null && wordCount < numWords) {
      string = string + " " + val;
      key = chains[val];
      val = key[Math.floor(Math.random() * key.length)];
      wordCount++;
    }
    console.log(string);
    return string;
  }
}

// let mm = new MarkovMachine("the cat in the hat is in the hat");
// mm.makeChains();
module.exports = {
  MarkovMachine: MarkovMachine,
};
