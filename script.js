document.getElementById("year").textContent = new Date().getFullYear();
const updateDateEl = document.getElementById("update-date");
if (updateDateEl) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  updateDateEl.textContent = new Date().toLocaleDateString(undefined, options);
}
const feedbackForm = document.querySelector(".feedback-form");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your feedback! (Form integration needed for actual submission.)");
    feedbackForm.reset();
  });
}
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  hamburger.classList.toggle("active"); // animate hamburger → X
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.classList.remove("active"); // reset X → hamburger
});
