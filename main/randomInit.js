var funBox;
var funText;
var jsTimer;
var containerBox;
var textBox;
var audio;

//RUN RANDOM QUIZ FUNCTION
function randomInit() {
  //REMOVE THE CORRECT/WRONG ANSWER FUNNYBOX
  textBoxManipulatorRemover();
  //PICK A RANDOM QUIZ, AS LONG AS THEIR ARRAY HAS ITEMS OR HAS NOT BEEN RUN X AMOUNT OF TIMES WE CAN RUN IT AGAIN
  randomQuestion = Math.floor(Math.random() * 6);
  if (randomQuestion == 0 && pictureArray.length != 0) initDragnDrop();
  else if (randomQuestion == 1 && quiz.length != 0) initSabimango();
  else if (randomQuestion == 2 && makeGlasses.length != 0) initDressup();
  else if (randomQuestion == 3 && noMoreThan5 < 5) initAnimals();
  else if (randomQuestion == 4 && silhouetteQuestions.length != 4)
    initSilhouette();
  else if (randomQuestion == 5 && ghibliSound.length != 3) initGhibli();
  //IF ALL THE QUIZZES ARE EMPTY/RAN X AMOUNT OF TIMES WE MOVE ON TO THE HIGHSCORE PAGE SENDING THE SCORE IN THE URL
  else if (
    pictureArray.length == 0 &&
    quiz.length == 0 &&
    makeGlasses.length == 0 &&
    noMoreThan5 >= 5 &&
    silhouetteQuestions.length == 4 &&
    ghibliSound.length == 3
  )
    window.location.href = 'highscorepage/index.html?score=' + score;
  //IF RANDOMQUESTION LANDS ON A QUIZ THAT IS EMPTY/IS RAN X AMOUNT OF TIMES IT RERUNS UNTIL IT GET ONE THAT ISNT
  else {
    randomInit();
  }
}

//FUNCTION FOR ALL THE QUIZZES ANSWERING CORRECTLY
function correctAnswer() {
  funText.innerHTML = 'CORRECT ANSWER!';
  score++;
  document.getElementById('scoreBox').innerHTML = 'SCORE:' + score;
  //PUT DISPLAY NONE TO THE CONTAINER AND TEXTBOX AND GIVE THE "FUNBOX" DISPLAY
  textBoxManipulator();
  //RUN NEXT QUIZ AFTER 1,5 SEC
  setTimeout(randomInit, 1500);
}

//FUNCTION FOR ALL THE QUIZZES ANSWERING WRONG
function wrongAnswer() {
  funText.innerHTML = 'WRONG ANSWER!';
  //LOOK AT CORRECT ANSWER
  textBoxManipulator();
  setTimeout(randomInit, 1500);
}

//SHOWING THE FUN CORRECT/WRONG ANSWER BOX AND HIDING THE OTHER BOXES
function textBoxManipulator() {
  //GIVE A 50/50 CHANCE TO ADD EACH ANIMATION TYPE TO THE TEXT
  var randomizer1 = Math.floor(Math.random() * 2);
  var randomizer2 = Math.floor(Math.random() * 2);
  var randomizer3 = Math.floor(Math.random() * 2);

  //HIDE/SHOW BOXES
  textBox.style.display = 'none';
  containerBox.style.display = 'none';
  funBox.style.display = '';

  //COLOR CHANGE
  if (randomizer1 == 0) {
    colorChange();
    jsTimer = setInterval(colorChange, 100);
  }
  //ROTATE TEXT
  if (randomizer2 == 0) funText.classList.add('activeText');
  //ENLARGE TEXT
  if (randomizer3 == 0) funBox.classList.add('active');
}

//REMOVE THE FUN TEXT BOX AND SHOW THE QUIZBOXES
function textBoxManipulatorRemover() {
  textBox.style.display = '';
  containerBox.style.display = '';
  funBox.style.display = 'none';

  //REMOVE COLOR CHANGE IF ACTIVE
  clearTimeout(jsTimer);

  funText.classList.remove('activeText');
  funBox.classList.remove('active');
}

//GIVING RANDOM COLORS TO THE FUNBOX TEXT (RANDOM R G B VALUES)
function colorChange() {
  var r = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);

  $('.funBox').css({ color: `rgb(${r},${b},${g} )` });
}

//THE FIRST INITIALIZE WHEN YOU GO FROM LANDING PAGE TO GAME
function firstInit() {
  //ADD AND PLAY AMAZING SONG
  audio = new Audio('sounds/shopchannel.mp3');
  audio.play();
  //ADD ALL THE NECESSARY QUIZCONTENT-BOXES
  document.getElementsByTagName('body')[0].innerHTML =
    '    <div id="scoreBox">        SCORE:0    </div>    <div class="funBox">        <div class="funText">asdasdasdas</div>    </div>    <div id="textBox">                </div>    <div id="containerBox">            </div>';
  //ADD ALL THE BOXES AS VARIABLES NOW THAT THEY HAVE BEEN CREATED
  funBox = document.querySelector('.funBox');
  funText = document.querySelector('.funText');
  //XD
  jsTimer;
  containerBox = document.getElementById('containerBox');
  textBox = document.getElementById('textBox');
  textBoxManipulatorRemover();
  randomInit();
}

// Give random index number of array
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return index;
}
