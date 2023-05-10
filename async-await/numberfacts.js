async function luckyNum() {
  try {
    let url = "http://numbersapi.com/5/?json";
    let firstPromise = await axios.get(url);
    console.log(firstPromise);
    console.log("firstPromise");
  } catch {
    console.log("error man");
  }
}
luckyNum();

async function mutlipleNums() {
  const nums = [12, 24, 55, 6, 4];
  const promises = [];
  for (i = 0; i < nums.length - 1; i++) {
    let numUrl = `http://numbersapi.com/${nums[i]}/?json`;
    promises.push(axios.get(numUrl));
  }
  for (promise of promises) {
    fact = await promise;
    // console.log(fact);
    $(".num-facts").append(`<div>${fact.data.text}</div>`);
  }
  //   console.log(promises);
}
mutlipleNums();

async function favNumfacts(favNum, numOfFacts) {
  promises = [];
  for (i = 0; i < numOfFacts - 1; i++) {
    let numUrl = `http://numbersapi.com/${favNum}/?json`;
    promises.push(axios.get(numUrl));
  }
  for (promise of promises) {
    fact = await promise;
    console.log(fact);
    $(".num-facts").append(`<div>${fact.data.text}</div>`);
  }
}
favNumfacts(5, 4);
