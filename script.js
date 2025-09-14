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
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  const overlay = document.querySelector('.overlay');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
}
