//const clickImage = document.getElementById('clickImage');
//const quizTitle = document.getElementById('quiz-title');
//const popup = document.getElementById('popup');
//const body = document.getElementsByTagName('body');
let score = 0;

const silhouetteImg = [
  {
    id: '01',
    img: './images/Luke.png',
    question: 'Which guy is from Death Note?',
  },
  {
    id: '02',
    img: './images/Ichigo.png',
    question: 'Who is a Shinigami who has a sword named Zangetsu?',
  },
  {
    id: '03',
    img: './images/Naruto.png',
    question: 'Who has a name which is a type of topping you put in ramen?',
  },
  {
    id: '04',
    img: './images/Levi.png',
    question: 'Who fights against titans?',
  },
];

const ghibliSound = [
  {
    src: 'data/hauru.mp3',
    movie: 'Hawl',
    img: './images/hauru.png',
  },
  {
    src: 'data/kurenainobuta.mp3',
    movie: 'Porco Rosso',
    img: './images/kurenainobuta.png',
  },
  {
    src: 'data/laputa.mp3',
    movie: 'Castle in the Sky',
    img: './images/laputa.png',
  },
  {
    src: 'data/majo.mp3',
    movie: 'Kikis Delivery Service',
    img: './images/majo.png',
  },
  {
    src: 'data/nausicaa.mp3',
    movie: 'Nausicaa of the Valley of the Wind',
    img: './images/nausicaa.png',
  },
  {
    src: 'data/sentochihiro.mp3',
    movie: 'Spirited Away',
    img: './images/sentochihiro.png',
  },
  {
    src: 'data/totoro.mp3',
    movie: 'My Neighbor Totoro',
    img: './images/totoro.png',
  },
];

// shows imgs
function createCards(imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
    containerBox.innerHTML += `<img class="imgBtn" id="${i}" src="${imgArray[i].img}" />`;
  }
  addEventListener();
}

function initSilhouette () {
  containerBox.innerHTML = '';
  randomPicker = random(silhouetteImg);
  console.log(randomPicker);

  textBox.innerHTML = silhouetteImg[randomPicker].question;
  createCards(silhouetteImg);

}


// add EventListener to imgBtn class
function addEventListener() {
  let imgBtn = document.querySelectorAll('.imgBtn');
  console.log(imgBtn);
  imgBtn.forEach((e) => e.addEventListener('click', onClick));
}
//add EventListener for clicking a card
function onClick(evt) {
  console.log('target is ', parseInt(evt.target.id));
  console.log('randomPicker is ', randomPicker);
  textBox.innerHTML = '';
  if(evt.target == silhouetteImg) console.log("silhouette");
  if(evt.target == ghibliSound) console.log("ghibli");
  if (parseInt(evt.target.id) === randomPicker) {
    correctAnswer();
    //popupToggle();
    score++;
    console.log('score is ', score);
  } else {
    //popupToggle();
    wrongAnswer();
  }
}

//compare if the clicked item is correct answer

//save it in variable if it is correct answer

//



//popup comes up and goes to the next question
function initGhibli() {
    //quizTitle.innerHTML = 'Ghibli Intro QUIZ';
    containerBox.innerHTML = '';
    console.log('btn clicked');

    textBox.innerHTML = 'Which Ghibli movie is this song from?';
    randomPicker = random(ghibliSound);
    console.log('ghibli random is ', randomPicker);
    containerBox.innerHTML = `<audio controls><source src="${ghibliSound[randomPicker].src}" type="audio/wav"></audio>`;
    createCards(ghibliSound);
    addEventListener();
}

// function playAudio(url) {
//   new Audio(url).play();
//   console.log('clicked play');
// }
