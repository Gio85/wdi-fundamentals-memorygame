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
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var gameStarted = false;
var scores = 0;
var clicked = 0;



var flipCard = function() {
  clicked += 1;
  gameStarted = true;
  var cardId = this.getAttribute("data-id");
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2){
      checkForMatch();
    };
  };

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    scores += 1;
    document.getElementById("yourScore").innerHTML = "Your score is:  ";
    document.getElementById("score").innerHTML = scores;
  } else {
    alert("Sorry, try again!!");
  };
};

var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  };
};


var resetGame = function(){
  document.getElementById("game-board").innerHTML = "";
  cardsInPlay = [];
  clicked = 0;
  createBoard();
};

document.getElementById("reset").onclick = function () {
  if (gameStarted === true && clicked >= 2) {
    resetGame();
  } else {
    alert("Keep playing");
  };
};

createBoard();

