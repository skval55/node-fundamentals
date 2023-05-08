// One request
let url = "http://numbersapi.com/5/?json";
let firstPromise = axios.get(url);
console.log(firstPromise);
// Promise {<pending>}

firstPromise.then((data) => console.log(data)).catch((err) => console.log(err));

const nums = [12, 24, 55, 6, 4];

for (num of nums) {
  let numUrl = `http://numbersapi.com/${num}/?json`;
  let numPromise = axios.get(numUrl);
  numPromise
    .then((data) => $(".num-facts").append(`<div>${data.data["text"]}</div>`))
    .catch((err) => console.log(err));
}

const favNum = 5;
for (i = 0; i < 4; i++) {
  let numUrl = `http://numbersapi.com/${favNum}/?json`;
  let numPromise = axios.get(numUrl);
  numPromise
    .then((data) => $(".num-facts").append(`<div>${data.data["text"]}</div>`))
    .catch((err) => console.log(err));
}
