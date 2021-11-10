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

function initFlashlight() {
  document.styleSheets[2].disabled = false;
}

function removeFlashlight () {
  document.styleSheets[2].disabled = true;
}

function initAnimals() {
  initFlashlight();
  randomPicker = random(animalName);

  document.getElementById("containerBox").innerHTML = "";
  textBox.innerHTML = `Find the ${animalName[randomPicker]}`;

  let xPos = 0;
  let yPos = 0;

  for(let i=0; i < animalList.length; i++){
    if (xPos == 4) xPos = 0,  yPos++;
    let animalDiv = $('<div/>').attr('class', 'animalImage');
    animalDiv.attr('onclick', `rightOrWrong("${animalList[i].name}")`);
    animalDiv.css({
      'left' : 25*xPos + '%',
      'top' : 25*yPos + '%',
      'background' : `url(${animalList[i].src})`,
      'background-size' : 'contain',
      'background-position' : 'center',
      'background-repeat' : 'no-repeat'
    }).appendTo("#containerBox").html();
    xPos++;
  }

}

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

document.addEventListener('mousemove',update);
document.addEventListener('touchmove',update);