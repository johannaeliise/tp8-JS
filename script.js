/* Javascript code for Tiny project #8 - js */


function cardClicked(what) {

  if (!what.classList.contains("matched")) {

    if (what.classList.contains("clicked")) {
    
      what.classList.remove("clicked");
      cardsClicked--;

    } else {
      // if not already clicked
      what.classList.add("clicked");
      cardsClicked++;

      if (cardsClicked == 2) {
        // compare card values
        cardCompare();
      } 
    } 
  }
}
      function cardCompare() {
          clickedCards = document.querySelectorAll(".clicked"); //collection of cards

          //first clicked element is clickedCrds[0]
          //second clicked element is clickedCards[1]
      matched = false; 

            if (clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1")) {
              matched = true; //matches pic #1
            } else if (clickedCards[0].classList.contains("pic2") && clickedCards[1].classList.contains("pic2")) {
              matched = true; //matches pic #2
            } else if (clickedCards[0].classList.contains("pic3") && clickedCards[1].classList.contains("pic3")) {
              matched = true; //matches pic #2
            } else if (clickedCards[0].classList.contains("pic4") && clickedCards[1].classList.contains("pic4")) {
              matched = true; //matches pic #2
            } else if (clickedCards[0].classList.contains("pic5") && clickedCards[1].classList.contains("pic5")) {
              matched = true; //matches pic 2
            } else if (clickedCards[0].classList.contains("pic6") && clickedCards[1].classList.contains("pic6")) {
              matched = true; //matches pic 2
            } else if (clickedCards[0].classList.contains("pic7") && clickedCards[1].classList.contains("pic7")) {
              matched = true; //matches pic 2
            } else if (clickedCards[0].classList.contains("pic8") && clickedCards[1].classList.contains("pic8")) {
              matched = true; //matches pic 2
            } else if (clickedCards[0].classList.contains("pic9") && clickedCards[1].classList.contains("pic9")) {
              matched = true; //matches pic 2
            } else if (clickedCards[0].classList.contains("pic10") && clickedCards[1].classList.contains("pic10")) {
              matched = true; //matches pic 2
            }

            if (matched) {
              //hide cards
              removeCards(clickedCards[0], clickedCards[1]);

            } else {
              //unflip cards
              unflipCards(clickedCards[0], clickedCards[1]);

            }
          }


          function removeCards(cardA, cardB) {
            pause = setTimeout(function() {

              cardA.classList.remove("clicked");
              cardB.classList.remove("clicked");

              cardA.classList.add("matched");
              cardB.classList.add("matched");

              cardsClicked = 0;

              checkWinning(); }, 1000);
          }

          function unflipCards(cardA, cardB) {

            pause = setTimeout(function() {
              cardA.classList.remove("clicked");
              cardB.classList.remove("clicked");

              cardsClicked = 0;
            }, 1000);
          }

          function checkWinning() {
            remainingCards = document.querySelectorAll(".card");

            for (c = 0; c < remainingCards.length; c++) {
              if (!remainingCards[c].classList.contains("matched")) {
                return;
              }
            }
            document.getElementById("mainTable").innerHTML = "You have won the game."
          }

          function shuffleCards() {
            table = document.querySelector("#mainTable");
            cardCount = table.children.length;

            for (c = 0; c < cardCount; c++) {
              randomCard = Math.floor(Math.random() * cardCount);
              cardToMove = table.children[randomCard];
              table.appendChild(cardToMove);
            }
          }



           window.onload = function() {


            cardList = document.querySelectorAll(".card"); //collection of cards
            cardCount = cardList.length; // how many cards are on the table

            for (c = 0; c < cardCount; c++) {
              cardList[c].onclick = function() { cardClicked(this);
              }
              cardsClicked = 0;
              cardsClicked = 0;
            }

          }