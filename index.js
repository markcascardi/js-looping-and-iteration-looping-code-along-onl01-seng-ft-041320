// const gifts = ["teddy bear", "drone", "doll"];
//
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`)
//   }
//
//   return gifts;
// }
//
// wrapGifts(gifts);

let people = ["Ada", "Brendan", "Ali"];
let giftReason = ["birthday"];

function writeCards(people, giftReason) {
  let cards = [];
  for (let i = 0; i < people.length; i++) {
    console.log(`Thank you, ${people[i]}, for the wonderful ${giftReason} gift!`);
    cards.push(`Thank you, ${people[i]}, for the wonderful ${giftReason} gift!`);
  }
  return cards;
}

writeCards(cards)

function countDown() {
  let countdown = 10;
  while (countdown <= 10 && countdown >= 0) {
    console.log(countdown--);
  }
}
