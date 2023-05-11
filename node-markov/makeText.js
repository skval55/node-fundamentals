/** Command-line tool to generate Markov text. */
const { MarkovMachine } = require("./markov");
const fs = require("fs");
const process = require("process");
const axios = require("axios");

if (process.argv[2] == "url") {
  getUrlData(process.argv[3]);
}
if (process.argv[2] == "file") {
  path = process.argv[3];
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      let markov = new MarkovMachine(data);
    }
  });
}
async function getUrlData(url) {
  try {
    let resp = await axios.get(url);
    let markov = new MarkovMachine(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}
