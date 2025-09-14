document.getElementById("year").textContent = new Date().getFullYear();
const updateDateEl = document.getElementById("update-date");
if (updateDateEl) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  updateDateEl.textContent = new Date().toLocaleDateString(undefined, options);
}
