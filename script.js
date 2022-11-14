/* Javascript code for Tiny project #8 - js */

windonw.onload = function () {
  
  cardList = document.querySelectorAll(“.card”); //collection of cards 

cardCount = cardList.length 

for (c=0; c < cardCount; c++) {
  cardList[c].onclick = function () {
  this.classList.toggle(“clicked”);
}
}
}