function endorsementInfoCorrect() {
  var x = document.getElementById("priceChangeSummary"); //show price change summary
  if (x.style.display === "none") {
    x.style.display = "flex";
  }
  var y = document.getElementById("bottomBar");
  if (y.style.display === "none") {
    y.style.display = "flex";
  }
  window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}

function endorsementInfoIncorrect() {
  var x = document.getElementById("priceChangeSummary"); //hide price change summary
  if (x.style.display === "flex") {
    x.style.display = "none";
  }
  var y = document.getElementById("bottomBar");
  if (y.style.display === "flex") {
    y.style.display = "none";
  }

  var modal = document.getElementById("contactBrokerModal");
  var span = document.getElementsByClassName("close-modal")[0];
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
