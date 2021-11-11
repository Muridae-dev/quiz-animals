let noMoreThan5 = 0;

document.styleSheets[2].disabled = true;

const animalName = [
  "Cat",
  "Dog",
  "Owl",
  "Parrot",
  "Popit",
  "Shark",
  "Sloth",
  "Utter",
  "Unicorn",
  "Human",
  "Ducks",
  "Rabbit", 
  "Hamster",  
  "Gorilla", 
  "Lemur",  
  "Giraffe", 
]; 
// ARRAY WITH KEYS AND VALUES. NAME is a key and CAT is a value.
const animalList = [
  { name: "Cat", src: "q5imgs/cat.jpeg" },
  { name: "Dog", src: "q5imgs/dog.jpeg" },
  { name: "Owl", src: "q5imgs/great-horned-owl.jpeg" },
  { name: "Parrot", src: "q5imgs/parrot.jpeg" },
  { name: "Popit", src: "q5imgs/popit.jpeg" },
  { name: "Shark", src: "q5imgs/shark.jpg" },
  { name: "Sloth", src: "q5imgs/sloth.jpeg" },
  { name: "Utter", src: "q5imgs/utter.jpeg" },
  { name: "Unicorn", src: "q5imgs/unicorn.png" },
  { name: "Human", src: "q5imgs/human.png" },
  { name: "Ducks", src: "q5imgs/ducks.jpg" },
  { name: "Rabbit", src: "q5imgs/rabbit.jpg" },
  { name: "Hamster", src: "q5imgs/hamster.jpg" },
  { name: "Gorilla", src: "q5imgs/gorilla.jpg" },
  { name: "Lemur", src: "q5imgs/lemur.jpg" },
  { name: "Giraffe", src: "q5imgs/giraffe.jpg" },
];
// WE ONLY WANT THE FLASHLIGHT WHEN WE LOOK FOR ANIMALS IN THE QUIZ
function initFlashlight() {
  document.styleSheets[2].disabled = false;
}

function removeFlashlight () {
  document.styleSheets[2].disabled = true;
}

function initAnimals() {
  initFlashlight();
  randomPicker = random(animalName);
  // ASK THE USER TO FIND ONE OF THE ANIMALS FROM THE VARIABLE animalName
  document.getElementById("containerBox").innerHTML = "";
  textBox.innerHTML = `Find the ${animalName[randomPicker]}`;

  let xPos = 0;
  let yPos = 0;

  for (let i = 0; i < animalList.length; i++) { 
    if (xPos == 4) (xPos = 0), yPos++;
    let animalDiv = $("<div/>").attr("class", "animalImage");
    animalDiv.attr("onclick", `rightOrWrong("${animalList[i].name}")`);
    animalDiv
      // WRITING CSS IN THE JS
      .css({
        left: 25 * xPos + "%", // DISPLAY IMAGES 4 x 4 = 16
        top: 25 * yPos + "%",
        background: `url(${animalList[i].src})`, // PUTTING ALL THE IMAGES FROM THE VARIABLE/ARRAY animalList AS BACKGROUND
        "background-size": "contain",
        "background-position": "center",
        "background-repeat": "no-repeat",
      })
      .appendTo("#containerBox")
      .html(); // APPEND THE CSS TO #containerBox DIV IN HTML
    xPos++;
  }
}
// IF THE NAME OF THE ANIMAL IS THE SAME AS THE RANDOM PICKED NAME, 
// CALL FUNCTION RIGHT ANSWER! AND ELSE, CALL FUNCTION WRONG ANSWER! (IN randomInit.js)
function rightOrWrong(name) {
  if (animalName[randomPicker] == name) correctAnswer();
  else wrongAnswer();
  removeFlashlight();
  animalName.splice(randomPicker, 1); 
  noMoreThan5++;
}

//MAKES THE LIGHT MOVE WITH MOUSE
function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')

}
// EVENTLISTENERS UPDATE WHEN USER MOVES MOUSE
document.addEventListener('mousemove',update);
document.addEventListener('touchmove',update);