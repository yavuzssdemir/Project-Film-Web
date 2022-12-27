/* LIST START */

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300)
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
  if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
    movieLists[i].scrollLeft +=300;
    } else {
      movieLists[i].scrollLeft -= 1090;
      clickCounter = 0;
    }
  });
});

/* LIST END */


/* DARK MODE START*/

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});

/* DARK MODE END*/