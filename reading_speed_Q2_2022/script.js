window.onload = function () {

  const timeScores = [];
  const unshuffledParagraphNumbers = [
    { paraId: 'doc1-Lato', fieldLabelId: 'doc1-Lato-Label', quizId: 'doc1-Quiz', quizLabelId: 'doc1-Quiz-Label', quizName: 'doc1-Quiz-Option' },
    { paraId: 'doc2-OpenSans', fieldLabelId: 'doc2-OpenSans-Label', quizId: 'doc2-Quiz', quizLabelId: 'doc2-Quiz-Label', quizName: 'doc2-Quiz-Option' },
    { paraId: 'doc3-WorkSans', fieldLabelId: 'doc3-WorkSans-Label', quizId: 'doc3-Quiz', quizLabelId: 'doc3-Quiz-Label', quizName: 'doc3-Quiz-Option' },
    { paraId: 'lit1-Lato', fieldLabelId: 'lit1-Lato-Label', quizId: 'lit1-Quiz', quizLabelId: 'lit1-Quiz-Label', quizName: 'lit1-Quiz-Option' },
    { paraId: 'lit2-OpenSans', fieldLabelId: 'lit2-OpenSans-Label', quizId: 'lit2-Quiz', quizLabelId: 'lit2-Quiz-Label', quizName: 'lit2-Quiz-Option' },
    { paraId: 'lit3-WorkSans', fieldLabelId: 'lit3-WorkSans-Label', quizId: 'lit3-Quiz', quizLabelId: 'lit3-Quiz-Label', quizName: 'lit3-Quiz-Option' }
  ];

  const paragraphNumbers = knuthShuffle(unshuffledParagraphNumbers); //randomize paragraph order
  var countParagraphs = 0;
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonQuizSubmit = document.getElementById('button-quiz-submit');
  var Interval;
  var firstMsgRead = false;



  buttonStart.onclick = function () {
    if (countParagraphs < (Object.keys(paragraphNumbers).length)) {

      var paragraph = document.getElementById(paragraphNumbers[countParagraphs].paraId); //show paragraph
      paragraph.style.display = "flex";

      var button = document.getElementById("button-start"); //hide start button
      button.style.display = "none";

      var button = document.getElementById("button-stop"); //show finish button
      button.style.display = "block";

      if (firstMsgRead === false) {
        var msg = document.getElementById("start-msg-1"); //hide start message 1
        msg.style.display = "none";

        firstMsgRead = true
      }
      else {
        var msg = document.getElementById("start-msg-2"); //hide start message 2
        msg.style.display = "none";
      }
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
    console.log(currentTime);
    var paragraph = document.getElementById(paragraphNumbers[countParagraphs].paraId); //hide paragraph
    paragraph.style.display = "none";

    var button = document.getElementById("button-stop"); //hide finish button
    button.style.display = "none";

    //quiz section
    var quiz = document.getElementById(paragraphNumbers[countParagraphs].quizId); //show quiz
    quiz.style.display = "flex";

    var button = document.getElementById("button-quiz-submit"); //show quiz button
    button.style.display = "block";
  }

  buttonQuizSubmit.onclick = function () {


    var getSelectedValue = document.querySelector(`input[name=${paragraphNumbers[countParagraphs].quizName}]:checked`); //get quiz answer

    if (getSelectedValue != null) {
      document.getElementById(paragraphNumbers[countParagraphs].quizLabelId).value = getSelectedValue.value; //add quiz answer to spreadsheet form        

      var quiz = document.getElementById(paragraphNumbers[countParagraphs].quizId); //show quiz
      quiz.style.display = "none";

      var button = document.getElementById("button-quiz-submit"); //hide quiz submit button
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
      else {
        var msg = document.getElementById("start-msg-2"); //show start message 2
        msg.style.display = "block";

        var button = document.getElementById("button-start"); //show next button
        button.style.display = "block";
      }
    }
    else {
      alert("Please select an answer");
      console.log(paragraphNumbers[countParagraphs].quizName);
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
    rand = Math.floor((i + 1) * Math.random()); //get random between zero and i (inclusive)
    temp = arr[rand];//swap i and the zero-indexed number
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}