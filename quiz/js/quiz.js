var quiz = [{
  "question": "Siapa nama Presiden Republik Indonesia saat ini ?",
  "choices": ["Prabowo", "Ir. H. Joko Widodo", "Susilo Bambang Yudoyono","Megawati Soekarno putri","Iwan Fals"],
  "correct": "Ir. H. Joko Widodo"
}, {
  "question": "Siapa Pencipta lagu Padamu Negeri yang dinyanyikan waktu sekolah?",
  "choices": ["WR.Soepratman", "Koesbini", "WS.Rendra","Ariel NOAH"],
  "correct": "Koesbini"
}, {
  "question": "Apa Nama Kelas Batch 6 di HACKTIV8 :D ?",
  "choices": ["Fire-Fox", "MOzila FireFox", "Slack","Cross Fox"],
  "correct": "Fire-Fox"
}, {
  "question": "salah satu Jenis bahasa pemrograman [bukan compiler] ?",
  "choices": ["javascript", "Delphi7", "QT++"],
  "correct": "javascript"
}, {
  "question": "Yang bukan system operasi?",
  "choices": ["Linux", "Aplle", "Macintosh"],
  "correct": "Aplle"
}];


// define elements
var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  scoreContainer = $("score"),
  submitBtn = $("submit");

// init vars
var currentQuestion = 0,
  score = 0,
  askingQuestion = true;

function $(id) { // shortcut for document.getElementById
  return document.getElementById(id);
}

function askQuestion() {
  var choices = quiz[currentQuestion].choices,
    choicesHtml = "";

  // loop through choices, and create radio buttons
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }

  // load the question
  questionContainer.textContent = "Q" + (currentQuestion + 1) + ". " +
    quiz[currentQuestion].question;

  // load the choices
  choicesContainer.innerHTML = choicesHtml;

  // setup for the first time
  if (currentQuestion === 0) {
    scoreContainer.textContent = "Score kamu: 0 dari " +
      quiz.length + " pertanyaan mudah.";
    submitBtn.textContent = "Kirim Jawaban";
  }
}

function checkAnswer() {
  // are we asking a question, or proceeding to next question?
  if (askingQuestion) {
    submitBtn.textContent = "Pertanyaan Selanjutnya";
    askingQuestion = false;

    // determine which radio button they clicked
    var userpick,
      correctIndex,
      radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { // if this radio button is checked
        userpick = radios[i].value;
      }

      // get index of correct answer
      if (radios[i].value == quiz[currentQuestion].correct) {
        correctIndex = i;
      }
    }

    // setup if they got it right, or wrong
    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    if (userpick == quiz[currentQuestion].correct) {
      score++;
      labelStyle.color = "green";
    } else {
      labelStyle.color = "red";
    }

    scoreContainer.textContent = "Score kamu: " + score + " dari " +
      quiz.length + " pertanyaan mudah.";
  } else { // move to next question
    // setting up so user can ask a question
    askingQuestion = true;
    // change button text back to "Submit Answer"
    submitBtn.textContent = "Kirim Jawaban";
    // if we're not on last question, increase question number
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      askQuestion();
    } else {
      showFinalResults();
    }
  }
}

function showFinalResults() {
  content.innerHTML = "<h2>Kamu sudah menjawab semua pertanyaan!</h2>" +
    "<h2>Dia bawah bisa dilihat hasilnya:</h2>" +
    "<h2>" + score + " Dari " + quiz.length + " Pertanyaan, " +
    Math.round(score / quiz.length * 100) + "%<h2>";
}

window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);
