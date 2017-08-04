
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
    //increase the var score so that the user can check his scores
    scores += 1;
    document.getElementById("yourScore").innerHTML = "Your score is:  ";
    document.getElementById("score").innerHTML = scores;
  } else {
    alert("Sorry, try again!!");
  };
};
//to create the board with cards
var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  };
};

//reset function
var resetGame = function(){
  //replace the div 'game-board' with an empty one
  document.getElementById("game-board").innerHTML = "";
  //reset the array so that the user can check the futher matches
  cardsInPlay = [];
  //reset the var clicked so that the user can restart the game after clicked two cards
  clicked = 0;
  //recreate a new board
  createBoard();
};

//reset button
document.getElementById("reset").onclick = function () {
  //if the game has started and the user has checked two cards
  if (gameStarted === true && clicked >= 2) {
    //we can restart the game
    resetGame();
  } else {
    //otherwise 
    alert("Keep playing");
  };
};

createBoard();

