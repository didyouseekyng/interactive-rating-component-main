const cardRating = document.querySelector(".card-rating");
const cardThank = document.querySelector(".card-thank");
const cardSelect = document.querySelector(".card-thank__selection");
const submitBtn = document.querySelector(".card-rating__btn");
const rating = document.querySelectorAll(".card-rating__span");
const span = document.querySelectorAll("span");

rating.forEach((btn, i) => {
  btn.addEventListener("click", ratingClick);
  btn.addEventListener("keyup", enterClick);
  btn.addEventListener(
    "click",
    function select() {
      let currentRating = i + 1;
      cardSelect.innerText = `You selected ${currentRating} out of 5`;
    },
    true
  );
  btn.addEventListener("keyup", function enterSelect(e) {
    if (e.keyCode === 13) {
      let currentRating = i + 1;
      cardSelect.innerText = `You selected ${currentRating} out of 5`;
    }
  });
});

function enterClick(e) {
  if (e.keyCode === 13) {
    rating.forEach((btn, i) => {
      btn.classList.remove("card-rating--active");
    });
    if (e.target.classList.contains("card-rating__span")) {
      e.target.classList.add("card-rating--active");
    }
  }
}

function ratingClick(e) {
  rating.forEach((btn, i) => {
    btn.classList.remove("card-rating--active");
  });
  if (e.target.classList.contains("card-rating__span")) {
    e.target.classList.add("card-rating--active");
  }
}

submitBtn.addEventListener("click", thankYou);

function thankYou() {
  cardRating.classList.add("card--hidden");
  cardThank.classList.remove("card--hidden");
}
