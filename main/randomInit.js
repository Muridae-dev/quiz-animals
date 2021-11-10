var funBox;
var funText;
var jsTimer;
var containerBox;
var textBox;
var audio;

function randomInit() {
  textBoxManipulatorRemover();
  randomQuestion = 1; // Math.floor(Math.random() * 6);
  if (randomQuestion == 0 && pictureArray.length != 0) initDragnDrop();
  else if (randomQuestion == 1 && quiz.length != 0) initSabimango();
  else if (randomQuestion == 2 && makeGlasses.length != 0) initDressup();
  else if (randomQuestion == 3 && noMoreThan5 < 5) initAnimals();
  else if (randomQuestion == 4 && silhouetteQuestions.length != 0)
    initSilhouette();
  else if (randomQuestion == 5 && ghibliSound.length != 3) initGhibli();
  else if (
    pictureArray.length == 0 &&
    quiz.length == 0 &&
    makeGlasses.length == 0 &&
    noMoreThan5 >= 5 &&
    silhouetteQuestions.length == 0 &&
    ghibliSound.length == 3
  )
    init();
  else {
    randomInit();
  }
}

function correctAnswer() {
  funText.innerHTML = "CORRECT ANSWER!";
  score++;
  document.getElementById("scoreBox").innerHTML = "SCORE:" + score;
  textBoxManipulator();
  setTimeout(randomInit, 1500);
}

function wrongAnswer() {
  funText.innerHTML = "WRONG ANSWER!";
  textBoxManipulator();
  setTimeout(randomInit, 1500);
}

function textBoxManipulator() {
  var randomizer1 = Math.floor(Math.random() * 2);
  var randomizer2 = Math.floor(Math.random() * 2);
  var randomizer3 = Math.floor(Math.random() * 2);

  textBox.style.display = "none";
  containerBox.style.display = "none";
  funBox.style.display = "";

  if (randomizer1 == 0) {
    colorChange();
    jsTimer = setInterval(colorChange, 100);
  }

  if (randomizer2 == 0) funText.classList.add("activeText");
  if (randomizer3 == 0) funBox.classList.add("active");
}

function textBoxManipulatorRemover() {
  textBox.style.display = "";
  containerBox.style.display = "";
  funBox.style.display = "none";

  clearTimeout(jsTimer);
  $(".funText").css({ animation: "" });
  funText.classList.remove("activeText");
  funBox.classList.remove("active");
}

function colorChange() {
  var r = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);

  $(".funBox").css({ color: `rgb(${r},${b},${g} )` });
}

function firstInit() {
  audio = new Audio("sounds/shopchannel.mp3");
  audio.play();
  document.getElementsByTagName("body")[0].innerHTML =
    '    <div id="scoreBox">        SCORE:0    </div>    <div class="funBox">        <div class="funText">asdasdasdas</div>    </div>    <div id="textBox">                </div>    <div id="containerBox">            </div>';
  funBox = document.querySelector(".funBox");
  funText = document.querySelector(".funText");
  jsTimer;
  containerBox = document.getElementById("containerBox");
  textBox = document.getElementById("textBox");
  textBoxManipulatorRemover();
  randomInit();
}

// Give random index number of array
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return index;
}
