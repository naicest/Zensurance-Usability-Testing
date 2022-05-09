window.onload = function () {

  const timeScores = [];
  const paragraphNumbers = ['paragraph1Wrapper', 'paragraph2Wrapper', 'paragraph3Wrapper'];
  var countParagraphs = 0;
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  buttonStart.onclick = function () {
    var paragraph = document.getElementById(paragraphNumbers[countParagraphs]); //show paragraph & finish button
    paragraph.style.display = "flex";

    var button = document.getElementById("button-start"); //hide start button
    button.style.display = "none";

    var button = document.getElementById("button-stop"); //show finish button
    button.style.display = "block";

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

    
  }

  buttonStop.onclick = function () {
    timeScores.push({ timeSeconds: seconds + (tens / 100) });
    console.log(timeScores);
    clearInterval(Interval);

    var paragraph = document.getElementById(paragraphNumbers[countParagraphs]); //hide paragraph & finish button
    paragraph.style.display = "none";

    var button = document.getElementById("button-start"); //show next button
    button.style.display = "block";

    var button = document.getElementById("button-stop"); //hide finish button
    button.style.display = "none";

    countParagraphs += 1;

  }


  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }



  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

  }


}