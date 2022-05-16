window.onload = function () {

  const timeScores = [];
  const unshuffledParagraphNumbers = [{ paraId: 'doc1-LibreFranklin', fieldLabelId: 'doc1-LibreFranklin-Label' }, { paraId: 'doc2-OpenSans', fieldLabelId: 'doc2-OpenSans-Label' }, { paraId: 'doc3-Rubik', fieldLabelId: 'doc3-Rubik-Label' }, { paraId: 'doc4-WorkSans', fieldLabelId: 'doc4-WorkSans-Label' }, { paraId: 'lit1-LibreFranklin', fieldLabelId: 'lit1-LibreFranklin-Label' }, { paraId: 'lit2-OpenSans', fieldLabelId: 'lit2-OpenSans-Label' }, { paraId: 'lit3-Rubik', fieldLabelId: 'lit3-Rubik-Label' }, { paraId: 'lit4-WorkSans', fieldLabelId: 'lit4-WorkSans-Label' }];

  const paragraphNumbers = knuthShuffle(unshuffledParagraphNumbers); //randomize paragraph order
  var countParagraphs = 0;
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var Interval;

  buttonStart.onclick = function () {
    if (countParagraphs < (Object.keys(paragraphNumbers).length)) {

      var paragraph = document.getElementById(paragraphNumbers[countParagraphs].paraId); //show paragraph & finish button
      paragraph.style.display = "flex";

      var button = document.getElementById("button-start"); //hide start button
      button.style.display = "none";

      var button = document.getElementById("button-stop"); //show finish button
      button.style.display = "block";

      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    }
    else {
      console.log('ur done');


    }

  }

  buttonStop.onclick = function () {
    var currentTime = seconds + (tens / 100);
    timeScores.push({ [paragraphNumbers[countParagraphs]]: currentTime });
    console.log(timeScores);
    document.getElementById(paragraphNumbers[countParagraphs].fieldLabelId).value = currentTime; //add time to spreadsheet form

    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    console.log(currentTime)
;
    var paragraph = document.getElementById(paragraphNumbers[countParagraphs].paraId); //hide paragraph & finish button
    paragraph.style.display = "none";

    var button = document.getElementById("button-start"); //show next button
    button.style.display = "block";

    var button = document.getElementById("button-stop"); //hide finish button
    button.style.display = "none";


    countParagraphs += 1;

    if (countParagraphs >= (Object.keys(paragraphNumbers).length)) {
      document.getElementById("timesForm").submit();
      //alert("Your form submitted");

      var button = document.getElementById("button-start"); //hide start button
      button.style.display = "none";

      var button = document.getElementById("button-complete-task"); //show finish task button
      button.style.display = "block";

    }


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

function knuthShuffle(arr) {
  var rand, temp, i;

  for (i = arr.length - 1; i > 0; i -= 1) {
    rand = Math.floor((i + 1) * Math.random());//get random between zero and i (inclusive)
    temp = arr[rand];//swap i and the zero-indexed number
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
