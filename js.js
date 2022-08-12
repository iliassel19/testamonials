const btnPrev = document.querySelector(".container__btn-prev");
const btnNext = document.querySelector(".container__btn-next");
const containerJobs = document.querySelectorAll(".container__job-name");
const containerAuthors = document.querySelectorAll(".container__author-name");
const containerQuotes = document.querySelectorAll(
  ".container__text-quote-text"
);
const containerImgs = document.querySelectorAll(".container__img");

const removeHideClass = function (container, className) {};
containerImgs[1].classList.add("img-hide");

btnNext.addEventListener("click", function (e) {
  const btn = e.target.closest(".container__btn-next");
  if (!btn) return;

  containerImgs.forEach((img) => img.classList.toggle("img-hide"));
  containerAuthors.forEach((text) => text.classList.toggle("show-text"));
  containerQuotes.forEach((text) => text.classList.toggle("show-text"));
  containerJobs.forEach((text) => text.classList.toggle("show-text"));
});
btnPrev.addEventListener("click", function (e) {
  const btn = e.target.closest(".container__btn-prev");
  if (!btn) return;

  containerImgs.forEach((img) => img.classList.toggle("img-hide"));
  containerAuthors.forEach((text) => text.classList.toggle("show-text"));
  containerQuotes.forEach((text) => text.classList.toggle("show-text"));
  containerJobs.forEach((text) => text.classList.toggle("show-text"));
});
