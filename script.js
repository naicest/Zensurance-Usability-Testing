function buttonClick() {
  var x = document.getElementById("priceChangeSummary");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("bottomBar");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
