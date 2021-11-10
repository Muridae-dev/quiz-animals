let currentQuestion = 0;

const ghibliSound = [
  {
    src: 'data/hauru.mp3',
    movie: 'Hawl',
  },
  {
    src: 'data/kurenainobuta.mp3',
    movie: 'Porco Rosso',
  },
  {
    src: 'data/laputa.mp3',
    movie: 'Castle in the Sky',
  },
  {
    src: 'data/majo.mp3',
    movie: 'Kikis Delivery Service',
  },
  {
    src: 'data/nausicaa.mp3',
    movie: 'Nausicaa of the Valley of the Wind',
  },
  {
    src: 'data/sentochihiro.mp3',
    movie: 'Spirited Away',
  },
  {
    src: 'data/totoro.mp3',
    movie: 'My Neighbor Totoro',
  },
];
const ghibliImg = [
  {
    alt: 'GhibliImage',
    movie: 'Hawl',
    img: 'images/hauru.png',
  },
  {
    alt: 'GhibliImage',
    movie: 'Porco Rosso',
    img: 'images/kurenainobuta.png',
  },
  {
    alt: 'GhibliImage',
    movie: 'Castle in the Sky',
    img: 'images/laputa.png',
  },
  {
    alt: 'GhibliImage',
    movie: 'Kikis Delivery Service',
    img: 'images/majo.png',
  },
  {
    alt: 'GhibliImage',
    movie: 'Nausicaa of the Valley of the Wind',
    img: 'images/nausicaa.png',
  },
  {
    alt: 'GhibliImage',
    movie: 'Spirited Away',
    img: 'images/sentochihiro.png',
  },
  {
    alt: 'GhibliImage',
    movie: 'My Neighbor Totoro',
    img: 'images/totoro.png',
  },
];

// shows imgs
function createCards(imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
    containerBox.innerHTML += `<img class="imgBtn" id="${i}" src="${imgArray[i].img}" alt="${imgArray[i].alt}" />`;
  }
  addEventListener();
}

function initGhibli() {
  //quizTitle.innerHTML = 'Ghibli Intro QUIZ';
  containerBox.innerHTML = '';
  audio.pause();

  textBox.innerHTML = 'Which Ghibli movie is this song from?';
  randomPicker = random(ghibliSound);
  console.log('ghibli random is ', randomPicker);
  containerBox.innerHTML = `<audio style="z-index: 99;" id="audioControls" controls><source src="${ghibliSound[randomPicker].src}" type="audio/wav"></audio>`;
  createCards(ghibliImg);
  addEventListener();
}

// add EventListener to imgBtn class
function addEventListener() {
  let imgBtn = document.querySelectorAll('.imgBtn');
  console.log(imgBtn);
  imgBtn.forEach((e) => e.addEventListener('click', onClick));
}

function onClick(evt) {
  console.log('evt target alt is ', evt.target.alt);
  if (evt.target.alt === 'GhibliImage') {
    if (
      ghibliImg[parseInt(evt.target.id)].movie ===
      ghibliSound[randomPicker].movie
    ) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
    audio.play();
    currentQuestion++;
    ghibliSound.splice(randomPicker, 1);
    console.log('gibliSound is ', ghibliSound);
  }
  if (evt.target.alt === 'SilhouetteImage') {
    if (
      silhouetteImg[parseInt(evt.target.id)].id ===
      silhouetteQuestions[randomPicker].id
    ) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
    currentQuiz++;
    silhouetteQuestions.splice(randomPicker, 1);
    console.log('silhouetteQ is ', silhouetteQuestions);
  }
}
