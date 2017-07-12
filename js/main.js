console.log("Up and running!");
var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "king-of-diamonds.pgn"
}
];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again!!");
  };
};

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    if (cardsInPlay.length === 2){
      checkForMatch();
    };
  };

flipCard(0);
flipCard(2);
// console.log("User flipped " + cardTwo);

