let currentActive = 0;
const glassPos = [0, 100, 200, 300];
const makeGlasses = [
  {
    imgURL: ["images/0glass1.png", "images/0glass2.png", "images/0glass3.png"],
    charaURL: "images/0frog.png",
    answer: "glasses2",
  }
];

function displayGlasses() {
  randomPicker = random(makeGlasses);
  var content = '<div id="buttonContainer">      <input        type="button"        value="button1"        id="nextglasses" onclick="nextGlasses()"/>      <button id="submit" onclick="checkDressupAnswer()">Submit Answer</button>    </div>      <div id="background">        <div id="character" />        <div id="glasses-variants">          <div id="glasses1"></div>          <div id="glasses2"></div>          <div id="glasses3"></div>        </div>        <div id="shoes" />        <div id="extra" />      </div>';
  containerBox.innerHTML = content;
  for (let i = 1; i <= 3; i++) {
    document.getElementById("glasses" + i).style.background = `url(${makeGlasses[randomPicker].imgURL[i - 1]})`;
  }

  document.getElementById("character").style.background = `url(${makeGlasses[randomPicker].charaURL})`;
}

function nextGlasses() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("glasses" + i).style.visibility = "hidden";
  }
  if (currentActive != 0) {
    document.getElementById("glasses" + currentActive).style.visibility = "visible";
  }

  console.log(glassPos[currentActive]);
  document.getElementById("glasses-variants").style.left = -glassPos[currentActive] + "%";
  console.log(currentActive, glassPos.length);
  if (currentActive == glassPos.length - 1) {
    currentActive = 0;
  } else {
    currentActive++;
    
  }
}

function initDressup () {
    displayGlasses();
    nextGlasses();
}

function checkDressupAnswer() {
  console.log("current'active", currentActive);

  if (currentActive === 3) {
    correctAnswer();
  } else {
    wrongAnswer();
  }
  makeGlasses.splice(randomPicker, 1);
}
