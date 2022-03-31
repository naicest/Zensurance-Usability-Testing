function endorsementInfoCorrect() {
  var x = document.getElementById("priceChangeSummary");
  if (x.style.display === "none") {
    x.style.display = "flex";
  }
  var y = document.getElementById("bottomBar");
  if (y.style.display === "none") {
    y.style.display = "flex";
  }
  window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}
