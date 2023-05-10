// first 2 exersises from Deck of Cards
// #################################################################

async function shuffle() {
  let shuffleUrl =
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  let shufflePromise = await axios.get(shuffleUrl);
  console.log(shufflePromise);
  console.log("shufflePromise");
  let deck = shufflePromise.data["deck_id"];
  console.log(deck);
  console.log("deck");
  const drawCard = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`;
  card1 = await axios.get(drawCard);
  console.log("card1");
  console.log(`${card1.data.cards[0].value} of ${card1.data.cards[0].suit}`);
  card2 = await axios.get(drawCard);
  console.log("card2");
  console.log(`${card2.data.cards[0].value} of ${card2.data.cards[0].suit}`);
}

shuffle();
// #################################################################

async function newShuffle() {
  let newShuffleUrl =
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  let newShufflePromise = await axios.get(newShuffleUrl);
  console.log(newShufflePromise);
  drawCardUrl = `https://deckofcardsapi.com/api/deck/${newShufflePromise.data["deck_id"]}/draw/?count=1`;
  $("#new-card").removeClass("hidden");
}

newShuffle();

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

async function drawNewCard() {
  let newCard = await axios.get(drawCardUrl);
  console.log(newCard);
  console.log(newCard.data.cards[0].image);
  $(".cards").append(
    `<img src="${
      newCard.data.cards[0].image
    }" class='absolute  top-20 ${randomRotation()}'>`
  );
  console.log(newCard.data.remaining);
  if (newCard.data.remaining == 0) {
    $("#new-card").addClass("hidden");
  }
}

$("#new-card").click(drawNewCard);
