// first 2 exersises from Deck of Cards
// #################################################################
let shuffleUrl =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let shufflePromise = axios.get(shuffleUrl);
console.log(shufflePromise);

shufflePromise
  .then((data) => {
    deck = data.data["deck_id"];
    return axios.get(
      `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
    );
  })
  .then((card1) => {
    console.log("card1");
    console.log(`${card1.data.cards[0].value} of ${card1.data.cards[0].suit}`);
    return axios.get(
      `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
    );
  })
  .then((card2) => {
    console.log("card2");
    console.log(`${card2.data.cards[0].value} of ${card2.data.cards[0].suit}`);
  })
  .catch((err) => console.log(err));

// #################################################################
let newShuffleUrl =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let newShufflePromise = axios.get(newShuffleUrl);
console.log(newShufflePromise);

let deck = "";
let drawCardUrl = "";
newShufflePromise
  .then((data) => {
    drawCardUrl = `https://deckofcardsapi.com/api/deck/${data.data["deck_id"]}/draw/?count=1`;
    $("#new-card").removeClass("hidden");
  })
  .catch((err) => console.log(err));

// `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`;

function randomRotation() {
  const rotations = [
    "rotate-0",
    "rotate-6",
    "rotate-12",
    "rotate-3",
    "-rotate-6",
    "-rotate-12",
    "-rotate-3",
  ];
  const randomNum = Math.floor(Math.random() * 6);
  return rotations[randomNum];
}

function drawNewCard() {
  let newCard = axios.get(drawCardUrl);
  console.log(newCard);
  newCard
    .then((card) => {
      console.log(card.data.cards[0].image);
      $(".cards").append(
        `<img src="${
          card.data.cards[0].image
        }" class='absolute  top-20 ${randomRotation()}'>`
      );
      console.log(card.data.remaining);
      if (card.data.remaining == 0) {
        $("#new-card").addClass("hidden");
      }
    })
    .catch((err) => console.log(err));
}
$("#new-card").click(drawNewCard);
