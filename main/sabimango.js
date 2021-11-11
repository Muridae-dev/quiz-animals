var rightAnswer;
var labelBox;
// k = every radiobutton is called k1, k2, k3, k4, k5
var k4;
var k5;

/* ARRAY OF OBJECTS. ARRAY IS AN OBJECT WITH SPECIAL QUALITIES :)
HERE WE STORE QUESTIONS, IMAGES, ANSWER-ALTERNATIVES, RIGHT ANSWERS
AND NUMBER OF QUESTIONS */
var quiz = [
  {
    fraga: "Name the artist!<br/>",
    img: "<img src='images/verka-serduchka.gif'>",
    svar: ["Jerka Babuchka", "Verka Serduchka", "Vixen Verkuchka"],
    answer: "k2",
    nrQ: 3,
  },
  {
    fraga: "Which is the best designer brand?",
    img: "<img src='images/fashion.png'>",
    svar: ["Prada", "Gucci", "Louis Vuitton"],
    answer: "k1",
    nrQ: 3,
  },
  {
    fraga: "Which is the best company?",
    img: "<img src='images/games.png'>",
    svar: ["Sony", "Nintendo", "Microsoft"],
    answer: "k2",
    nrQ: 3,
  },
  {
    fraga: "Which is the best snacks?",
    img: "<img id='sharkImage' src='images/sharkfood.png'>",
    svar: ["Doritos", "Pringles", "Lays", "Estrella", "OLW"],
    answer: "k4",
    nrQ: 5,
  },
];
/* ADDING THE CONTENT (IMGDIV, RADIOBOXES, LABELBOXES, THEY ARE ALL EMPTY).
PUT CONTENT FROM THE ARRAY IN THE EMPTY 'BOXES' */
function initSabimango() {
  var content = '      <div id="question"><div id="imgBox"></div>   <label for="k1"></label>      <input type="radio" id="k1" name="fraga1" /> <br />      <label for="k2"></label>      <input type="radio" id="k2" name="fraga1" /> <br />      <label for="k3"></label>      <input type="radio" id="k3" name="fraga1" /> <br />      <label for="k4"></label>      <input type="radio" id="k4" name="fraga1" /> <br />      <label for="k5"></label>      <input type="radio" id="k5" name="fraga1" /> <br />      <button id="submit" onclick="checkMangoAnswer()">Submit!</button>    </div> </div>  ';
  containerBox.innerHTML = content;
  /* IF THE QUESTION HAS 5 ALTERNATIVES INSTEAD OF 3, 
 TO CHANGE HOW MANY RADIOBUTTONS WE DISPLAY */
  k5 = document.getElementById("k5");
  k4 = document.getElementById("k4");
  labelBox = document.getElementsByTagName("label");
  changeQuestion();
}

function checkMangoAnswer() {
  //containerBox.style.display = "none";
  //resultBox.style.display = "initial";
  if (rightAnswer.checked) {
    correctAnswer();
  } else {
    wrongAnswer();
  }
  /*  SET TIMEOUT FOR CHANGE QUESTION WITH 3000MS
  MAKE DISPLAY INLINE FOR THE CONTAINER DIV IN CHANGEQUESTION. 
  THEN HIDE THE RESULT BOX IN THE SAME WAY.
  The splice() method adds/removes items to/from an array.
  WE USE SPLICE TO REMOVE THE QUESTIONS THAT ALREADY HAS BEEN SHOWN. */
  quiz.splice(randomPicker, 1);
}

function changeQuestion() {
  //MAKE THE CONTAINER DIV DISPLAY INLINE A RANDOM QUESTION
  //containerBox.style.display = "";
  randomPicker = random(quiz);
  textBox.innerHTML = quiz[randomPicker].fraga;
  if (quiz[randomPicker].img)
    document.getElementById('imgBox').innerHTML = quiz[randomPicker].img;
  k4.style.display = 'none';
  k5.style.display = 'none';
  if (quiz[randomPicker].nrQ == 5) {
    k4.style.display = 'inline';
    k5.style.display = 'inline';
  }
  for (let i = 0; i < quiz[randomPicker].nrQ; i++) {
    labelBox[i].innerHTML = quiz[randomPicker].svar[i];
  }

  $('input[name=fraga1]').prop('checked', false);

  rightAnswer = document.getElementById(quiz[randomPicker].answer);

  var rectBox = textBox.getBoundingClientRect();
  var questionBox = document.getElementById('question');
  console.log(rectBox.height);
  questionBox.style.top = rectBox.bottom + 'px';
  questionBox.style.left = rectBox.left + rectBox.width / 2 + 'px';
}

function titleToggle() {
  spotlightTitle.classList.toggle(`active`);
}
