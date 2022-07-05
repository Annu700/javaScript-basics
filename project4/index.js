const cards = document.querySelectorAll(".card");
console.log(cards);

// variable
var isFlipped = false;
var firstCard;
var secondCard;


cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //console.log("Card flipped");
  // console.log(this);
  // here added all class list of flip so when we click all logo so it will open
  this.classList.add("flip");
  if(!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }

}


function checkIt() {
  // console.log("Checking....");
  if(firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}


function success() {
  //console.log("success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}


function fail() {
  //console.log("Failed");
  // for this it will just flipped u cannot see emoji
  // firstCard.classList.remove("flip");
  // secondCard.classList.remove("flip");
  // for this u can see emoji and hold for that timelimit.
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000)
}


function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null; 
}


//TODO: shuffle

// its called with window object
(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.getElementsByClassName.order = index;
  });

}) ();