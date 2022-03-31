function buttonClick() {
  var x = document.getElementById("priceChangeSummary");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("bottomBar");
  if (y.style.display === "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none";
  }
}
