let btn = document.getElementById("btn");
btn.addEventListener("click", animateChess);

function animateChess() {
  document.getElementById("pawn-white-f2").classList.toggle("animationFirst");
  document.getElementById("pawn-black-e7").classList.toggle("animationSecond");
  document.getElementById("pawn-white-g2").classList.toggle("animationThird");
  document.getElementById("queen-black").classList.toggle("animationFourth");

  document.getElementById("h4").classList.toggle("animationFifth");
  document.getElementById("g3").classList.toggle("animationSixth");
  document.getElementById("f2").classList.toggle("animationSeventh");
  document.getElementById("e1").classList.toggle("animationEighth");

  document.getElementById("chess-container").classList.toggle("animationNinth");
  document.getElementById("h1").classList.toggle("animationLast");
}
